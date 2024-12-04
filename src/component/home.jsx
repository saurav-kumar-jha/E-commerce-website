import { Outlet } from "react-router-dom"
import { Navbar } from "./navbar/nav"


export const Home = () => {
    return (
        <>
            <div className="h-[100vh] w-[100%] bg-[#000000d2] text-white ">
                <Navbar />
                <Outlet/>
            </div>
        </>
    )
}