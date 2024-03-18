import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../shared/SideBar";
import Header from "../shared/Header";

function MainLayOut() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-row h-screen w-screen overflow-hidden">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="p-2 md:p-4 overflow-scroll no-scrollbar flex-1 flex flex-col">
              {<Outlet />}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-16 border-t-2 bg-white">
        <h4 className="">Footer</h4>
      </div>
    </div>
  );
}

export default MainLayOut;
