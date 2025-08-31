import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MasterLayout from './Modules/Shared/Components/MasterLayout/MasterLayout'
import NotFound from './Modules/Shared/Components/NotFound/NotFound'
import Dashboard from './Modules/MainModule/Components/Dashboard/Dashboard'
import { ToastContainer } from 'react-toastify'
import AuthLayout from './Modules/Shared/Components/AuthLayout/AuthLayout'
import Login from './Modules/Authentication/Components/Login/Login'
import { SidebarProvider } from './components/ui/sidebar'
import SideBar from './Modules/Shared/Components/SideBar/SideBar'

function App() {

  const routes = createBrowserRouter([
    {
      path: '',
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: 'login', element: <Login /> },
      ]
    },
    {
      path: 'dashboard',
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: 'true', element: <Dashboard /> },
      ]
    }
  ])

  return (
    <>
      <ToastContainer />
      <SidebarProvider>
        {/* <SideBar /> */}
        <RouterProvider router={routes}></RouterProvider>
      </SidebarProvider>
    </>
  )
}

export default App
