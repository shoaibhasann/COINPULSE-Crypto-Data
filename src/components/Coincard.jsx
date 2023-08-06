import React from "react";
import { Link } from "react-router-dom";

function Exchangecard({ name, url, price, market, image, change }) {
  const changeClass =
    parseFloat(change) > 0 ? "text-green-500" : "text-red-500";
  const formattedChange = parseFloat(change).toFixed(2);
  // Remove negative sign for positive changes
  const changeDisplay =
    parseFloat(change) > 0 ? formattedChange : formattedChange.slice(1);
  return (
    <Link
      to={url}
      className="grid grid-cols-[16fr_25fr_25fr_25fr] place-items-center px-8 py-6 border-b cursor-pointer border-white hover:bg-[#200840]"
    >
      <div className="flex items-center gap-5">
        <img className="w-10 h-10" src={image} alt="logo" />
        <div className="title text-white font-medium text-xl">{name}</div>
      </div>
      <div className="text-white font-medium text-xl">{"$ " + price}</div>
      <div className={`text-white font-medium text-xl ${changeClass}`}>
        {changeDisplay + " %"}
      </div>
      <div className="text-white font-medium text-xl">{"$ " + market}</div>
    </Link>
  );
}

export default Exchangecard;
