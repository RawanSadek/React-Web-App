import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import NavBar from '../NavBar/NavBar'

export default function MasterLayout() {
    return (

        <div className='grid grid-cols-6 gap-2 h-screen'>
            <div className="col-span-1">
                <SideBar />
            </div>
            <div className="col-span-5">
                <NavBar/>
                <Outlet />
            </div>
        </div>
    )
}
