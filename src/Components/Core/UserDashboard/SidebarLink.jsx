import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveRoute } from '../../../store/slices/dashboard_route_slice';
import { Link, useNavigate } from 'react-router-dom';

const SidebarLink = ({ data }) => {
  const activeRoute = useSelector((state) => state.dashboardRoute.activeRoute);
  const dispatch = useDispatch();
  // console.log("DataId", data.id);
  // console.log("ActiveRoute", activeRoute);

  const handleRoute = (id) => {
    dispatch(setActiveRoute(id));

  }

  return (
    <Link to={data.path}>
      <div
        onClick={
          () => handleRoute(data.id)
        }
        className={`flex items-center gap-2 cursor-pointer py-2 hover:bg-[#2D847A26] px-4 transition-all duration-300 ${data.id === activeRoute ? "bg-[#2D847A26] bg-opacity-20" : null}`}>

        <div><img src={data.icon} alt="" className='h-5 w-5' /></div>

        <div className='text-lg font-semibold text-[#2D847A] '>{data.name}</div>
      </div>
    </Link>
  );
};

export default SidebarLink;