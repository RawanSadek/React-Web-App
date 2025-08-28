import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MasterLayout from './Modules/Shared/Components/MasterLayout/MasterLayout'
import NotFound from './Modules/Shared/Components/NotFound/NotFound'
import Dashboard from './Modules/MainModule/Dashboard/Dashboard'
import { ToastContainer } from 'react-toastify'

function App() {

  const routes = createBrowserRouter([
    {
      path: '',
      element: <MasterLayout/>,
      errorElement: <NotFound/>,
      children:[
        {index: 'true', element: <Dashboard/>},
        {index: 'dashboard', element: <Dashboard/>},
      ]
    }
  ])

  return (
    <>
    <ToastContainer/>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
