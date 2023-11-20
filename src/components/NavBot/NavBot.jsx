import React from "react";

import { FaHome } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BiSolidDiscount } from "react-icons/bi";

const NavBot = () => {
  return (
    <div className="px-4 pt-4 mt-6 mx-4 border-t-orange border-t flex justify-center items-center text-orange font-Spartan gap-10 lg:hidden">
      <div className="flex flex-col justify-center items-center">
        <FaHome size={30} />
        <p>Home</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <MdOutlineRestaurantMenu size={30} />
        <p>Menu</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <MdOutlineAccessTimeFilled size={30} />
        <p>Reservation</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <BiSolidDiscount size={30} />
        <p>Promotion</p>
      </div>
    </div>
  );
};

export default NavBot;
