import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentsTable from './AppointmentsTable';
import AppoinmentsList from './AppoinmentsList';

const CalenderCard = () => {

    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };
    return (
        <div className='w-[100%] '>
            <div className='text-xl font-bold text-[#2D847A] py-4'>Calender</div>
            <div className="flex  gap-4">

                <div className='w-[100%] mobile:w-[50%] tablet:w-[100%]'> <Calendar
                    onChange={onChange}
                    value={date}
                    className="modern-calendar tablet:mb-[6rem] " // Apply custom class for styling
                />
                </div>
                
                <div className='hidden mobile:w-[50%] mobile:flex tablet:hidden border-l-2 border-[#2D847A80] pl-4 '>
                    <AppoinmentsList />
                </div>
            </div>
        </div>
    )
}

export default CalenderCard;