import { useState } from "react"
import { BsEyeSlashFill } from "react-icons/bs"
import { IoEyeSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import Loader from "../../loader"


export const Login = () => {
    const [inputvalue, setinputvalue] = useState({email:"",pass:""})
    const [show, setshow] = useState("password")
    const navigate = useNavigate()

    const handleinputchange = (e)=>{
        const {name, value} = e.target
        setinputvalue((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const isdisable = !inputvalue.email || ! inputvalue.pass

    const handlefgtpass = () => {
        navigate("/forget-password")
    }
    const hanldesignup = ()=>{
        navigate("/signup")
    }

    
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert("form submitted")
        setinputvalue({email:"",pass:""})
    }

    return (
        <>
            <section className="md:h-[60vh] h-[auto] md:w-[40%] w-[90vw] mx-auto mt-[20px] rounded-md px-[20px] text-black py-[25px] border border-transparent bg-[#a1b7c4d2] " >
                <h1 className="text-[28px] font-semibold text-center mb-3 ">Welcome to E-commerce</h1>
                <form className="h-[60%] w-full mt-[30px] " onSubmit={handleSubmit}>
                    <label htmlFor="email" className="text-[17px] my-2 ">Email:</label><br />
                    <input type="email" className="h-[auto] w-[68%] ml-[20px] my-[8px] outline-none px-[10px] py-[4px] text-[16px] font-semibold rounded-sm border border-[black] bg-[#ffffff94] shadowinp " name="email" value={inputvalue.email} onChange={handleinputchange} /> <br />
                    <label htmlFor="pass" className="text-[17px] my-2 ">Password:</label><br />
                    <div className="h-[auto] w-[68%] ml-[20px] my-[8px] outline-none px-2 rounded-sm border border-[black] bg-[#ffffff94] shadowinp flex items-center">
                        <input type={show} className="outline-none w-[90%] bg-transparent  py-[4px] text-[16px] font-semibold " name="pass" value={inputvalue.pass} onChange={handleinputchange} />
                        <span className="text-[20px] cursor-pointer w-[10%] ">
                            {
                                show == "password" ? <IoEyeSharp onClick={() => setshow("text")} /> : <BsEyeSlashFill onClick={() => setshow("password")} />
                            }
                        </span>

                    </div>

                    <button className={`h-[auto] w-[72%] rounded bg-purple-600 border border-purple-800 my-[15px] text-white text-[24px] font-semibold ${isdisable ? "bg-[#34343d] ":"bg-[blue]"} ${isdisable? "cursor-not-allowed":"cursor-pointer"} `} disabled={isdisable} >SUBMIT</button>

                </form>
                <div className="md:flex block justify-between   ">
                    <p className="text-[16px] " >Create new account ? <span className="text-[#ff0000] cursor-pointer " onClick={hanldesignup}>Sign up</span></p>
                    <p className="text-[blue] cursor-pointer " onClick={handlefgtpass}>Forget Password</p>
                </div>
            </section>
        </>
    )
}