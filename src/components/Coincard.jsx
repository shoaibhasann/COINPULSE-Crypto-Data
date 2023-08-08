import React from "react";
import { Link } from "react-router-dom";

function CoinCard({ name, price, market, image, change, id }) {
  const changeClass =
    parseFloat(change) > 0 ? "text-green-600" : "text-red-600";
  const formattedChange = parseFloat(change).toFixed(2);

  return (
    <Link
      to={`/coin/${id}`}
      className="grid grid-cols-3 md:grid-cols-[16fr_25fr_25fr_25fr] place-items-center px-1 md:px-8 py-6 border-b cursor-pointer border-white hover:bg-[#200840]"
    >
      <div className="flex items-center gap-2 md:gap-5">
        <img className="w-10 h-10" src={image} alt="logo" />
        <div className="title text-white font-medium text-sm md:text-xl">{name}</div>
      </div>
      <div className="text-white font-medium text-sm md:text-xl">{"₹ " + price}</div>
      <div className={` font-medium text-xl ${changeClass}`}>
        {formattedChange + " %"}
      </div>
      <div className="text-white hidden md:block font-medium text-sm md:text-xl">{"₹ " + market}</div>
    </Link>
  );
}

export default CoinCard;
