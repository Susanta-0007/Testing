// import React from "react";

import { CiLock, CiMail } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


const RegisterForm = () => {

  const navigate=useNavigate();

  const handleRouting=()=>{
    navigate("/")
  }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <form action="" className="flex flex-col gap-5 w-[50%]">

                <div className="flex gap-2" >
                <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center">
                   
                    <input type="email" id="Email" name="Email" placeholder="Enter First Name"
                        className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-50" />
                </div>
                <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center">
                  
                    <input type="email" id="Email" name="Email" placeholder="Enter Last Name"
                        className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-50" />
                </div>
                </div>


                {/* Email Input */}
                <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center">
                    <CiMail fontSize={24} className="text-blue" />
                    <input type="email" id="Email" name="Email" placeholder="Enter Email Address"
                        className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-50" />
                </div>

                {/* Password Input */}

                <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center">
                    <CiLock fontSize={24} className="text-blue" />
                    <input type="password" id="Password" name="Password" placeholder="Enter Password"
                        className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-50" />
                </div>

                {/* Conform Password Input */}
                <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center">
                    <CiLock fontSize={24} className="text-blue" />
                    <input type="password" id="Password" name="Password" placeholder="Confirm Password"
                        className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-50" />
                </div>

                {/* Login Button */}

                <button className=" bg-blue w-full rounded-full py-2 px-2 text-white text-xl hover:bg-darkBlue transition-all">
                    Login
                </button>

                <p className="text-blue mt-3">
                Already Have an account ? <span className="cursor-pointer font-semibold" onClick={()=>{handleRouting()}}>Login</span>
            </p>


            </form>
        </div>
    );
}

export default RegisterForm;