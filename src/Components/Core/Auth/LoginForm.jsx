// import React from "react";
import { useNavigate } from "react-router-dom";


// icons

import { CiLock, CiMail } from "react-icons/ci";



const LoginForm = () => {
   
    const navigate=useNavigate();
    
    // Redirct to Register
    const handleRouting=()=>{
        navigate("/register")
    }

    return(
        <div className="w-full flex flex-col items-center">
            <form className="flex flex-col gap-14 w-[50%]">
                <div className="flex flex-col gap-6">
                    {/* Email Input */}
                    <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center">
                        <CiMail fontSize={24} className="text-blue" />
                        <input type="email" id="Email" name="Email" placeholder="Enter Email Address"
                        className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-50"/>
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col gap-3">
                        <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center">
                            <CiLock fontSize={24} className="text-blue" />
                            <input type="password" id="Password" name="Password" placeholder="Enter Password"
                            className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-50"/>
                        </div>
                        <p className="self-end text-blue font-semibold">
                            Forgot Password?
                        </p>
                    </div>
                </div>

                <button className=" bg-blue w-full rounded-full py-2 px-2 text-white text-xl hover:bg-darkBlue transition-all">
                    Login
                </button>
            </form>
            <p className="text-blue mt-3">
                Do not Have an account ? <span className="cursor-pointer font-semibold" onClick={()=>{handleRouting()}}>Register</span>
            </p>
        </div>
    );
}

export default LoginForm;