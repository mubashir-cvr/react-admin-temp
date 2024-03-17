import React from "react";
import { FcBearish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR } from "../../lib/const/navigation";
import { NavLink } from "react-router-dom";

const itemClass ="flex gap-3 px-8 py-4 hover:bg-gray-100"
const itemActiveClass="flex gap-3 px-8 py-4 bg-gray-100"
function SideBar() {
  return (
    <div className="flex flex-col w-60 bg-white">
      <div className="flex items-center h-16 gap-2 px-3 py-4">
        <FcBearish fontSize={24}/>
        <p className="quantico-regular">RECSPERT</p>
      </div>
      <div className="flex-1 gap-2">
      {DASHBOARD_SIDEBAR.map((item)=>(
          <Links key={item.key} item={item}/>
      ))}
      </div>
      <div>Bottom</div>
    </div>
  );
}

export default SideBar;

function Links({item}){
 return(
  <NavLink to={item.to} className={({isActive})=> isActive? itemActiveClass:itemClass}  >
    <span className="text-xl">{item.icon}</span>
    {item.title}
  </NavLink>
 )
}