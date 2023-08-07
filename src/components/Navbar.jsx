import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white bg-[#0f051d] mb-7 shadow-slate-400 shadow-sm  flex justify-around items-center h-24 px-4  mx-auto md:px-16">
      <h1 className="w-full text-3xl font-bold">COINPULSE</h1>
      <ul className=" hidden md:flex gap-12 items-center cursor-pointer">
        <li className=" font-bold text-lg">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="font-bold text-lg">
          <Link to={"/coin"}>Coin</Link>
        </li>
        <li className="font-bold text-lg">
          <Link to={"/exchange"}>Exchange</Link>
        </li>
      </ul>
      <div className="cursor-pointer block md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed z-10 left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#0f051d] ease-in-out duration-800"
            : "hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold text-white m-4">COINPULSE</h1>
        <ul className="p-4 uppercase font-semibold cursor-pointer">
          <li className="p-4 border-b border-slate-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-4 border-b border-slate-300">
            <Link to={"/coin"}>Coin</Link>
          </li>
          <li className="p-4 border-b border-slate-300">
            <Link to={"/exchange"}>Exchange</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
