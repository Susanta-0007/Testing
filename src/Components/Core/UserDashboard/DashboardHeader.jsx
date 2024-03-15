import React from "react";
import LOGO from "../../../assets/PulseProLogo.svg";
import { IoIosSearch, IoMdNotifications } from "react-icons/io";
import group from "../../../assets/group.svg"
import HamburgerIon from "../../../assets/HamburgerIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { setHamburger } from "../../../store/slices/dashboard_route_slice";
import SidebarModal from "./SidebarModal";

const DashboardHeader = () => {
  const HamburgerIcon =useSelector((state)=>state.dashboardRoute.hamburgerIcon);
  const dispatch =useDispatch();

  const handleHamburgerIcon=()=>{
    dispatch(setHamburger(!HamburgerIcon));
  }
  

  console.log(HamburgerIcon);

  return (
    <div className="flex  w-full items-center justify-between px-4">

      {/* //* Main CONTAINER HEADER  */}

      <div
        onClick={handleHamburgerIcon}
       className=" flex tablet:hidden ">
        <img className="h-full w-full" src={HamburgerIon} alt="" />

        
      </div>

      <div className="py-4 px-4 tablet:px-0 w-full flex justify-between">
        <div className="border-2 border-[#2D847A] w-[70%] mobile:w-[40%] tablet:w-[30%] rounded-full px-4 py-3 gap-2 flex items-center">
          <IoIosSearch fontSize={24} color="#2D847A" />
          <input type="text" className="border-none outline-none  w-full font-semibold text-[#2D847A] placeholder:text-[#2D847A47] placeholder:font-semibold" placeholder="Search doctors" />
        </div>

        <div className="flex items-center gap-10 ">

          <img className=" hidden mobile:flex" src={group} alt="" />

          <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] px-1 py-1  flex items-center justify-center rounded-lg">
            <IoMdNotifications fontSize={32} />

          </div>
        </div>

      </div>

      {/* //* Sidebar Modal Component */}

      {
        HamburgerIcon && <div className="absolute top-0 bottom-0 left-0 w-full"><SidebarModal/></div>
      }



    </div>

  );
};

export default DashboardHeader;