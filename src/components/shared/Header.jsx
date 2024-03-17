import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

function Header() {
  return (
    <div className="bg-white h-16 border-l px-4 flex items-center gap-3 border-b border-gray-200">
     
      <div className="flex-1"><h1 className="outfit-bold fo">Good Morning</h1></div>
      <div className="relative">
        <HiOutlineSearch fontSize={26} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"/>
        <input
          type="text"
          placeholder="Search.."
          className="tet-sm focus:outline-none active:outline-none h-10 w-[25rem] border pl-11 border-gray-300 rounded-lg px-4"
        />
      </div>
      <div>Side button</div>
    </div>
  );
}

export default Header;
