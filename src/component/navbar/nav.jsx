import { Search } from "./search"
import { Cartnav } from "./cart"
import { Navbtn } from "./navbtn"
import { NavList } from "./navlist"

export const Navbar = () => {
  
  return (
    <>
      <div className="flex border border-transparent h-[12vh] w-[100%] justify-evenly items-center bg-[#666b6dbe] ">
        <div className="h-[100%] w-[25vw] flex justify-center items-center  rounded-full ">
          <img src="/logo-removebg-preview.png" alt="#" className="h-[200%] w-[80%] "  />
        </div>
       <Search/>
        <Cartnav/>
        <Navbtn/>
       <NavList/>
      </div>
    </>
  )
}