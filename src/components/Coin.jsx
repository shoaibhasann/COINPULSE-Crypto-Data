import axios from "axios";
import React, { useEffect, useState } from "react";
import {  coinApi } from "../main";
import Loader from "./Loader";
import Coincard from "./Coincard";

function Coin() {
  const [Coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const { data } = await axios.get(`${coinApi}`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    fetchCoinData();
  }, []);

  return (
    <div className="bg-[#0f051d]">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[1240px] m-auto">
          <h1 className="text-white font-medium text-3xl mt-16 mb-10 ">
            Coin Update
          </h1>
          <div className=" grid grid-cols-[16fr_25fr_25fr_25fr]  font-medium rounded-t-lg text-2xl text-white p-4 place-items-center bg-gradient-to-r from-[#3e00fa] to-[#d900ed]">
            <h3>Coin</h3>
            <h3>Price</h3>
            <h3>24h Change</h3>
            <h3>Market Cap</h3>
          </div>
          {Coins.map((element) => (
            <Coincard
              key={element.id}
              name={element.name}
              image={element.image}
              price={element.current_price}
              url={element.url}
              change={element.price_change_24h}
              market={element.market_cap}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Coin;
