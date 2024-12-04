import { useState } from "react"
import { BsEyeSlashFill } from "react-icons/bs"
import { IoEyeSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"


export const Login = () => {
    const [show, setshow] = useState("password")
    const navigate = useNavigate()

    const handlefgtpass = () => {
        navigate("/")
    }
    return (
        <>
            <section className="h-[60vh] w-[38%] mx-auto mt-[20px] rounded-md px-[20px] text-black py-[25px] border border-transparent bg-[#a1b7c4d2] " >
                <h1 className="text-[28px] font-semibold text-center mb-3 ">Login</h1>
                <form className="h-[60%] w-full mt-[30px] ">
                    <label htmlFor="email" className="text-[17px] my-2 ">Email:</label><br />
                    <input type="email" className="h-[auto] w-[44%] outline-none px-[10px] py-[4px] text-[16px] font-semibold rounded-sm border border-[black] bg-[#ffffff94] shadowinp " /> <br />
                    <label htmlFor="pass" className="text-[17px] my-2 ">Password:</label><br />
                    <div className="h-[auto] w-[44%] outline-none px-2 rounded-sm border border-[black] bg-[#ffffff94] shadowinp flex items-center">
                        <input type={show} className="outline-none w-[90%] bg-transparent  py-[4px] text-[16px] font-semibold " />
                        <span className="text-[20px] cursor-pointer w-[10%] ">
                            {
                                show == "password" ? <IoEyeSharp onClick={() => setshow("text")} /> : <BsEyeSlashFill onClick={() => setshow("password")} />
                            }
                        </span>

                    </div>

                    <button className="h-[auto] w-[70%] bg-[blue] border border-blue-800 my-[15px] text-white text-[24px] font-semibold " >SUBMIT</button>

                </form>
                <div className="flex justify-between px-3 ">
                    <p className="text-[17px] " >Create new account ? <span className="text-[#ff0000] cursor-pointer ">Sign up</span></p>
                    <p className="text-[blue] cursor-pointer " onClick={handlefgtpass}>Forget Password</p>
                </div>
            </section>
        </>
    )
}