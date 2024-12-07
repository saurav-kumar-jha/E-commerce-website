import { BrowserRouter as Router, Routes, Route, useNavigate, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Errorpage } from './component/errorpage'
import { Home } from './component/home'
import { Login } from './component/authentication/login'
import { Signup } from './component/authentication/signup'
import { Forgetpass } from './component/authentication/forgetpass'
import { Productsection } from './component/product/product'
import { Cart } from './component/product/cart2.jsx'
import 'react-slideshow-image/dist/styles.css'
import { SingleProduct } from './component/product/singleProduct.jsx'
import ContactUs from './component/contact.jsx'

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
      element:<Cart/>
    },
    {
      path:"/products/:id",
      element:<SingleProduct/>
    },
    {
      path:"/contact",
      element:<ContactUs/>
    }
  ]
  },
  {
    path:"*",
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
