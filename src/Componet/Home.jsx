import React from "react";
import food from "../../src/img/food.jpg";
import { GiUmbrella } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <img src={food} alt="Food Waste" className="w-full h-auto md:h-[625px]" />
      </div>
      <div className="bg-zinc-200 w-full p-4">
        <h1 className="text-center text-xl md:text-2xl font-semibold mb-4">
          Welcome to Food Waste Management
        </h1>
        <p className="text-center text-sm md:text-base mb-4">
          Food waste management involves the handling and disposal of food waste in a sustainable and responsible manner. In Singapore, the National Environment Agency (NEA) regulates food waste management through guidelines and regulations.
        </p>
        <ul className="flex flex-col items-center text-sm md:text-base space-y-4 mb-6">
          <li className="text-center px-4">Occupiers: Segregate and dispose of food waste at the facility provided by the owner/building manager. Obtain approval from NEA and share data with the owner/building manager for reporting.</li>
          <li className="text-center px-4">Occupiers: Segregate and dispose of food waste at the facility provided by the owner/building manager. Obtain approval from NEA and share data with the owner/building manager for reporting.</li>
          <li className="text-center px-4">Occupiers: Segregate and dispose of food waste at the facility provided by the owner/building manager. Obtain approval from NEA and share data with the owner/building manager for reporting.</li>
        </ul>
        <p className="text-center text-sm md:text-base">
          Food waste management involves the handling and disposal of food waste in a sustainable and responsible manner in Singapore.
        </p>
      </div>
      <div className="container mx-auto py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">OUR MISSION</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-center p-4 md:p-6 bg-white rounded-lg shadow-md">
            <div className="bg-blue-100 rounded-full p-3 mr-4">
              <GiUmbrella className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">HELP & SUPPORT</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 md:p-6 bg-white rounded-lg shadow-md">
            <div className="bg-green-100 rounded-full p-3 mr-4">
              <IoEarth className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">Starve Free World</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 md:p-6 bg-white rounded-lg shadow-md">
            <div className="bg-red-100 rounded-full p-3 mr-4">
              <FaHandsHelping className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">Helping Hand</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
