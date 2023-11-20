import React, { useState } from "react";
import "./navbar.css";

import logo from "/src/assets/mizuki-sushi-logo2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="relative">
      <div className="flex items-center xxs:justify-between md:gap-10 font-Spartan text-orange pt-4 pb-2 text-[20px] xxs:px-4 h-[84px]">
        <img className="xxs:w-[150px] w-[200px]" src={logo} alt="" />
        <div>
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={toggleMenu}
            size={30}
          />
        </div>
        <div
          className={`absolute z-20 top-[86px] xxs:w-[calc(100%-32px)] right-4 border-orange border p-3 rounded-lg bg-darkgray dropdown ${
            showMenu ? "active" : ""
          }`}
        >
          <ul className="flex flex-col text-end">
            <li>Home</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Promotions</li>
          </ul>
          <div className="flex flex-col gap-2 mt-2">
            <button className="px-6 py-1 bg-darkgray rounded-lg text-orange border-orange border">
              Login
            </button>
            <button className="px-6 py-1 bg-darkgray rounded-lg text-orange border-orange border">
              Register
            </button>
          </div>
        </div>
        <div className="xxs:hidden md:block">
          <ul className="flex gap-10">
            <li>Home</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Promotions</li>
          </ul>
        </div>
        <div className="xxs:hidden md:block">
          <div className="flex gap-4">
            <button className="px-6 py-1 bg-darkgray rounded-lg text-orange border-orange border">
              Login
            </button>
            <button className="px-6 py-1 bg-darkgray rounded-lg text-orange border-orange border">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
