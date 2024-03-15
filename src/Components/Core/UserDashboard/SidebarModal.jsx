import React from "react";
import LOGO from "../../../assets/PulseProLogo.svg";
import { RxDashboard } from "react-icons/rx";
import { sidebarLinks } from "../../../Data/dashboard-link";
import SidebarLink from "./SidebarLink";
import PulseProLogo from "../UserDashboard/PulseProLogo"
import { useDispatch, useSelector } from "react-redux";
import { setHamburger } from "../../../store/slices/dashboard_route_slice";

const SidebarModal = () => {


    const HamburgerIcon = useSelector((state) => state.dashboardRoute.hamburgerIcon);
    const dispatch = useDispatch();

    const handleHamburgerIcon=()=>{
        dispatch(setHamburger(!HamburgerIcon));
      }
      

    return (
        <div className={`bg-white w-[50%]  py-3 min-w-[] `}>

            {/* //* LGOG COMPONENT */}

            <div className="flex items-center">
                <PulseProLogo />
                <p onClick={ handleHamburgerIcon} className="text-5xl">X</p>
            </div>

            <div className="">
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
    )
}

export default SidebarModal