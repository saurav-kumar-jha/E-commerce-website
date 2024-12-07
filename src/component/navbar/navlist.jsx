import { NavLink } from "react-router-dom"


export const NavList = ()=>{
    return(
        <>         
            <ul className="md:flex hidden justify-evenly items-center w-[30%] px-3 border py-3 border-transparent " >
                <NavLink to="/" className={({isActive})=> isActive? "text-[18px] font-medium h-[100%] w-auto py-2 border border-transparent px-4 rounded-full bg-[#6f00ff] text-white hover:scale-105 duration-100":"text-[18px] font-medium h-[100%] w-auto py-2 border border-transparent px-4 rounded-full bg-[#36363600] text-white hover:scale-105"}  >Home</NavLink>
                <NavLink to="/products" className={({isActive})=> isActive? "text-[18px] font-medium h-[100%] w-auto py-2 border border-transparent px-4 rounded-full bg-[#6f00ff] text-white hover:scale-105 duration-100":"text-[18px] font-medium h-[100%] w-auto py-2 border border-transparent px-4 rounded-full bg-[#36363600] text-white hover:scale-105"} >Product</NavLink>
                <NavLink to="/contact" className={({isActive})=> isActive? "text-[18px] font-medium h-[100%] w-auto py-2 border border-transparent px-4 rounded-full bg-[#6f00ff] text-white hover:scale-105 duration-100":"text-[18px] font-medium h-[100%] w-auto py-2 border border-transparent px-4 rounded-full bg-[#36363600] text-white hover:scale-105"}  >Contact us</NavLink>
            </ul>
        </>
    )
}