import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CiLock } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { forgotPassword } from '../../../Services/Operations/authAPI';
import toast from 'react-hot-toast';

const UpdatePasswordForm = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(true);
  const [isReEnteredPasswordVisible,setIsReEnteredPasswordVisible]=useState(true);
  const [formData, setFormData] = useState({
    newPassword: "",
    reEnterNewPassword: "",
  });
  const forgotEmailData=useSelector((state)=>state.auth.forgotEmailData);
  const formChangeHandler = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };


  const submitHandler = (event) => {
    event.preventDefault();
    if(formData.newPassword!==formData.reEnterNewPassword){
      toast.error("Password Do Not Match");
      return;
    }

    const email=forgotEmailData.email;

    dispatch(forgotPassword(email,formData.newPassword,formData.reEnterNewPassword ,navigate));


  }


  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-bold text-white mobile:text-black pb-16">
        Update Password
      </h1>

      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-14 tablet:w-[50%] w-[80%] ">
        <div className="flex flex-col gap-6 ">
          {/* Password */}
          <div className="flex flex-col gap-3">
            <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center bg-white">
              <CiLock fontSize={24} className="text-blue" />
              <input
                required
                onChange={formChangeHandler}
                type={isNewPasswordVisible ? "password" : "text"}
                id="Password"
                name="newPassword"
                value={formData.newPassword}
                placeholder="Enter Password"
                className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-80"
              />
              <div
                className="cursor-pointer"
                onClick={() => {
                  setIsNewPasswordVisible(!isNewPasswordVisible);
                }}
              >
                {isNewPasswordVisible ? (
                  <IoEyeOutline fontSize={24} className="text-blue" />
                ) : (
                  <IoEyeOffOutline fontSize={24} className="text-blue" />
                )}
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="border-[0.01rem] border-gray rounded-full py-2 px-2 w-full relative flex gap-2 items-center bg-white ">
          <CiLock fontSize={24} className="text-blue" />
          <input
            required
            onChange={formChangeHandler}
            type={isReEnteredPasswordVisible ? "password" : "text"}
            id="confirmPassword"
            name="reEnterNewPassword"
            placeholder="Confirm Password"
            value={formData.reEnterNewPassword}
            className=" border-none outline-none w-full text-blue placeholder:text-blue placeholder:opacity-80"
          />
          <div
            className="cursor-pointer"
            onClick={() => {
              setIsReEnteredPasswordVisible(!isReEnteredPasswordVisible);
            }}
          >
            {isReEnteredPasswordVisible ? (
              <IoEyeOutline fontSize={24} className="text-blue" />
            ) : (
              <IoEyeOffOutline fontSize={24} className="text-blue" />
            )}
          </div>
        </div>

        </div>

        <button
          type="submit"
          className=" bg-white mobile:bg-blue text-blue mobile:text-white w-full rounded-full py-2 px-2  text-xl hover:bg-darkBlue hover:text-white   transition-all font-semibold  ">
          Update
        </button>

      </form>
    </div>
  )
}

export default UpdatePasswordForm;