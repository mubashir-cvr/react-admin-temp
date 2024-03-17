import React from "react";
import { BiMessageDetail,BiHomeSmile } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { RiRadioLine } from "react-icons/ri";
export const DASHBOARD_SIDEBAR =[
    {
        key:1,
        title:"Home",
        to:"",
        icon:<BiHomeSmile/>
    },
    {
        key:2,
        title:"Messeges",
        to:"messagges",
        icon:<BiMessageDetail/>
    },
    {
        key:3,
        title:"Find Expert",
        to:"find",
        icon:<RiUserSearchLine/>
    },
    {
        key:4,
        title:"Needs",
        to:"needs",
        icon:<CgNotes/>
    },
    {
        key:5,
        title:"Classes",
        to:"classes",
        icon:<RiRadioLine/>
    }
]