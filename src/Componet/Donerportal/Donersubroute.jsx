import React from "react";
import Donernavabar from "./Donernavabar";
import { Route, Routes } from "react-router-dom";
import DonerRegFood from "./DonerRegFood";
import Search from "./Search";
import Donerfood from "./Donerfood";
import DonerDashboard from "./DonerDashboard";

function Donersubroute() {
  return (
    <div className="flex">
      {/* Navbar taking up fixed space */}
      <div>
        <Donernavabar />
      </div>

      {/* Content area takes remaining space */}
      <div className="flex-grow">
        <Routes>
          <Route
            path="/donernavabar/donardashboard"
            element={<DonerDashboard />}
          />
          <Route
            path="/donernavabar/requests"
            element={<DonerRegFood />}
          />
          <Route
            path="/donernavabar/search"
            element={<Search />}
          />
          <Route
            path="/donernavabar/donerfood"
            element={<Donerfood />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default Donersubroute;
