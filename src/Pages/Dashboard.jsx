import React from 'react'
import Sidebar from '../Components/Core/UserDashboard/Sidebar'
import DashboardHeader from '../Components/Core/UserDashboard/DashboardHeader'
import Overview from '../Components/Core/UserDashboard/Overview'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const HamburgerIcon =useSelector((state)=>state.dashboardRoute.hamburgerIcon);

  return (
    <div className='w-[100%] tablet:h-[100vh] h-full flex overflow-hidden'>
      <div className={`tablet:w-[25%] hidden tablet:flex`}><Sidebar /></div>
      <div className='w-full px-4 tablet:w-full '>
        <DashboardHeader />

        
          <Overview />
       


      </div>
    </div>
  )
}

export default Dashboard