import React from "react";
import { BiMessageDetail,BiHomeSmile } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { RiRadioLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { BiSupport } from "react-icons/bi";
import HomePage from "../../components/pages/HomePage";
export const DASHBOARD_SIDEBAR =[
    {
        key:1,
        title:"Home",
        to:"",
        icon:<BiHomeSmile color="rgb(80 7 36)"/>,
        element:<HomePage/>
    },
    {
        key:2,
        title:"Messeges",
        to:"messagges",
        icon:<BiMessageDetail color="rgb(80 7 36)"/>,
        element:<h3>Messages</h3>
    },
    {
        key:3,
        title:"Find Expert",
        to:"find",
        icon:<RiUserSearchLine color="rgb(80 7 36)"/>,
        element:<h3>Find</h3>

    },
    {
        key:4,
        title:"Needs",
        to:"needs",
        icon:<CgNotes color="rgb(80 7 36)"/>,
        element:<h3>Needs</h3>

    },
    {
        key:5,
        title:"Classes",
        to:"classes",
        icon:<RiRadioLine color="rgb(80 7 36)"/>,
        element:<h3>Find</h3>

    }
]

export const DASHBOARD_SIDEBAR_SEC =[
    {
        key:1,
        title:"My Calandar",
        to:"calandar",
        icon:<RxCalendar color="rgb(80 7 36)"/>,
        element:<h3>Calandar</h3>

    },
    {
        key:2,
        title:"Support",
        to:"support",
        icon:<BiSupport color="rgb(80 7 36)"/>,
        element:<h3>Support</h3>

    }

]