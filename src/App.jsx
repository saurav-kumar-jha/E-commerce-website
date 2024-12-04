import { BrowserRouter as Router, Routes, Route, useNavigate, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Errorpage } from './component/errorpage'
import { Home } from './component/home'
import { Login } from './component/authentication/login'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[{
      path:"/login",
      element:<Login/>
    }]
  },
  {
    path:"/*",
    component:<Errorpage/>
  }
])

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
