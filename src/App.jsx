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
import ProductForm from './trail/Addproduct'
import ProductList from './trail/product'
import { Addproduct } from './component/product/AddProduct.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/forget-password",
      element: <Forgetpass />
    },
    {
      path: "/products",
      element: <Productsection />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/products/:id",
      element: <SingleProduct />
    },
    {
      path: "/contact",
      element: <ContactUs />
    },
    {
      path:"/addProduct",
      element:<Addproduct/>
    }
    ]
  },
  {
    path: "*",
    component: <Errorpage />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <div>
        <h1>E-commerce Product Management</h1>
        <ProductForm />
        <ProductList />
      </div> */}
    </>
  )
}

export default App
