import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white bg-[#130749]  flex justify-around items-center h-24 px-4  mx-auto md:px-16">
      <h1 className="w-full text-3xl font-bold">
        COINPULSE
      </h1>
      <ul className=" hidden md:flex gap-12 items-center cursor-pointer">
        <li className=" font-bold text-lg">
          <a href="#home">Home</a>
        </li>
        <li className="font-bold text-lg">
          <a href="#home">Market</a>
        </li>
        <li className=" w-24 font-bold text-lg">
          <a className="" href="#home">
            Choose Us
          </a>
        </li>
        <li className=" font-bold text-lg">
          <a href="#home">Join</a>
        </li>
      </ul>
      <div className="cursor-pointer block md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#130749] ease-in-out duration-800"
            : "hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold text-white m-4">COINPULSE</h1>
        <ul className="p-4 uppercase font-semibold cursor-pointer">
          <li className="p-4 border-b border-slate-300">
            <a href="#home">Home</a>
          </li>
          <li className="p-4 border-b border-slate-300">
            <a href="#home">Market</a>
          </li>
          <li className="p-4 border-b border-slate-300">
            <a href="#home">Choose Us</a>
          </li>
          <li className="p-4 border-b border-slate-300">
            <a href="#home">Join</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
