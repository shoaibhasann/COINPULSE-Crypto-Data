import React, { useEffect, useState } from "react";
import axios from "axios";
import Bit from "../assets/bit.png";
import Eth from "../assets/ethereum.png";
import { numberWithCommas } from "./Coin";

function Hero() {
  const [coins, setCoins] = useState([]);

  const coinApi = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&sparkline=false`;

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const { data } = await axios.get(coinApi);
        setCoins(data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoinData();
  }, []);

  const getChangeClass = (priceChange) =>
    parseFloat(priceChange) > 0 ? "text-green-600" : "text-red-600";

  return (
    <div className=" flex flex-col md:gap-10 bg-gradient-to-b from-[#0f051d] to-[#130749] mt-24">
      <div className="flex justify-center items-center gap-6 md:gap-12">
        <img
          className=" w-10 h-10 lg:w-20 lg:h-20 animate-bounce"
          src={Bit}
          alt="Bitcoin"
        />
        <h1 className="text-white text-xl lg:text-8xl font-bold tracking-wider mb-5">
          TRACK AND TRADE
        </h1>
        <img
          className="w-10 h-10 lg:w-20 lg:h-20 animate-bounce"
          src={Eth}
          alt="Ethereum"
        />
      </div>
      <div className=" text-xl lg:text-8xl font-bold tracking-wider  text-center bg-gradient-to-r from-[#3e00fa] to-[#d900ed] text-transparent bg-clip-text">
        CRYPTO CURRENCIES
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-6 py-16 md:py-0">
        {coins.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              className="w-[100px] h-[100px]"
              src={item.image}
              alt={item.name}
            />
            <div>
              <h1 className="text-white font-semibold text-xl inline-block mr-3">
                {item.name}
              </h1>
              <span
                className={`font-semibold text-xl ${getChangeClass(
                  item.price_change_percentage_24h
                )}`}
              >
                {item.price_change_percentage_24h + " %"}
              </span>
            </div>
            <h2 className="text-white font-semibold text-xl">
              {"₹ " + numberWithCommas(item.current_price)}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
