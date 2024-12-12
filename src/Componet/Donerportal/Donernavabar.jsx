import React from "react";
import { Link, Outlet } from "react-router-dom";


function Donernavabar() {
  return (
    <div className="overflow-hidden h-[599px]">
      <nav>
        <h1 className="text-3xl text-white bg-orange-500 w-[300px] h-[90px] font-semibold flex justify-center items-center">
          Doner
        </h1>
        <ul className="flex flex-col gap-10 bg-gray-600 w-[300px] h-full   items-center text-xl text-white">
          <Link to="/doner/donernavabar/donardashboard">Dashbord</Link>
          <Link to="/doner/donernavabar/donerfood">List Of your food Requests</Link>
          <Link to="/doner/donernavabar/requests"> Requests</Link>
          <Link to="/doner/donernavabar/search">Search</Link>
        </ul>
      </nav>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default Donernavabar;
