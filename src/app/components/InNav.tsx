"use client";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const InNav = () => {
  return (
    <section className="flex items-center justify-center w-full ">
      <div className="flex justify-center w-[80%] py-2 space-x-4 items-center">
        <div className="flex items-center space-x-2">
          <div className="relative flex items-center">
            <div className="p-2 w-full">
              <Image
                alt="logo"
                src="/logo.png"
                width={150}
                height={100}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-[40vw] bg-gray-100 px-4 py-4 h-[100%] rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow bg-transparent outline-none text-sm"
          />
          <FiSearch className="text-red-600 text-lg" />
        </div>

        <div className="flex items-center space-x-4">
          <BsGrid className="text-lg" />

          <div className="relative">
            <HiOutlineShoppingBag className="text-xl" />
            <span className="absolute -top-2 -right-2 text-[10px] bg-red-600 text-white rounded-full px-1">
              01
            </span>
          </div>

          <button className="flex items-center space-x-1 bg-[#e50945] hover:bg-[#d1083f] text-white px-4 py-2.5 rounded-md shadow-md text-sm">
            <FaUserCircle className="text-white w-5 h-5" />
            <span className="text-sm">Login</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InNav;
