import React from 'react'
import loginAuthBg from "../../../assets/authimages/login-bg.jpg";

const LoginBG = () => {
    return (
        <div className='h-full w-full  mobile:flex-col mobile:justify-center'>
            <div className="text-xl font-semibold text-white py-4 px-4">Get a good health routine</div>
            <img className="w-[90%] h-[80%] rounded-tr-md rounded-br-md " src={loginAuthBg} alt="register" />
            <div className="text-xl font-semibold text-white px-4 py-2">With PulsePro</div>
        </div>
    )
}

export default LoginBG