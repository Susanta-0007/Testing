import React from 'react'
import LOGO from "../../../assets/PulseProLogo.svg";

const PulseProLogo = () => {
  return (
    <div className='w-full flex items-center px-4 gap-2'>
        <img src={LOGO} alt="" />
        <div>
            <p className='text-xl font-bold'>PulsePro</p>
            <p className='text-[#B8B8B8]'>we care</p>
        </div>

    </div>
  )
}

export default PulseProLogo;