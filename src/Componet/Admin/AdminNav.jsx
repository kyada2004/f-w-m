import React from "react";
import { Link, Outlet } from "react-router-dom";

function AdminNav() {
  return (
    <div className="overflow-hidden h-[599px]">
      <nav>
        <h1 className="text-3xl text-white bg-orange-500 w-[200px] h-[90px] font-semibold flex justify-center items-center">
          Admin
        </h1>
        <ul className="flex flex-col gap-7 bg-gray-600 w-[200px] h-full  items-center text-xl text-white">
          <Link to="/admin/adminNav/dashboard">Dashboard</Link>
          <Link to="/admin/adminNav/foodreq">Food Requests</Link>
          <Link to="/admin/adminNav/listfoods">List Foods</Link>
          <Link to="/admin/adminNav/regfoods">Reg. Food Doners</Link>
          <Link to="/admin/adminNav/reports">Reports</Link>
          <Link to="/admin/adminNav/city">City</Link>
          <Link to="/admin/adminNav/state">State</Link>        
          <Link to="/admin/adminNav/searchlist">Search List Food</Link>
        </ul>
      </nav>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminNav;
