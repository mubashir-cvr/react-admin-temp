import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../shared/SideBar";
import Header from "../shared/Header";

function MainLayOut() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <SideBar/>
      <div className="flex-1">
        <Header/>
        <div>{<Outlet />}</div>
      </div>
      {/* <p>footer</p> */}
    </div>
  );
}

export default MainLayOut;
