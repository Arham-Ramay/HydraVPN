import React, { useState } from "react";
import logo from "../assets/Logologo.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full bg-[#181e38]">
      <div className="mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="/"
            className="text-sm text-gray-100 font-semibold hover:text-gray-300"
          >
            My Account
          </a>
          <button
            type="button"
            className="rounded-md bg-[#FE405C] px-3 py-2 text-sm font-semibold text-white hover:bg-black focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign Up
          </button>
        </div>

        <div className="lg:hidden">
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 cursor-pointer text-gray-100"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 right-4 bg-white p-4 rounded-md">
            <a
              href="/"
              className="block text-gray-800 font-semibold mb-2 hover:text-gray-900"
            >
              My Account
            </a>
            <button
              type="button"
              className="block rounded-md bg-[#FE405C] px-3 py-2 text-sm font-semibold text-white hover:bg-black focus:outline-none focus:ring focus:border-blue-300"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
