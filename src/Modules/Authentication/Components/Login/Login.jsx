import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import loading from '../../../../assets/Images/loading.gif'
import { REQUIRED_VALIDATION } from "../../../../Services/VALIDATIONS.JS"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { useStore } from '@/Store/AuthState/AuthState'

export default function Login() {
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)

    // setup form
    const form = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    })

    let { getLoginData } = useStore();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post("https://dummyjson.com/auth/login", {
                username: data.username,
                password: data.password,
            })
            localStorage.setItem("token", response.data.accessToken);
            getLoginData;
            // console.log(loginData)
            toast.success("Welcome again!");
            navigate("/dashboard");

        } catch (error) {
            toast.error("Wrong Username or Password!")
        }
    }

    return (
        <div >
            <div className="auth-title-container !my-5">
                <h5 className="auth-title font-bold text-xl">Log In</h5>
                <p className="auth-subtitle mt-2 mb-7">
                    Welcome Back! Please enter your details
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="username"
                        rules={REQUIRED_VALIDATION("Username")}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your username"
                                        {...field}
                                        className="bg-white !p-3"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        rules={REQUIRED_VALIDATION("Password")}
                        render={({ field }) => (
                            <FormItem className='!mt-4 !mb-6'>
                                <FormControl>
                                    <Input
                                        type={showPass ? "text" : "password"}
                                        placeholder="Enter your password"
                                        {...field}
                                        className="bg-white !p-3"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-between !my-4">
                        <Link to="/register" className="text-decoration-none font-semibold">Register Now?</Link>
                        <Link to="/forgot-password" className="text-decoration-none font-semibold">Forgot Password?</Link>
                    </div>

                    <Button
                        type="submit" disabled={form.formState.isSubmitting} className="w-full py-2 text-white font-semibold text-lg">
                        Login
                        <img hidden={!form.formState.isSubmitting} src={loading} alt='loading' className="w-[3%]" />
                    </Button>
                </form>
            </Form>
        </div>
    )
}
