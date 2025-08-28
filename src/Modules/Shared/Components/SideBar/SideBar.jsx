import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/Images/Synergy.png'

export default function SideBar() {
    return (
        <div className="sidebar-container h-full">
            <Sidebar className="h-full sidebar bg-gray-500" >
                <img src={logo} alt="logo" className=" mt-5 mx-3" />
                <Menu className="mt-5">
                    <MenuItem component={<Link to='home'></Link>} icon={<i className="fa-solid fa-house"></i>}> Home </MenuItem>
                    <MenuItem component={<Link to='recipes'></Link>} icon={<i className="fa-regular fa-newspaper"></i>}> Recipes </MenuItem>
                    <MenuItem icon={<i className="fa-solid fa-unlock-keyhole"></i>}> Change Password </MenuItem>
                    <MenuItem component={<Link to='/login'></Link>} icon={<i className="fa-solid fa-right-from-bracket"></i>}> Logout </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}
