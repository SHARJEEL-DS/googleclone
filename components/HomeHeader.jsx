import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-5 text-sm ">
      <div className="flex space-x-4 items-center ">
        
        <span className="p-2 transition-all duration-200 cursor-pointer hover:bg-gray-200 rounded-full">
        
        </span>
       
      </div>
    </header>
  );
};

export default HomeHeader;
