import { FaCartShopping } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"


export const Cartnav = ()=>{
    const navigate = useNavigate()

  const handlecart = () => {
    navigate("/cart")
  }
    return(
        <>
         <div className="justify-center items-center h-[100%] w-[14%] hidden md:flex ">
          <span className="h-[50px] w-[100px] flex justify-center font-bold text-[32px] mb-[-20px] cursor-pointer text-white" onClick={handlecart}><FaCartShopping /></span>
        </div>
        </>
    )
}