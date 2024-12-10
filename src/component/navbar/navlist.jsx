import { useState } from "react"
import { FiAlignJustify, FiChevronRight, FiX } from "react-icons/fi"
import { NavLink } from "react-router-dom"


export const NavList = ()=>{
    const [nav, setnav] = useState(false)
    const handleNav = ()=>{
        if(nav){
            setnav(false)
        }else{
            setnav(true)
        }
        setTimeout(() => {
            setnav(false)
        }, 3000);
    }
    return(
        <>         
            <ul className="md:flex flex-col justify-between duration-500 items-center gap-9 flex z-50 w-[35vw] md:w-[20%] h-[100%] border py-3 text-white border-transparent" >
                <div className="text-3xl text-center mt-3 cursor-pointer ">
                    <FiAlignJustify onClick={handleNav} className={`${nav ? "hidden":"block"}`} />
                    <FiX onClick={handleNav} className={`${nav ? "block":"hidden"}`} />
                </div>

                <div className={`${ nav ? "flex":"hidden"} ${ nav ? "translate-x-[-2px]":"translate-x-full"} duration-200 flex-col z-50 backdrop-blur-lg w-[100%] md:w-[19vw] bg-[#442c4400] border-transparent rounded-lg border  pb-3 text-black pt-3 px-3`}>

                <NavLink to="/" className={ "text-[18px] flex justify-center items-center font-medium h-[100%] w-auto py-2 border border-transparent px-4 rounded-full hover:bg-[#829292] bg-[#a6afaf7a] text-center my-2 duration-200"}  >Home  </NavLink>

                <NavLink to="/products" className={"text-[18px] flex justify-center items-center font-medium h-[100%] w-auto py-2 border border-transparent px-4 rounded-full hover:bg-[#829292] bg-[#a6afaf7a] text-center  my-2  duration-200"} >Product</NavLink>

                <NavLink to="/contact" className={ "text-[18px] flex justify-center items-center font-medium h-[100%] w-auto py-2 border border-transparent px-4 rounded-full hover:bg-[#829292] bg-[#a6afaf7a] text-center my-2 duration-200"}  >Contact us<FiChevronRight /></NavLink>

                <NavLink to="/order" className={ "text-[18px] flex justify-center items-center font-medium h-[100%] w-auto py-2 border border-transparent px-4 rounded-full hover:bg-[#829292] bg-[#a6afaf7a] text-center my-2 duration-200"}  >Order<FiChevronRight /></NavLink>

                <NavLink to="/profile" className={ "text-[18px] flex justify-center items-center font-medium h-[100%] w-auto py-2 border border-transparent px-4 rounded-full hover:bg-[#829292] bg-[#a6afaf7a] text-center my-2 duration-200"}  >Profile<FiChevronRight /></NavLink>

                <NavLink to="/signup" className={ "text-[18px] flex justify-center items-center font-medium h-[100%] w-auto py-2 border border-transparent px-4 rounded-full hover:bg-[#829292] bg-[#a6afaf7a] text-center my-2 duration-200"}  >Sign up</NavLink>
                </div>
            </ul>
        </>
    )
}
// bg-[#829292]