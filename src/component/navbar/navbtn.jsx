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
          <div className="md:flex block justify-between items-center h-[100%] w-[14%] " >
           <button className="h-[44px] w-[90px] border block border-purple-950 bg-purple-600 hover:bg-transparent text-[18px] text-white font-semibold cursor-pointer " onClick={handlelogin} >Login</button>
           <button className="h-[44px] w-[90px] hidden md:block border border-purple-950 hover:bg-purple-600 bg-transparent text-[18px] text-white font-semibold cursor-pointer " onClick={handlesignup}>Sign up</button>
         </div> 
         
        }
        
        </>
    )
}