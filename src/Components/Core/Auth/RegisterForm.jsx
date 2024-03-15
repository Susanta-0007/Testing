import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiLock, CiMail } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { setSignUpData, setIsRegister } from "../../../store/slices/authSlice";
import { sendOTP } from "../../../Services/Operations/authAPI";
import { useDispatch, useSelector } from "react-redux";
import authLogo from "../../../assets/authimages/auth-logo.svg";

const RegisterForm = () => {
  const [tab, setTab] = useState("Patient");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isconfirmPasswordVisible, setIsconfirmPasswordVisible] =
    useState(true);
  const isRegister = useSelector((state) => state.auth.isRegister);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formChangeHandler = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (formData.password != formData.confirmPassword) {
      console.log("Here");
      toast.error("Password Do Not Match");
      return;
    }
    // console.log("Here");

    const signUpData = {
      ...formData,
      accountType: tab,
    };

    // console.log(signUpData);

    dispatch(setSignUpData(signUpData));

    dispatch(setIsRegister(true));

    console.log(isRegister);
    dispatch(sendOTP(formData.email, true, navigate));

    // dispatch(register(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setTab("Patient");
  };

  const handleRouting = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-2">
      {/* //* Logo */}

      <div>
        <img src={authLogo} alt="pulsePro" />
      </div>

      <h1 className="text-2xl font-bold  text-black py-6 ">
        Register
      </h1>

      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 tablet:w-[50%] w-[80%] "
      >
        {/* Selection */}
        <div className="flex  px-1 py-1 gap-2 mb-4 rounded-full justify-around text-lg bg-[#48917380] text-white font-semibold">
          <div
            onClick={() => {
              setTab("Patient");
            }}
            className={`w-[50%] py-2 text-center rounded-full cursor-pointer ${
              tab === "Patient" ? "bg-[#489173] " : "text-[#489173]"
            } `}
          >
            Patient
          </div>

          <div
            onClick={() => {
              setTab("Doctor");
            }}
            className={`w-[50%] py-2 text-center rounded-full cursor-pointer ${
              tab === "Doctor" ? "bg-[#489173]" : "text-[#489173]"
            } `}
          >
            Doctor
          </div>
        </div>

        {/* NAME */}
        <div className="flex gap-2 ">
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="firstName">
              First Name
            </label>
            <input
              required
              onChange={formChangeHandler}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              className=" text-lg  outline-none w-full border-2 border-[#7C7C7C] rounded-md py-2 px-2   bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="lastName">
              Last Name
            </label>
            <input
              required
              onChange={formChangeHandler}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              className="  text-lg  outline-none w-full border-2 border-[#7C7C7C] rounded-md py-2 px-2   bg-white"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-1 ">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input
            required
            onChange={formChangeHandler}
            type="email"
            id="Email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            className=" text-lg  outline-none w-full border-2 border-[#7C7C7C] rounded-md py-2 px-2   bg-white"
          />
        </div>

        {/* Password Input */}
        <div className="flex  flex-col gap-1">
          <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <div className="flex text-lg  outline-none w-full border-2 border-[#7C7C7C] rounded-md py-2 px-2   bg-white ">
            <input
              required
              onChange={formChangeHandler}
              type={isPasswordVisible ? "password" : "text"}
              id="Password"
              name="password"
              placeholder="Password"
              value={formData.password}
              className="border-none outline-none w-full"
            />
            <div
              className="cursor-pointer"
              onClick={() => {
                setIsPasswordVisible(!isPasswordVisible);
              }}
            >
              {isPasswordVisible ? (
                <IoEyeOutline fontSize={24} className="text-[#4B9B79]" />
              ) : (
                <IoEyeOffOutline fontSize={24} className="text-[#4B9B79]" />
              )}
            </div>
          </div>
        </div>

        {/* Conform Password Input */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="flex text-lg  outline-none w-full border-2 border-[#7C7C7C] rounded-md py-2 px-2   bg-white ">
            <input
              required
              onChange={formChangeHandler}
              type={isconfirmPasswordVisible ? "password" : "text"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className=" border-none outline-none w-full"
            />
            <div
              className="cursor-pointer"
              onClick={() => {
                setIsconfirmPasswordVisible(!isconfirmPasswordVisible);
              }}
            >
              {isconfirmPasswordVisible ? (
                <IoEyeOutline fontSize={24} className="text-[#4B9B79]" />
              ) : (
                <IoEyeOffOutline fontSize={24} className="text-[#4B9B79]" />
              )}
            </div>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className=" bg-[#A6E873] w-full rounded-md py-2 px-2  text-xl hover:bg-[#489173] font-semibold transition-all mt-4"
        >
          Register
        </button>
      </form>

      <p className="  text-center ">
        Already Have an account?{" "}
        <span
          className="cursor-pointer font-semibold text-[#3A8064]"
          onClick={() => {
            handleRouting();
          }}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
