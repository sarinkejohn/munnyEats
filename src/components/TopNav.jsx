import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
  AiOutlineClose
} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { FaUserFriends, FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";

function TopNav() {
  const [sideNav, setSideNav] = useState(false);
 
  return (
    <div className="pt-2">
      <div className="bg-blue-300 max-w-[1560px] mx-auto flex justify-between rounded-xl p-4 items-center ">
        <div className="flex items-center ">
          <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer ">
            <AiOutlineMenu size={25} />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 font-medium">
            Munny
            <span className="font-bold text-orange-700">+Eats</span>
          </h1>
          <div className=" hidden md:flex lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="p-2 font-bold bg-red-700 text-white rounded-full">
              Free
            </p>
            <p className="p-2 text-bold">Delivery</p>
          </div>
        </div>
        <div className="flex bg-gray-200 rounded-full px-2 items-center w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className="p-2 bg-transparent w-full focus:outline-none"
            type="text"
            placeholder="Search Meals"
          />
        </div>
        <button className="bg-orange-700 py-2 rounded-full text-white items-center hidden md:flex">
          <BsFillCartFill size={20} />
          Cart
        </button>
        {sideNav ? (
          <div className="bg-black/60 w-full h-screen fixed z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
          ></div>
        ) : (
          ""
        )}
        <div
          className={
            sideNav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white duration-300 z-10"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white duration-300 z-10"
          }
        >
          <AiOutlineClose
            onClick={() => setSideNav(!sideNav)}
            size={25}
            className="absolute right-4 top-4 cursor-pointer "
          />
          <h2 className="text-2xl p-4">
            Munny<span className="font-bold text-orange-700">+Eats</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-900">
              <li className="flex py-4 text-xl font-bold">
                <BsPerson
                  size={30}
                  className="mr-4 text-white bg-black rounded-full p-1"
                />
                My Account
              </li>
              <li className="flex py-4 text-xl font-bold">
                <TbTruckReturn
                  size={30}
                  className="mr-4 text-white bg-black rounded-full p-1"
                />
                Delivery
              </li>
              <li className="flex py-4 text-xl font-bold">
                <MdOutlineFavorite
                  size={30}
                  className="mr-4 text-white bg-black rounded-full p-1"
                />
                My Favorite
              </li>
              <li className="flex py-4 text-xl font-bold">
                <FaGoogleWallet
                  size={30}
                  className="mr-4 text-white bg-black rounded-full p-1"
                />
                My Wallet
              </li>
              <li className="flex py-4 text-xl font-bold">
                <MdHelp
                  size={25}
                  className="mr-4 text-white bg-black rounded-full p-1"
                />
                Help
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
