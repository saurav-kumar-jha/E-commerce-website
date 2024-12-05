import { useNavigate } from "react-router-dom"


export const Navbtn = ()=>{
    const navigate = useNavigate()
    const handlelogin = ()=>{
        navigate("/login")
    }
    const handlesignup = ()=>{
        navigate("/signup")
    }
    return(
        <>
         <div className="flex justify-between items-center h-[100%] w-[14%] " >
          <button className="h-[44px] w-[90px] border border-blue-950 bg-[#2c48a3] hover:bg-transparent text-[18px] font-semibold cursor-pointer " onClick={handlelogin} >Login</button>
          <button className="h-[44px] w-[90px] border border-blue-950 hover:bg-[#2c48a3] bg-transparent text-[18px] font-semibold cursor-pointer " onClick={handlesignup}>Sign up</button>
        </div>
        </>
    )
}