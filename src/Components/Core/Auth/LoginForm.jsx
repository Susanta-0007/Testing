import { useNavigate } from "react-router-dom";
import { CiLock, CiMail } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoginData } from "../../../store/slices/authSlice";
import { login } from "../../../Services/Operations/authAPI";
import authLogo from "../../../assets/authimages/auth-logo.svg";
import authGoogleLogo from "../../../assets/authimages/auth-google-logo.svg";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const formChangeHandler = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const { email, password } = formData;

  const submitHandler = (event) => {
    event.preventDefault();

    const loginData = {
      ...formData,
    };
    dispatch(setLoginData(loginData));
    dispatch(login(email, password, navigate));

    setFormData({
      email: "",
      password: "",
    });
  };

  // Redirct to Register
  const handleRouting = () => {
    navigate("/register");
  };

  const handleforgotPasswordRouting = () => {
    navigate("/fogot-password");
  };

  return (
    <div className="w-[80%] m-auto h-[100vh] flex flex-col items-center justify-center gap-2">
      {/* //* Logo */}

      <div>
        <img src={authLogo} alt="pulsePro" />
      </div>

      {/* //* Login Heading */}

      <h1 className="text-2xl font-bold  py-8">
        Login
      </h1>

      {/* //* Google Login */}

      <div className="border-2 border-[#7C7C7C] rounded-md flex gap-4 justify-center w-[70%] py-3">
        <img src={authGoogleLogo} alt="Google" />
        <div>Log in with Google</div>
      </div>

      {/* //* Or Div */}

      <div className="flex items-center gap-4">
        <div className="w-[12vw] bg-black h-[0.01rem]"></div>
        <p>Or</p>
        <div className="w-[12vw] bg-black h-[0.01rem]"></div>
      </div>

      {/* //* Form Start */}

      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-14 tablet:w-[70%] w-[80%] "
      >
        <div className="flex flex-col gap-4 ">
          {/* //* Email Input */}

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

          {/* //* Password Input */}

          <div className="flex flex-col gap-1">
            <label className="font-semibold" htmlFor="email">
              Password
            </label>

            <div className="flex text-lg  outline-none w-full border-2 border-[#7C7C7C] rounded-md py-3 px-2   bg-white ">
              <input
                required
                onChange={formChangeHandler}
                type={isPasswordVisible ? "password" : "text"}
                id="Password"
                name="password"
                value={formData.password}
                placeholder="Enter Password"
                className=" border-none outline-none w-full "
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

          {/* //* Forgot Password  */}

          <p
            onClick={() => {
              handleforgotPasswordRouting();
            }}
            className="self-end  text-[#4B9B79] font-semibold cursor-pointer"
          >
            Forgot Password?
          </p>
        </div>

        {/* //* Login Button */}

        <button
          type="submit"
          className="  bg-[#A6E873]  w-full rounded-md py-2 px-2  text-xl hover:bg-[#3A8064] transition-all font-semibold  "
        >
          Login
        </button>
      </form>

      <p className=" text-center">
        Don't Have an account ?{" "}
        <span
          className="cursor-pointer font-semibold text-[#4B9B79]"
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
