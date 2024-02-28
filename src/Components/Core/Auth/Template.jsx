// import React from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AuthBgImage from "../../../assets/AuthBgImage.svg";

// eslint-disable-next-line react/prop-types
const Template = ({formType}) => {

    console.log(formType);

    const isLogin = (formType === "Login");
    
    return(
        <div className={`h-[100vh] w-full flex  justify-between ${isLogin ? " flex-row" : "flex-row-reverse"}`}>
            {/* Left Div Form Div */}
            <div className="flex flex-col justify-start items-center w-[100%] mobile:w-[80%] tablet:w-[40%] bg-blue mobile:bg-white gap-24 pt-16">
                <h1 className="text-2xl font-bold">
                    {
                        isLogin ? "Login" : "Register"
                    }
                </h1>
                <div className="w-full">
                    {
                        isLogin? (<LoginForm />) : (<RegisterForm />)
                    }
                </div>
            </div>

            {/* Righgt Div Image Div */}
            <div className=" flex-col justify-around items-center w-[60%] bg-blue hidden mobile:flex  ">
                <h2 className="text-xl font-semibold  text-white">
                    Lorem Ipsum
                </h2>
                <div className="">
                    <img src={AuthBgImage} alt="DisplayImage" className="w-full h-full"/>
                </div>
                <h3 className="text-xl font-semibold  text-white">
                    Pulse Pro
                </h3>
            </div>
        </div>
    );
}

export default Template;