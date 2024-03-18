import React from "react";
import { FcBearish } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR,
  DASHBOARD_SIDEBAR_SEC,
} from "../../lib/const/navigation";
import { NavLink } from "react-router-dom";

const itemClass = "flex gap-3 px-8 py-4 hover:bg-gray-100";
const itemActiveClass = "flex gap-3 px-8 py-4 bg-gray-100";
function SideBar() {
  return (
    <div className="hidden md:flex flex-col w-60 bg-white border-r-2">
      <div className="flex items-center border-b-2 h-16 gap-2 px-3 py-4">
        <FcBearish fontSize={24} />
        <p className="quantico-regular">RECSPERT</p>
      </div>
      <div className="overflow-auto no-scrollbar flex-1 flex flex-col">
        <div className="flex p-6">
          <div className="h-28 w-full flex flex-col items-center bg-green-800 bg-opacity-20 rounded-lg">
            <div className="flex-1 flex flex-row px-2 py-2 gap-2">
              <img className="flex bg-white w-12 rounded-full h-12" src="src/assets/img/avatar.png"/>
              <div className="flex-1 flex flex-col  justify-end">
                <p className=" text-sm">Klara <span className=" text-gray-500">Siewert</span></p>
                <p className="text-sm text-pink-950">customer</p>
              </div>
            </div>
            <div className="flex flex-row w-full py-2 px-2">
              <div className="flex flex-row px-2 gap-2 items-center bg-green-900 bg-opacity-20 h-8 rounded-lg w-full">
                <p className="text-sm font-light flex-1">Credit Balance</p>
                <p className="flex font-medium text-pink-950">20</p>
                <div className="flex justify-center bg-opacity-70 rounded-lg bg-pink-950 w-6">
                  <p className=" text-white font-light">+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-2 pb-3">
          {DASHBOARD_SIDEBAR.map((item) => (
            <DashBoadrdLink key={item.key} item={item} />
          ))}
        </div>
        <div className="flex justify-center py-2">
          <div className="size-px w-2/3 bg-pink-950 rounded-full opacity-50"></div>
        </div>
        <div className=""></div>
        <div className="gap-2 pb-3">
          {DASHBOARD_SIDEBAR_SEC.map((item) => (
            <DashBoadrdLink key={item.key} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

function DashBoadrdLink({ item }) {
  return (
    <NavLink
      to={item.to}
      className={({ isActive }) => (isActive ? itemActiveClass : itemClass)}
    >
      <span className="text-xl">{item.icon}</span>
      {item.title}
    </NavLink>
  );
}
