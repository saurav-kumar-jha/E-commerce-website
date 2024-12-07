import { useState } from "react"
import { BsEyeSlashFill } from "react-icons/bs"
import { IoEyeSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"


export const Signup = () => {
    const [inputvalue, setinputvalue] = useState({ name: "", email: "", pass: "", cnfpass: "" })
    const [show, setshow] = useState("password")
    const [Show, setShow] = useState("password")
    const [form2, setform2] = useState(false)
    const [otp, setotp] = useState("5648")
    const [Otpvalue, setoptvalue] = useState({otp:""})
    const navigate = useNavigate()

    
    const handleinputchange = (e) => {
        const { name, value } = e.target
        setinputvalue((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handlereset = () => {
        setinputvalue({ name: "", email: "", pass: "", cnfpass: "" })
    }
    const handleoptvalue = (e)=>{
        setoptvalue((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const handlesubmit = (e) => {
        if (inputvalue.name !== "" || inputvalue.email !== "" || inputvalue.pass !== "" || inputvalue.cnfpass !== "" && inputvalue.pass !== inputvalue.cnfpass) {
            e.preventDefault()
            setform2(true)
            setTimeout(()=>{
                alert(`Enter this otp ${otp}`)
            },2000)
        } else {
            alert("something went wrong")
        }
    }
    const handleformsubmit = (e)=>{
        e.preventDefault()
        otp !== Otpvalue.otp ? alert("Invalid OTP"):alert("Resigtration completed")
        setinputvalue({ name: "", email: "", pass: "", cnfpass: "" })
        setoptvalue({otp:""})
        setTimeout(() => {
            navigate("/")            
        }, 2000);
        setform2(false)
    }
    return (
        <>
            <section className="h-[auto] w-[90vw] md:w-[40%] border rounded  mx-auto px-[24px] py-[20px] mt-[20px] bg-[#a1b7c4d2] text-black ">
                <h1 className="text-[28px] font-semibold text-center mb-13 ">Welcome to E-commerce</h1>
                <p className="text-[20px] font-medium text-center mb-3 ">Please complete resigtration before shopping..</p>
                <form className="h-[60%] w-full mt-[30px] ">
                    <label htmlFor="email" className="text-[17px] my-2 ">Name:</label><br />
                    <input type="text" className="h-[auto] w-[68%] ml-[20px] my-[8px] outline-purple-600 px-[10px] py-[4px] text-[16px] font-semibold rounded-sm border border-[black] bg-[#ffffff94] shadowinp " name="name" value={inputvalue.name} onChange={handleinputchange} /> <br />
                    <label htmlFor="email" className="text-[17px] my-2 ">Email:</label><br />
                    <input type="email" className="h-[auto] w-[68%] ml-[20px] my-[8px] outline-purple-600 px-[10px] py-[4px] text-[16px] font-semibold rounded-sm border border-[black] bg-[#ffffff94] shadowinp " name="email" value={inputvalue.email} onChange={handleinputchange} /> <br />
                    <label htmlFor="pass" className="text-[17px] my-2 ">Password:</label><br />
                    <div className="h-[auto] w-[68%] ml-[20px] my-[8px] outline-none px-2 rounded-sm border border-[black] bg-[#ffffff94] shadowinp flex items-center">
                        <input type={show} className="outline-none w-[90%] bg-transparent  py-[4px] text-[16px] font-semibold " name="pass" value={inputvalue.pass} onChange={handleinputchange} />
                        <span className="text-[20px] cursor-pointer w-[10%] ">
                            {
                                show == "password" ? <IoEyeSharp onClick={() => setshow("text")} /> : <BsEyeSlashFill onClick={() => setshow("password")} />
                            }
                        </span>
                    </div>
                    <label htmlFor="pass" className="text-[17px] my-2 ">Confirm Password:</label><br />
                    <div className="h-[auto] w-[68%] ml-[20px] my-[8px] outline-none px-2 rounded-sm border border-black focus:border-purple-600 bg-[#ffffff94] shadowinp flex items-center">
                        <input type={Show} className="outline-none w-[90%] bg-transparent  py-[4px] text-[16px] font-semibold " name="cnfpass" value={inputvalue.cnfpass} onChange={handleinputchange} />
                        <span className="text-[20px] cursor-pointer w-[10%] ">
                            {
                                Show == "password" ? <IoEyeSharp onClick={() => setShow("text")} /> : <BsEyeSlashFill onClick={() => setShow("password")} />
                            }
                        </span>
                    </div>
                    <div className="w-full px-2 md:flex block justify-between ">
                        <button className={`h-[auto] w-[48%] rounded bg-purple-600 border border-purple-800 my-[15px] text-white text-[24px] font-semibold `} onClick={handlesubmit} >SUBMIT</button><br />
                        <button className={`h-[auto] w-[48%] rounded bg-purple-600 border border-purple-800 my-[15px] text-white text-[24px] font-semibold `} type="reset" onClick={handlereset} >RESET</button>
                    </div>
                    <div className={` ${form2 ? "block" : "hidden"} `}>
                        <label htmlFor="otp">Enter OTP:</label>
                        <input type="text" className="h-[30px] w-auto py-[4px] outline-none border border-transparent hover:border-black rounded shadowinp px-[8px] " name="otp" value={Otpvalue.otp} onChange={handleoptvalue} />
                        <button type="submit" className="h-auto w-auto px-2 py-1 border border-transparent hover:scale-95 bg-blue-600 hover:border-black rounded-sm mx-2 text-white text-[17px] font-semibold " onClick={handleformsubmit}>SUBMIT</button>
                    </div>

                </form>
            </section>
        </>
    )
}