import React from 'react'

const AppoinmentsList = () => {
    const upcomeingAppoinments = [
        {
            id: 1,
            doctorName: "Subrata",
            venue: "Kolkata, Park Street, 108",
            dateTime: "09:30 am, 2nd mar, 2024"
        },
        {
            id: 2,
            doctorName: "Subrata",
            venue: "Kolkata, Park Street, 108",
            dateTime: "09:30 am, 2nd mar, 2024"
        },
        {
            id: 3,
            doctorName: "Subrata",
            venue: "Kolkata, Park Street, 108",
            dateTime: "09:30 am, 2nd mar, 2024"
        }
    ]

    return (
        <div>
            {
                upcomeingAppoinments.map((data) => (
                    <div key={data.id} className=' flex gap-2'>
                        <div className='h-10 w-10 flex items-center justify-center bg-[#2D847A] text-white rounded-full'>2</div>
                        <div>
                            <p className=''>Appointment with Dr. {data.doctorName}</p>
                            <p>{data.venue}</p>
                            <p>{data.dateTime}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AppoinmentsList;