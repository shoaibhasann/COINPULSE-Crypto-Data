import React from 'react';
import Bit from "../assets/bit.png";
import Eth from "../assets/ethereum.png";

function Join() {
  return (
    <div className="flex flex-col  items-center bg-gradient-to-b from-[#130749] to-[#0f051d] pt-28 mb-28">
      <div className="flex justify-center items-center gap-12">
        <img
          className=" w-10 h-10 lg:w-20 lg:h-20 animate-bounce"
          src={Bit}
          alt="Bitcoin"
        />
        <h1 className="text-white text-xl lg:text-8xl font-bold tracking-wider mb-5">
          JOIN US VIA
        </h1>
        <img
          className="w-10 h-10 lg:w-20 lg:h-20 animate-bounce"
          src={Eth}
          alt="Ethereum"
        />
      </div>
      <div className=" text-xl lg:text-8xl font-bold tracking-wider mb-11  bg-gradient-to-r from-[#3e00fa] to-[#d900ed] text-transparent bg-clip-text">
        DISCORD
      </div>
      <h3 className="text-white  text-2xl">
        Invest and manage all your crypto at one place.
      </h3>
      <a href='https://discord.com' target='_blank' className="text-white font-bold rounded-3xl text-2xl px-8 py-2 mt-10 bg-gradient-to-r from-[#3e00fa] to-[#d900ed]">
        Join via Discord
      </a>
    </div>
  );
}

export default Join