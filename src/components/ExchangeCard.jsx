import React from "react";
import { Link } from "react-router-dom";

function ExchangeCard({name, url, price, rank, image, percent}) {
  return (
    <Link
      to={url}
      className="grid grid-cols-2  md:grid-cols-3 place-items-center px-3 md:px-8 py-6 border-b cursor-pointer border-white hover:bg-[#200840]"
    >
      <div className="flex items-center gap-2 md:gap-5">
        <img className="w-10 h-10" src={image} alt="logo" />
        <div className="title text-white font-medium text-base md:text-xl">
          {name}
        </div>
      </div>
      <div className="text-white hidden md:block font-medium text-base md:text-xl">{rank}</div>
      <div className="text-white font-medium text-base md:text-xl">
        {"₹ " + price}
      </div>
    </Link>
  );
}

export default ExchangeCard;
