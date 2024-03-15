import overview from "../assets/sidebar/overview.svg";
import appointment from "../assets/sidebar/appointment.svg";
import doctor from "../assets/sidebar/doctor.svg";
import messages from "../assets/sidebar/messages.svg";
import members from "../assets/sidebar/members.svg";
import payments from "../assets/sidebar/payments.svg";
import help from "../assets/sidebar/help.svg";
import settings from "../assets/sidebar/settings.svg";
import report from "../assets/sidebar/report.svg";

export const sidebarLinks = [
    {
        id: 1,
        section: "Main-Menu",
        data: [
            {
                id: 1.1,
                name: "Overview",
                path: "/dashboard/overview",
                icon: overview,
            },
            {
                id: 1.2,
                name: "Appointments",
                path: "/dashboard/appointments",
                icon: appointment
            }
        ]
    }, 

    {
        id: 2,
        section: "Doctors-Panel",
        data: [
            {
                id: 2.1,
                name: "Doctors",
                path: "/dashboard/doctors",
                icon: doctor
            },
            {
                id: 2.2,
                name: "Messages",
                path: "/dashboard/messages",
                icon: messages
            }
        ]
    }, 

    {
        id: 3,
        section: "Family-Panel",
        data: [
            {
                id: 3.1,
                name: "Family Members",
                path: "/dashboard/family-members",
                icon: members
            },
        ]
    }, 

    {
        id: 4,
        section: "Payment",
        data: [
            {
                id: 4.1,
                name: "Payments info",
                path: "/dashboard/payments-info",
                icon: payments
            },
          
        ]
    },

    {
        id: 5,
        section: "Help & Settings",
        data: [
            {
                id: 5.1,
                name: "Help & Center",
                path: "/dashboard/help-center",
                icon: help
            },
            {
                id: 5.2,
                name: "Settings",
                path: "/dashboard/settings",
                icon: settings,
            },
            {
                id: 5.3,
                name: "Report",
                path: "/dashboard/report",
                icon: report,
            },
        ]
    },

    
]