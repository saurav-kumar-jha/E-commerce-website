import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "./navbar/nav"
import { Productsection } from "./product/product"


export const Home = () => {
    const navigate = useLocation()
    return (
        <>
            <div>
                <Navbar />
                {
                    navigate == "/" ? <Productsection/>:<Outlet/>
                }
            </div>
        </>
    )
}