import React from "react";

import { FaHome } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BiSolidDiscount } from "react-icons/bi";

const NavBot = () => {
  return (
    <div className="px-4 pt-4 mt-6 mx-4 border-t-orange border-t flex justify-center items-center text-orange font-Spartan gap-10">
      <div>
        <FaHome size={30} />
      </div>
      <div>
        <MdOutlineRestaurantMenu size={30} />
      </div>
      <div>
        <MdOutlineAccessTimeFilled size={30} />
      </div>
      <div>
        <BiSolidDiscount size={30} />
      </div>
    </div>
  );
};

export default NavBot;
