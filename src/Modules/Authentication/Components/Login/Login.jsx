import axios from 'axios';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { REQUIRED_VALIDATION } from '../../../../Services/VALIDATIONS.JS';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';

export default function Login() {

    // let {getLoginData} = useContext(AuthContext);

    let navigate = useNavigate();

    let { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    //     const form = useForm({
    //     defaultValues: {
    //       email: "",
    //       password: ""
    //     },
    //   })

    // function onSubmit(values) {
    //     console.log(values)
    // }

    let onSubmit = async (data) => {
        try {
            let response = await axios.post('https://dummyjson.com/auth/login', data);
            // console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            //   getLoginData();
            toast.success(`Welcome again!`);
            navigate('/dashboard');

        } catch (error) {
            toast.error('Wrong Email or Password!')
            // console.log(error)
        }
    }

    let [showPass, setShowPass] = useState(false);


    return (
        <>
            <div className="auth-title-container my-3">
                <h5 className='auth-title font-bold text-xl'>Log In</h5>
                <p className='auth-subtitle !mt-2 !mb-7'>Welcome Back! Please enter your details</p>
            </div>


            {/* <Form {...form} >
                <form.field
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Enter your email" {...field}  className='bg-white !p-4.5'/>
                            </FormControl>
                        </FormItem>
                        
                    )}
                />
            </Form> */}



            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <div className="">
                    <div className="input-group-prepend">
                        <span className="input-group-text rounded-end-0 border-0 py-2" id="basic-addon1"><i className="fa-solid fa-mobile-screen fs-5 text-secondary py-2 pe-2 border-end border-1 border-secondary"></i></span>
                    </div>
                </div> */}
                <Input {...register('username', REQUIRED_VALIDATION('Password'))} type="text" className="!mt-4 !p-4.5 bg-white" placeholder="Enter your username" aria-label="email" aria-describedby="basic-addon1" />
                {errors.username && <span className='text-red-700'>{errors.username.message}</span>}

                {/* <div className="input-group mt-4 mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text rounded-end-0 border-0 py-2" id="basic-addon1"><i className="fa-solid fa-lock fs-5 text-secondary py-2 pe-2 border-end border-1 border-secondary"></i></span>
                    </div>
                </div> */}
                <Input {...register('password', REQUIRED_VALIDATION('Password'))} type={showPass ? 'text' : 'password'} className="!mt-5 !p-4.5 bg-white" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                {/* <div className="pss-toggle">
                        <Button onMouseDown={(e) => e.preventDefault()} onMouseUp={(e) => e.preventDefault()} onClick={() => setShowPass(!showPass)} type='button' className="input-group-text py-2 border-0 rounded-start-0" id="basic-addon1">{showPass ? <i className="fa-solid fa-eye-slash fs-5 text-secondary py-2 px-2 border-start border-1 border-secondary"></i> : <i className="fa-solid fa-eye fs-5 text-secondary py-2 px-2 border-start border-1 border-secondary"></i>}</Button>
                    </div> */}
                {errors.password && <span className='text-red-700'>{errors.password.message}</span>}

                <div className="flex justify-between !my-4">
                    <Link to='/register' className='text-decoration-none text-black fw-semibold'>Register Now?</Link>
                    <Link to='/forgot-password' className='text-decoration-none theme-green-text fw-semibold'>Forgot Password?</Link>
                </div>

                <Button disabled={isSubmitting} type='submit' className='w-[100%] py-2 text-white fw-semibold fs-5'>Login <i hidden={!isSubmitting} className="fa-solid fa-circle-notch fa-spin"></i></Button>
            </form>




        </>
    )
}
