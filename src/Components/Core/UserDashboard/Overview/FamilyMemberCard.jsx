import React from 'react'
import MembersLOGO from "../../../../assets/sidebar/members.svg"

const FamilyMemberCard = () => {
  return (
    <div className='w-full mobile:w-1/2 tablet:w-1/3 min-h-fit  bg-[#D7F8E8] rounded-md flex flex-col gap-4 px-4 py-4'>
      <div className='flex gap-4'>
        <img src={MembersLOGO} alt="" />
        <p className='text-[#2D847A] text-xl font-bold'>Total Family Members</p>
      </div>

      <div className='flex gap-2 items-center '>
        <p className='text-5xl font-bold text-black'>121</p>
      </div>

      <div className='text-sm font-semibold text-[#2D847A]'>Data obtained from last 7 days from 99 appointments to 121 appointments</div>
    </div>
  )
}

export default FamilyMemberCard