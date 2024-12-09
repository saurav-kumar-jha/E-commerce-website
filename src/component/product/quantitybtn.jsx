import { useState } from "react"
import { IoMdAdd } from "react-icons/io"
import { RiSubtractFill } from "react-icons/ri"


export const QuantityBtn = ()=>{
    const[num,setnum] = useState(1)

    const handleIncrease = (e)=>{
        e.preventDefault()
        setnum(num + 1)
    }
    const handleDecrease = (e)=>{
        e.preventDefault()
        if(num > 1){
            setnum(num - 1)
        }else{
            alert("Quantity cannot be less than one..")
        }
    }
    return(
        <>
          <div className="flex ">
            <p className="flex items-center"><span className="text-xl font-semibold">Quantity:</span></p>
            <div className="h-[30px] w-[auto] border border-[white] rounded-md flex shadow-xl mx-2 ">
                <button className="w-[40%] px-1 h-[100%] rounded-l-md bg-[#918f8c] flex justify-center items-center text-xl  " onClick={handleDecrease}><RiSubtractFill/> </button>
                <span className="w-[auto] max-w-[30%] px-2 flex items-center justify-center text-xl bg-slate-400 font-semibold ">{num}</span>
                <button className="w-[40%] h-[100%] rounded-r-md bg-[#918f8c] flex justify-center items-center text-xl " onClick={handleIncrease}><IoMdAdd/> </button>
            </div>
          </div>
        </>
    )
}
