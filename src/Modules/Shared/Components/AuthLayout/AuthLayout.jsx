import logo from '../../../../assets/Images/Synergy.png'
import { Outlet, useLocation } from 'react-router-dom'

export default function AuthLayout() {

  return (
    <div className='authContainer relative'>
      <div className="auth-overlay h-screen ">
        <div className="flex min-h-screen justify-center items-center">
          <div className='sm:w-[70%] md:w-[50%] lg:w-[35%]'>
            <div className="logo flex justify-center">
              <img src={logo} alt="logo" className=''/>
            </div>
            
            <Outlet />

          </div>
        </div>
      </div>
    </div>
  )
}