import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiLock, CiMail } from "react-icons/ci";
import { IoEyeOutline,IoEyeOffOutline } from "react-icons/io5";



const RegisterForm = () => {
    const [tab, setTab] = useState("Patient");
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [isCnfPasswordVisible,setIsCnfPasswordVisible]=useState(true);
    
    const navigate = useNavigate();

    const handleRouting = () => {
        navigate("/")
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <form action="" className="flex flex-col gap-5 tablet:w-[50%] w-[80%] ">

                {/* Selection */}

                <div className="flex border-gray border-[0.01rem] px-1 py-1 rounded-full justify-around text-lg bg-white " >
                    <div
                        onClick={() => { setTab("Patient") }}
                        className={`w-[50%] py-2 text-center rounded-l-full cursor-pointer ${tab === "Patient" ? "bg-darkBlue  text-white mobile:text-white " : "text-blue "} `}>Patient</div>


                    <div
                        onClick={() => { setTab("Doctor") }}
                        className={`w-[50%] py-2 text-center rounded-r-full cursor-pointer ${tab === "Doctor" ? "bg-darkBlue  text-white mobile:text-white" : "text-blue"} `}>Doctor</div>
                </div>

                {/* NAME */}

                <div className="flex gap-2 " >
                    <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center bg-white ">

                        <input type="email" id="Email" name="Email" placeholder="Enter First Name"
                            className=" border-none outline-none w-full  placeholder:text-blue text-blue placeholder:opacity-80" />
                    </div>
                    <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center bg-white ">

                        <input type="email" id="Email" name="Email" placeholder="Enter Last Name"
                            className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-80" />
                    </div>
                </div>


                {/* Email Input */}
                <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center bg-white ">
                    <CiMail fontSize={24} className="text-blue" />
                    <input type="email" id="Email" name="Email" placeholder="Enter Email Address"
                        className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-80" />
                </div>

                {/* Password Input */}

                <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center bg-white ">
                    <CiLock fontSize={24} className="text-blue" />
                    <input  type={isPasswordVisible ? "password": "text"} id="Password" name="Password" placeholder="Enter Password"
                        className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-80" />
                    <div
                className="cursor-pointer"
                onClick={() => {
                  setIsPasswordVisible(!isPasswordVisible);
                }}
              >
                {isPasswordVisible ? (
                  <IoEyeOutline fontSize={24} className="text-blue" />
                ) : (
                  <IoEyeOffOutline fontSize={24} className="text-blue" />
                )}
              </div>
                </div>

                {/* Conform Password Input */}
                <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center bg-white ">
                    <CiLock fontSize={24} className="text-blue" />
                    <input  type={isCnfPasswordVisible ? "password": "text"} id="Password" name="Password" placeholder="Confirm Password"
                        className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-80" />
                        <div
                className="cursor-pointer"
                onClick={() => {
                  setIsCnfPasswordVisible(!isCnfPasswordVisible);
                }}
              >
                {isCnfPasswordVisible ? (
                  <IoEyeOutline fontSize={24} className="text-blue" />
                ) : (
                  <IoEyeOffOutline fontSize={24} className="text-blue" />
                )}
              </div>
                </div>

                {/* Login Button */}

                <button className=" bg-white mobile:bg-blue text-blue mobile:text-white w-full rounded-full py-2 px-2  text-xl hover:bg-darkBlue transition-all mt-8">
                    Login
                </button>

                <p className="text-white mobile:text-blue mt-0 text-center">
                    Already Have an account ? <span className="cursor-pointer font-semibold" onClick={() => { handleRouting() }}>Login</span>
                </p>


            </form>
        </div>
    );
}

export default RegisterForm;