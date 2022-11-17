import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navebar from "../../Shared/Navebar";

const DasBordlayout = () => {
  return (
    <div>
      <Navebar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">

            <Outlet/>
          
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to='/dasbord'>
                My Appoinment
              </Link>
            </li>
            <li>
            <Link to='/dasbord/alluser'>
                All Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DasBordlayout;
