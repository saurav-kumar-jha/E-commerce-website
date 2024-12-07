import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "./navbar/nav"
import { Footer } from "./footer/footer"
import { Navigation } from "../navigation"
import { useProductContext } from "./context/productContext"


export const Home = () => {
    const navigate = useLocation()
    const {name} = useProductContext()
    return (
        <>
            <div className="overflow-x-hidden" >
                <Navbar />
                {
                    navigate.pathname == "/" ? <Navigation/> :<Outlet/>
                }
                <Footer/>
            </div>
        </>
    )
}