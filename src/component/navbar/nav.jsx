import { Search } from "./search"
import { Cartnav } from "./cart"
import { Navbtn } from "./navbtn"

export const Navbar = () => {
  
  return (
    <>
      <div className="flex border border-black h-[12vh] w-[100%] justify-evenly items-center bg-[#666b6dbe] ">
        <div>
          <p>Logo</p>
        </div>
       <Search/>
        <Cartnav/>
        <Navbtn/>
      </div>
    </>
  )
}