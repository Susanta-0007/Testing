import React from 'react'
import { appointmentsList } from "../../../../Data/appointemnts-list";
import ReportLOGO from "../../../../assets/report-action.svg";
import DownloadLOGO from "../../../../assets/download.svg"
import RightArrowLOGO from "../../../../assets/right-arrow.svg";

const AppointmentsTable = () => {
    // console.log(appointmentsList);
    return (
        <div className='w-full'>
            <div className='text-xl font-bold text-[#2D847A] py-4'>Today’s Appointments</div>
            <div className='w-full bg-[#3C8D83]  text-[#004C42] rounded-md '>
                <table className='w-full '>
                    <thead className=' '>
                        <tr className='font-semibold '>
                            <td className='text-center py-3'>Member</td>
                            <td className='text-center py-3'>Age</td>
                            <td className='text-center py-3'>Venue</td>
                            <td className='text-center py-3'>Appointed for</td>
                            <td className='text-center py-3'>Report</td>
                            <td className='text-center py-3'>Action</td>
                        </tr>
                    </thead>

                    <tbody className=' text-[#004C42] bg-[#D7F8E8]'>
                        {
                            appointmentsList.map((data) => (
                                <tr key={data.id} className='font-semibold'>
                                    <td className='text-center py-3'>{data.member}</td>
                                    <td className='text-center py-3'>{data.age}</td>
                                    <td className='text-center py-3'>{data.venue}</td>
                                    <td className='text-center py-3'>{data.appointedFor}</td>
                                    <td >
                                        <div className='flex items-center justify-center'><img src={ReportLOGO} alt="" /></div>
                                    </td>
                                    <td >
                                        <div className='flex items-center justify-center'><img src={DownloadLOGO} alt="" /></div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <div className='flex justify-between px-8 py-2.5 bg-[#D7F8E8]' >
                    <div className='font-semibold'>4 of 20 appointments</div>
                    <div className='flex items-center gap-1'>
                        <p className='text-[#0D3733]  font-semibold'>See all</p>
                        <p><img src={RightArrowLOGO} alt="" /></p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentsTable