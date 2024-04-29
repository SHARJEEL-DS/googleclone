import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
  return (
    <header className="border-b border-gray-200 pb-1 z-50 sticky top-0 bg-white w-full ">
      <div className="flex w-full p-3 sm:p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
           
            alt="google logo"
            width={"120"}
            height={"40"}
            className="w-[55px] sm:w-[85px]"
          />
        </Link>
        <div className="flex-1 ">
          <SearchBox />
        </div>
        <div className="items-center hidden md:inline-flex space-x-2 ">
          
          <TbGridDots className="header-icon" />
        </div>
        
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
