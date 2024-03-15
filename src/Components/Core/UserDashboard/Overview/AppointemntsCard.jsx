import React from 'react'
import AppointemntsLOGO from "../../../../assets/sidebar/overview-light.svg";

const AppointemntsCard = () => {
    return (
        <div className='w-full mobile:w-1/2 tablet:w-1/3 min-h-fit   bg-image-appoinments rounded-md flex flex-col gap-4 px-4 py-4'>
            <div className='flex gap-4'>
                <img src={AppointemntsLOGO} alt="" />
                <p className='text-white text-xl font-bold'>Overall Appointemnts</p>
            </div>

            <div className='flex gap-2 items-center '>
                <p className='text-5xl font-bold text-white'>121</p>
                <p className='text-white bg-[#A8A8A8] rounded-full px-2 py-1'>+0.25%</p>
            </div>

            <div className='text-sm font-semibold text-white'>Data obtained from last 7 days from 99 appointments to 121 appointments</div>

        </div>
    )
}

export default AppointemntsCard;