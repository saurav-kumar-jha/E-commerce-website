import { useState } from "react"
import { BsEyeSlashFill } from "react-icons/bs"
import { IoEyeSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"


export const Forgetpass = () => {
    const [inputvalue, setinputvalue] = useState({ pass: "", cnfpass: "" })
    const [show, setshow] = useState("password")
    const [Show, setShow] = useState("password")
    const [email, setemail] = useState({email:""})
    const [otpshow, setotpshow] = useState(false)
    const [otp, setotp] = useState("4525")
    const [otpvalue, setotpvalue] = useState({otp:""})
    const [showpass, setshowpass] = useState(false)
    const navigate = useNavigate()

    const handleemail = (e)=>{
        e.preventDefault()
        const {name, value} = e.target
        setemail((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleinputchange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setinputvalue((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleotpbtn = (e) => {
        e.preventDefault()
        if(email.email === ""){
            alert("enter email")
        }else{
            setotpshow(true)
            setTimeout(() => {
                alert(`Enter this OTP ${otp} `)
            }, 2000);
        }
    }
    const handleotpvalue = (e)=>{
        e.preventDefault()
        const {name, value} = e.target
        setotpvalue((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleotpsubmit = (e)=>{
        e.preventDefault()
        otpvalue.otp !== otp ? alert("Invalid OTP"):setshowpass(true)
        setotpvalue({otp:""})
    }
    const handlefrgsub = (e)=>{
        e.preventDefault()
        if(inputvalue.pass === inputvalue.cnfpass){
            alert("Password successfully changed")
            setinputvalue({pass:"",cnfpass:""})
            setemail({email:""})
            setshowpass(false)
            setotpshow(false)
            setTimeout(() => {
                navigate("/login")                
            }, 2000);
        }else{
            alert("Password doesnot match")
        }
    }
    return ( 
        <>
            <section className="h-auto w-[90vw] md:w-[40%] bg-[#a1b7c4d2] px-[20px] py-[20px] mx-auto my-[20px] text-black ">
                <h1 className="text-[32px] font-semibold text-center mb-13">Forget Password</h1>
                <p className="text-[20px] font-medium text-center mb-3 ">Retrive your password</p>
                <form>
                    <label htmlFor="email">Enter your email:</label><br />
                    <input type="email" className="h-auto w-[70%] border border-transparent outline-purple-600 px-[8px] py-1 bg-[#ffffff94] rounded-sm text-black shadowinp hover:border-black " placeholder="Enter email" name="email" value={email.email} onChange={handleemail} required/><br />
                    <button className="h-auto w-auto px-2 py-1 border border-transparent hover:scale-95 bg-purple-600 hover:border-black rounded-sm mx-2 text-white text-[17px] font-semibold mt-2 " onClick={handleotpbtn} >SENT OTP</button>
                    <div className={`h-auto ${otpshow? "block":"hidden"} `}>
                        <label htmlFor="otp">Enter OTP:</label><br />
                        <input type="text" name="otp" value={otpvalue.otp} onChange={handleotpvalue} className="h-auto w-[70%] border border-transparent outline-purple-600 px-[8px] py-1 bg-[#ffffff94] rounded-sm text-black shadowinp hover:border-black " /><br />
                        <button className="h-auto w-auto px-2 py-1 border border-transparent hover:scale-95 bg-purple-600 hover:border-black rounded-sm mx-2 text-white text-[17px] font-semibold mt-[8px] " onClick={handleotpsubmit} >SUBMIT</button>
                        <div className={`h-auto ${showpass?"block":"hidden"} `}>
                            <label htmlFor="pass" className="text-[17px] my-2 ">Enter new Password:</label><br />
                            <div className="h-[auto] w-[68%] ml-[20px] my-[8px] focus:outline-purple-600 px-2 rounded-sm border border-[black] bg-[#ffffff94] shadowinp flex items-center">
                                <input type={show} className="outline-none w-[90%] bg-transparent  py-[4px] text-[16px] font-semibold " name="pass" value={inputvalue.pass} onChange={handleinputchange} />
                                <span className="text-[20px] cursor-pointer w-[10%] ">
                                    {
                                        show == "password" ? <IoEyeSharp onClick={() => setshow("text")} /> : <BsEyeSlashFill onClick={() => setshow("password")} />
                                    }
                                </span>
                            </div>
                            <label htmlFor="pass" className="text-[17px] my-2 "> Enter Confirm Password:</label><br />
                            <div className="h-[auto] w-[68%] ml-[20px] my-[8px] focus:outline-purple-600 px-2 rounded-sm border border-[black] bg-[#ffffff94] shadowinp flex items-center">
                                <input type={Show} className="outline-none w-[90%] bg-transparent  py-[4px] text-[16px] font-semibold " name="cnfpass" value={inputvalue.cnfpass} onChange={handleinputchange} />
                                <span className="text-[20px] cursor-pointer w-[10%] ">
                                    {
                                        Show == "password" ? <IoEyeSharp onClick={() => setShow("text")} /> : <BsEyeSlashFill onClick={() => setShow("password")} />
                                    }
                                </span>
                            </div>
                            <button className="h-auto w-auto px-2 py-1 border border-transparent hover:scale-95 bg-purple-600 hover:border-black rounded-sm mx-2 text-white text-[17px] font-semibold mt-2 " onClick={handlefrgsub} >SUBMIT</button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}