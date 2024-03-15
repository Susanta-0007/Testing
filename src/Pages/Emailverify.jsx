import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, verifyOTP } from "../Services/Operations/authAPI";
import { setSignUpData, setIsRegister } from "../store/slices/authSlice";
const Emailverify = () => {
    const [otp, setotp] = useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const signUpData=useSelector((state)=>state.auth.signUpData);
    const isRegister=useSelector((state)=>state.auth.isRegister);
    const forgotEmailData=useSelector((state)=>state.auth.forgotEmailData);



    // console.log(otp);

    const registerHandleOnSubmit=(event)=>{
        event.preventDefault();

        console.log("OTP SEND");

        console.log(signUpData);

        const{accountType,firstName,lastName,email,password,confirmPassword}=signUpData;
        console.log(accountType,firstName,lastName,email,password,confirmPassword);
        // dispatch(setSignUpData(firstName, lastName, email, password, confirmPassword, accountType, otp));
        dispatch(setIsRegister(false));
        // dispatch(register(accountType,firstName,lastName,email,password,confirmPassword,navigate));
        dispatch(verifyOTP(email,otp,isRegister,signUpData,navigate));
    }


    const handleOnSubmit=(event)=>{
        event.preventDefault();

        // const {email}=for;
        console.log("OTP For Forgot Password");
        dispatch(verifyOTP(forgotEmailData.email,otp,isRegister,signUpData,navigate));
    }
    

    return (
        <div className="w-[100%] h-[100vh] bg-[#2D847A] text-white ">

            <div className="w-[100%] h-full mobile:w-[60%] tablet:w-[40%] m-auto  gap-4 px-8 flex  flex-col justify-center">
                <div>
                    <h1 className=" font-semibold text-xl mobile:text-3xl ">
                        Email Verification
                    </h1>
                </div>
                <p className="font-semibold text-sm mobile:text-xl ">
                    A verification code has been sent to you. Enter the code below
                </p>
                <form 
                onSubmit={isRegister ? registerHandleOnSubmit : handleOnSubmit}
                className="flex flex-col gap-20">
                    <OTPInput
                        value={otp}
                        inputType="tel"
                        onChange={setotp}
                        numInputs={6}
                        renderInput={(props) => (
                            <input
                                {...props}
                                // placeholder="-"
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className=" h-10 mobile:h-14 tablet:h-20  w-[15%] rounded-md text-richblack-5 aspect-square text-center outline-none text-[#3A8064] text-xl font-semibold"
                            />
                        )}
                        containerStyle={{
                            justifyContent: "space-between",
                            gap: "0 6px",
                        }}
                    />

                    <button type="submit"
                        className="w-full  py-[12px] px-[12px] rounded-[8px] mt-6 font-medium bg-[#D9D9D9] text-[#2D847A] hover:bg-[#3A8064] hover:text-white transition-all duration-300 text-xl">
                        Verify Email
                    </button>

                   
                </form>
                <div className="flex items-center justify-between">
                        <div>
                            <Link to={"/"}>
                                <p className="text-richblack-5 text-lg  flex items-center gap-x-2 font-semibold hover:text-[#A6E873]">
                                    <BiArrowBack /> Back to Login
                                </p>
                            </Link>
                        </div>

                        <button 
                            className="flex items-center text-blue-100 text-lg gap-x-2 font-semibold hover:text-[#A6E873]">
                            <RxCountdownTimer /> Resend OTP
                        </button>
                    </div>
            </div>


        </div>
    );
};

export default Emailverify;
