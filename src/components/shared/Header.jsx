import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FcBearish } from "react-icons/fc";
import { useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";
import {
  DASHBOARD_SIDEBAR,
  DASHBOARD_SIDEBAR_SEC,
} from "../../lib/const/navigation";
import { NavLink } from "react-router-dom";

const itemClass = "flex gap-3 px-8 py-4 hover:bg-gray-100";
const itemActiveClass = "flex gap-3 px-8 py-4 bg-gray-100";
function Header() {
  const [isOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      <div className="bg-white h-14 md:h-16 border-l flex items-center gap-3 border-b-2">
        <div className="md:hidden flex flex-row items-center w-full  h-14 gap-2 px-3 py-4">
          <div className="justify-start">
            <button onClick={() => setSidebarOpen(!isOpen)}>
              <GiHamburgerMenu />
            </button>
          </div>
          <div className="flex flex-1 gap-2 justify-center">
            <FcBearish fontSize={24} />
            <p className="quantico-regular">RECSPERT</p>
          </div>
        </div>
        <div className="hidden md:flex px-4 flex-1">
          <h1 className="outfit-bold fo">Good Morning</h1>
        </div>
        <div className="relative hidden md:flex">
          <HiOutlineSearch
            fontSize={26}
            className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
          />
          <input
            type="text"
            placeholder="Search.."
            className="tet-sm focus:outline-none active:outline-none h-10 w-[25rem] border pl-11 border-gray-300 rounded-full px-4"
          />
        </div>
        <div className="hidden md:flex">Side button</div>
      </div>

      {/* Side bar  */}
      <div
        ref={sidebarRef}
        className={`fixed flex flex-col md:hidden border-x-2 shadow-gray-700 top-0 left-0 h-full bg-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end w-full h-12 border-b-2 gap-2 px-3 py-4">
          <div>
            <button onClick={() => setSidebarOpen(!isOpen)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        <div className="overflow-auto no-scrollbar flex-1 flex flex-col">
          <div className="gap-2 flex-1 pb-3">
            {DASHBOARD_SIDEBAR.map((item) => (
              <DashBoadrdLink
                key={item.key}
                item={item}
                closeSidebar={closeSidebar}
              />
            ))}
          </div>
          <div className="flex justify-center py-2">
            <div className="size-px w-2/3 bg-pink-950 rounded-full opacity-50"></div>
          </div>
          <div className="gap-2 pb-3">
            {DASHBOARD_SIDEBAR_SEC.map((item) => (
              <DashBoadrdLink
                key={item.key}
                item={item}
                closeSidebar={closeSidebar}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

function DashBoadrdLink({ item, closeSidebar }) {
  return (
    <NavLink
      to={item.to}
      className={({ isActive }) => (isActive ? itemActiveClass : itemClass)}
      onClick={closeSidebar}
    >
      <span className="text-xl">{item.icon}</span>
      {item.title}
    </NavLink>
  );
}
