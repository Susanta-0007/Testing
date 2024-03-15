import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { setForgotEmailData, setIsRegister } from '../../../store/slices/authSlice';
import { sendOTP } from '../../../Services/Operations/authAPI';
import authLogo from "../../../assets/authimages/auth-logo.svg";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRegister = useSelector((state) => state.auth.isRegister);
  console.log(isRegister);

  const [formData, setFormData] = useState({
    email: ""
  });

  //* To store the formData .

  const formChangeHandler = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  //* Handle OnSubmit .

  const submitHandler = (event) => {
    event.preventDefault();
    const forgotEmailData = { ...formData };

    dispatch(setForgotEmailData(forgotEmailData));
    dispatch(setIsRegister(false));
    console.log(isRegister);
    dispatch(sendOTP(formData.email, false, navigate));
  }

  //* Redircting Route (to Login) .

  const handleRouting = () => {
    navigate("/login");
  };

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-2">

      <div className='py-8'>
        <img src={authLogo} alt="pulsePro " />
      </div>

      <h1 className='text-2xl font-bold text-white mobile:text-black py-8'>Forgot Password</h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-12  tablet:w-[50%] w-[80%]  ">


        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input
            required
            onChange={formChangeHandler}
            type="email"
            id="Email"
            name="email"
            value={formData.email}
            placeholder="Enter Email Address"
            className=" text-lg  outline-none w-full border-2 border-[#7C7C7C] rounded-md py-3 px-2   bg-white "
          />
        </div>


        {/* //* Sent OTP Button */}
        <button
          type='submit'
          className=" bg-[#A6E873]  w-full rounded-md py-2 px-2  text-xl hover:bg-[#3A8064] transition-all font-semibold  ">
          Sent OTP
        </button>
      </form>

      <p className=" text-center text-lg">
        Recalled Email?{" "}
        <span
          className="cursor-pointer font-semibold text-[#4B9B79] "
          onClick={() => {
            handleRouting();
          }}
        >
          Login
        </span>
      </p>

    </div>
  )
}

export default ForgotPasswordForm;