import React from "react";
import LOGO from "../../../assets/PulseProLogo.svg";
import { RxDashboard } from "react-icons/rx";
import { sidebarLinks } from "../../../Data/dashboard-link";
import SidebarLink from "./SidebarLink";
import PulseProLogo from "../UserDashboard/PulseProLogo"
import { useSelector } from "react-redux";

const Sidebar = () => {
  const HamburgerIcon =useSelector((state)=>state.dashboardRoute.hamburgerIcon);

  return (

    <div className={`tablet:h-[100vh] h-full py-3  w-full  border-r-2 border-[#2D847A80] `}>

      {/* //* LGOG COMPONENT */}

      <PulseProLogo/>

      <div className="tablet:h-[90vh] overflow-y-scroll hide-scrollbar">
        {/* //* Menu Bar */}
        {sidebarLinks.map((sidebarItem) => (
          <div key={sidebarItem.id} className="flex flex-col py-2 ">
            <div className="text-[#2D847A99] py-2 font-semibold px-4">
              {" "}
              {sidebarItem.section}
            </div>
            <div className="flex flex-col ">
              {sidebarItem.data.map((menuItem) => (
                <SidebarLink key={menuItem.id} data={menuItem} />
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>



  );
};

export default Sidebar;