import { FaCartShopping } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"


export const Cartnav = ()=>{
    const navigate = useNavigate()

  const handlecart = () => {
    navigate("/cart")
  }
    return(
        <>
         <div className="flex justify-center items-center h-[100%] w-[14%] ">
          <span className="h-[50px] w-[100px] flex justify-center font-bold text-[32px] mb-[-20px] cursor-pointer" onClick={handlecart}><FaCartShopping /><span className="text-[16px] ml-[4px] mt-[5px] ">CART</span></span>
        </div>
        </>
    )
}