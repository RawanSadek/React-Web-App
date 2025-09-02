import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import NavBar from '../NavBar/NavBar'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function MasterLayout() {
    return (
        <>
            <SidebarProvider>
                <div className="flex h-screen w-screen">
                    <SideBar />

                    <div className="flex-1 w-full flex flex-col">
                        <NavBar />
                        <div className="flex-1 w-full overflow-auto p-4">
                            <Outlet />
                        </div>
                    </div>
                    
                </div>
            </SidebarProvider>
        </>


    )
}
