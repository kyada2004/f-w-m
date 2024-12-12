import React, { useState } from "react";
import Logo from "../../src/img/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-10">
      <div className="overflow-hidden bg-slate-500">
        <nav className="flex items-center justify-between px-3 py-2">
          <img
            src={Logo}
            alt="Logo"
            className="rounded-md w-[80px] h-[70px] px-2 py-2"
          />
          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          <ul
            className={`md:flex gap-y-px gap-x-px items-center justify-center text-black text-xl md:static absolute w-full left-0 top-full bg-slate-500 p-4 md:p-0 md:w-auto transition-transform duration-300 ${
              isOpen ? "block" : "hidden md:flex items-center justify-center gap-6"
            }`}
          >
            <li className="text-center hover:underline hover:text-white gap-10 p-[30px] text-2xl">
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="text-center hover:underline hover:text-white gap-10 p-[30px] text-2xl">
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className="text-center hover:underline hover:text-white gap-10 p-[30px] text-2xl">
              <Link to="/food" onClick={toggleMenu}>Food Details</Link>
            </li>
            <li className="text-center hover:underline hover:text-white gap-10 p-[30px] text-2xl">
              <Link to="/contactUs" onClick={toggleMenu}>Contact Us</Link>
            </li>
            <li className="text-center hover:underline hover:text-white gap-10 p-[30px] text-2xl">
              <Link to="/doner" onClick={toggleMenu}>Donor</Link>
            </li>
            <li className="text-center hover:underline hover:text-white gap-10 p-[30px] text-2xl">
              <Link to="/admin" onClick={toggleMenu}>Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
