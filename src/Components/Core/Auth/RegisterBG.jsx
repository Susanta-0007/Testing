import React from 'react'
import registerAuthBg from "../../../assets/authimages/register-bg.jpg";


const RegisterBG = () => {
    return (
        <div className='h-full w-full  mobile:flex mobile:flex-col items-end mobile:justify-center'>
            <div className="text-xl font-semibold text-white py-4 px-4">Get a good health routine</div>
            <img className="w-[90%] h-[80%]  rounded-tl-md rounded-bl-md" src={registerAuthBg} alt="register" />
            <div className="text-xl font-semibold text-white px-4 py-2">With PulsePro</div>
        </div>
    )
}

export default RegisterBG;