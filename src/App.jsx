import { BrowserRouter as Router, Routes, Route, useNavigate, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Errorpage } from './component/errorpage'
import { Home } from './component/home'
import { Login } from './component/authentication/login'
import { Signup } from './component/authentication/signup'
import { Forgetpass } from './component/authentication/forgetpass'
import { Productsection } from './component/product/product'
import { Cart } from './component/product/cart'
import { Cartprovider } from './component/context'
import { Cart2 } from './component/product/cart2.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[{
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/forget-password",
      element:<Forgetpass/>
    },
    {
      path:"/products",
      element:<Productsection/>
    },
    {
      path:"/products/cart",
      element:<Cart2/>
    }
    
  ]
  },
  {
    path:"/*",
    component:<Errorpage/>
  }
])

function App() {
  return (
    <>
     <Cartprovider>

        <RouterProvider router={router} />
     </Cartprovider>
    </>
  )
}

export default App
