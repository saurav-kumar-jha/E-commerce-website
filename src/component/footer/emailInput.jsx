import { useState } from "react"


export const EmailInput = ()=>{
    const [email,setemail] = useState({email:""})
    const handlesubmit = (e)=>{
        e.preventDefault()
        setTimeout(() => {
            alert("submitted")
            setemail({email:""})
        }, 2000);
    }
    return(
        <>
          <div className="h-auto w-[60vw] md:w-[40vw] border-2 border-black rounded-lg backdrop-blur-md mt-[-60px] mx-auto py-4 px-3 " >
            <h2 className="md:text-[26px] text-[18px] mb-1 ml-[-8px] font-medium " >Subscribe to get new updates..</h2>
            <div className="md:flex block justify-evenly items-center" >
                <input type="email" placeholder="Enter email" className="h-auto w-[66%] rounded-lg font-medium mr-1 px-2 py-2 outline-purple-600 shadowinp " name="email" value={email.email} onChange={(e)=>setemail(e.target.value)} required/>
                <button className="h-[auto] w-[auto] border border-transparent rounded-lg bg-purple-600 text-[80%] text-white font-medium px-3 py-3 " onClick={handlesubmit} >SUBSCRIBE</button>
            </div>
          </div>
        </>
    )
}