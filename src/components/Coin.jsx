import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import CoinCard from "./CoinCard.jsx";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export function numberWithCommas(x) {
  return x.toString().replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,");
}

function Coin() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const coinApi = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&sparkline=false`;

  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const { data } = await axios.get(coinApi);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    fetchCoinsData();
  }, [currentPage]);

  const previousPage = currentPage === 1 ? "hidden" : "";
  const lastPage = currentPage === Math.ceil(coins.length / 10) ? "hidden" : "";

  const scrollTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <div className="bg-[#0f051d]">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[1240px] m-auto">
          <h1 className="text-white font-medium text-3xl mt-16 mb-10">
            Coin Updates
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-[16fr_25fr_25fr_25fr] font-medium rounded-t-lg text-base md:text-2xl text-white p-4 place-items-center bg-gradient-to-r from-[#3e00fa] to-[#d900ed]">
            <h3>Coin</h3>
            <h3>Price</h3>
            <h3>24h Change</h3>
            <h3 className="hidden md:block">Market Cap</h3>
          </div>
          {coins
            .slice(currentPage * 10 - 10, currentPage * 10)
            .map((element) => (
              <CoinCard
                key={element.id}
                name={element.name}
                image={element.image}
                price={numberWithCommas(element.current_price)}
                change={element.price_change_percentage_24h}
                market={numberWithCommas(element.market_cap)}
                id={element.id}
              />
            ))}

          {coins.length > 0 && (
            <div onClick={scrollTop} className="flex gap-2 items-center my-7 w-full justify-center">
              <AiOutlineArrowLeft
                onClick={() => setCurrentPage(currentPage - 1)}
                className={`bg-white w-10 h-10 md:w-12 md:h-12 md:p-2 rounded-full focus:bg-gradient-to-r from-[#3e00fa] to-[#d900ed] focus:text-white ${previousPage}`}
              />
              {[...Array(Math.ceil(coins.length / 10))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`bg-white hidden md:block text-sm md:text-base md:w-12 md:h-12 text-black font-bold rounded-full focus:bg-gradient-to-r from-[#3e00fa] to-[#d900ed] focus:text-white ${
                    index + 1 === currentPage
                      ? "text-slate-50 bg-gradient-to-r from-[#3e00fa] to-[#d900ed]"
                      : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <AiOutlineArrowRight
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`bg-white h-10 w-10 md:w-12 md:h-12 md:p-2 rounded-full focus:bg-gradient-to-r from-[#3e00fa] to-[#d900ed] focus:text-white ${lastPage}`}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Coin;
