import React from "react";
import logo from "../../assets/logo_header.svg";

const Header: React.FC = () => {
  return (
    <header className="bg-gray_800 flex justify-center items-center p-5">
      <img src={logo} alt="Logo" className="h-[5rem]" />
      <strong className="pl-3">iGnite Feed</strong>
    </header>
  );
};

export default Header;
