import React from "react";
import { GiUmbrella } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <Navbar/>
      <div>
        <div className="bg-zinc-200  h-auto w-full">
          <h1 className=" flex justify-center items-center text-2xl p-[10px] mb-[10px] text-semibold">
            welcome to Food Waster food Mengement{" "}
          </h1>
          <p className="flex justify-center items-center text-sm ">
            Food waste management involves the handling and disposal of food
            waste in a sustainable and responsible manner. In Singapore, the
            National Environment Agency (NEA) regulates food waste management
            through guidelines and regulations.
          </p>
          <ul className=" flex justify-center items-center flex-col mt-[10px] p-[10px]">
            <li className="m-[10px] p-[5px]">
              Occupiers: Segregate and dispose of food waste at the facility
              provided by the owner/building manager. Obtain approval from NEA
              and share data with the owner/building manager for reporting.
            </li>
            <li className="m-[10px] p-[5px]">
              Occupiers: Segregate and dispose of food waste at the facility
              provided by the owner/building manager. Obtain approval from NEA
              and share data with the owner/building manager for reporting.
            </li>
            <li className="m-[10px] p-[5px]">
              Occupiers: Segregate and dispose of food waste at the facility
              provided by the owner/building manager. Obtain approval from NEA
              and share data with the owner/building manager for reporting.
            </li>
          </ul>
          <p className="flex justify-center items-center text-sm pb-16 ">
            Food waste management involves the handling and disposal of food
            waste in a sustainable and responsible manner. In Singapore.
          </p>
        </div>
        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-8">OUR MISSION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-4 mr-4">
                <GiUmbrella className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">HELP & SUPPORT</h3>
                <p className="text-gray-600">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-4 mr-4">
                <IoEarth className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Starve Free World</h3>
                <p className="text-gray-600">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-red-100 rounded-full p-4 mr-4">
                <FaHandsHelping className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Helping Hand</h3>
                <p className="text-gray-600">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
