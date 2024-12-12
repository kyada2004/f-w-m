import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGooglePlusG, FaRegArrowAltCircleUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between h-auto">
        <p className="text-lg ml-11 text-black">
          ©2024 Food Waste Management System
        </p>
        <div className="flex gap-7 p-5 mr-10 text-xl">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaGooglePlusG />
          <FaRegArrowAltCircleUp onClick={scrollToTop} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
