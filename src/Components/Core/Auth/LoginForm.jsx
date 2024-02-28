// import React from "react";
import { useNavigate } from "react-router-dom";
import { CiLock, CiMail } from "react-icons/ci";
import { IoEyeOutline,IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  // Redirct to Register
  const handleRouting = () => {
    navigate("/register");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form className="flex flex-col gap-14 tablet:w-[50%] w-[80%] ">
        <div className="flex flex-col gap-6">
          {/* Email Input */}
          <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center bg-white ">
            <CiMail fontSize={24} className="text-blue" />
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Enter Email Address"
              className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-80"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-3">
            <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center bg-white">
              <CiLock fontSize={24} className="text-blue" />
              <input
                type={isPasswordVisible ? "password": "text"}
                id="Password"
                name="Password"
                placeholder="Enter Password"
                className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-80"
              />
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
            <p className="self-end text-white mobile:text-blue font-semibold">
              Forgot Password?
            </p>
          </div>
        </div>

        <button className=" bg-white mobile:bg-blue text-blue mobile:text-white w-full rounded-full py-2 px-2  text-xl hover:bg-darkBlue transition-all  ">
          Login
        </button>
      </form>
      <p className="text-white mobile:text-blue mt-3">
        Do not Have an account ?{" "}
        <span
          className="cursor-pointer font-semibold"
          onClick={() => {
            handleRouting();
          }}
        >
          Register
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
