// src/components/Header.jsx
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-slate-700 text-white p-4">
      <div className="container flex justify-between items-center">
        <div className="text-6xl ml-[80px]">CityCave</div>
        <nav className="hidden text-2xl space-x-10 md:flex">
          <a href="#why" className="hover:text-gray-400">
            Why City Cave
          </a>
          <a href="#services" className="hover:text-gray-400">
            Our Services
          </a>
          <a href="#brand" className="hover:text-gray-400">
            Global Brand
          </a>
          <a href="#financials" className="hover:text-gray-400">
            Financials
          </a>
          <a href="#stories" className="hover:text-gray-400">
            Owner Stories
          </a>
          <a href="#faq" className="hover:text-gray-400">
            FAQ
          </a>
        </nav>
        {/* <div className="md:hidden">
          <AiOutlineMenu className="text-2xl" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
