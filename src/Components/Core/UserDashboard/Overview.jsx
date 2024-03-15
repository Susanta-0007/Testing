import React from 'react'
import Profile from './Overview/Profile'
import AppointemntsCard from './Overview/AppointemntsCard'
import FamilyMemberCard from './Overview/FamilyMemberCard'
import AppointmentsTable from './Overview/AppointmentsTable'
import CalenderCard from './Overview/CalenderCard'
import AppoinmentsList from './Overview/AppoinmentsList'

const Overview = () => {
    return (
        <div className='flex flex-col  px-4 h-full w-full  overflow-y-scroll hide-scrollbar'>
           <div> <Profile /></div>
            <div className='flex flex-col mobile:flex-row gap-4 py-4 w-full '>
                <AppointemntsCard />
                <FamilyMemberCard />
                
            </div>

            <div className='flex gap-4 justify-center mobile:flex-row-reverse tablet:flex-row'>

                <div className='tablet:w-[80%]'>
                    <div className='mobile:w-full hidden tablet:flex' > <AppointmentsTable /></div>
                </div>

                <div className=' tablet:w-[30%]'><CalenderCard /></div>

            </div>

            <div className='hidden mobile:flex tablet:hidden'> <AppointmentsTable /></div>
            {/* <div className='hidden mobile:flex '> <AppointmentsTable /></div> */}

        </div>
    )
}

export default Overview