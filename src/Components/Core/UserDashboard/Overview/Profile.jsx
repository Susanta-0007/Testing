import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

  const profile=useSelector((state)=>state.profile.user);
  // console.log(profile);  
    
  return (
    <div className='w-full flex items-center gap-3 '>
        <div>
            <img className='h-[4rem] w-[4rem] rounded-full' src={profile.image} alt="" />
        </div>
        <div>
            <p className='text-xl font-bold'>Welcome {profile.firstName}</p>
            <p className='text-md text-[#B8B8B8] font-semibold'>Wish you a good health!!</p>
        </div>
    </div>
  )
}

export default Profile