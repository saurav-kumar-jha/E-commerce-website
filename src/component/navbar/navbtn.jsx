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
        {
          <div className="md:flex flex justify-between items-center h-[100%] w-[14%] " >
           <button className="h-[44px] w-[90px]  block rounded-full bg-slate-600 hover:bg-slate-700 text-[18px] text-white font-semibold cursor-pointer " onClick={handlelogin} >Login</button>
           <button className="h-[44px] w-[90px] hidden md:block rounded-full hover:bg-slate-600 bg-transparent text-[18px] text-white font-semibold cursor-pointer " onClick={handlesignup}>Sign up</button>
         </div> 
         
        }
        
        </>
    )
}