import { useContext, useState } from "react"
import { FaSearch } from "react-icons/fa"

export const Search = ()=>{
  const [show, setshow]= useState(false)
  const handleShow = ()=>{
    if(show){
      setshow(false)
    }else{
      setshow(true)
    }
  }
    return(
        <>
          <div className="h-[100%] md:w-[28%] w-[40vw] flex justify-center items-center ">
          <div className={`h-[30px] md:w-[80%] ${show ? "w-[80%]":"w-[8vw]"} flex rounded  text-white outline-purple-600 ${show?"bg-[#e9eff3]":"bg-transparent" } border-2 ${show?"border-black":"border-transparent"} md:border-transparent md:hover:border-black`}>
            <input type="search" className={`w-[88%] bg-transparent outline-none px-[8px] py-[4px] md:block ${show?"block":"hidden"} text-black font-mono text-[18px] `} placeholder="Search product" />
            <span className={`h-[100%] md:w-[12%]  ${show ? "w-[10%]":"w-[100%]"} text-end rounded-r flex justify-center items-center text-[19px] mr-[-15px] cursor-pointer bg-transparent md:bg-[orange] text-black`} onClick={handleShow} ><FaSearch /></span>
          </div>
        </div>
        </>
    )
}