import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from './Chart';

function CoinDetail() {
      const [coin, setCoin] = useState([]);
      const [loading, setLoading] = useState(true);
      const [days, setDays] = useState('100d');
      const [chartArray , setChartArray] = useState([]);
      const {id} = useParams();

        useEffect(() => {
          const fetchCoin = async () => {
            try {
              const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
              const { data:chartData } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}`);
              setCoin(data);
              setChartArray(chartData.prices);
              setLoading(false);
            } catch (error) {
              setLoading(true);
            }
          };
          fetchCoin();
        }, [id,days]);

          const getChangeClass = (priceChange) =>
            parseFloat(priceChange) > 0 ? "text-green-600" : "text-red-600";

  return (
    <div className="bg-gradient-to-b from-[#0f051d] t-[#130749] h-full">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-4">
          <div className="flex flex-col items-center gap-5">
            <img
              className="w-14 h-14 md:w-[170px] md:h-[170px]"
              src={coin.image.large}
              alt={coin.name}
            />
            <p className="text-white text-2xl font-medium">{coin.name}</p>
            <p className="text-white text-2xl font-medium">
              {"Rank: #" + coin.market_cap_rank}
            </p>
          </div>
          <div className="hidden md:block w-[2px] h-[50vh] bg-white rounded-2xl"></div>
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-14">
              <p className="text-white text-2xl">
                24h Change:
                <span
                  className={`text-2xl ml-2 ${getChangeClass(
                    coin.market_data
                      .market_cap_change_percentage_24h_in_currency.inr
                  )}`}
                >
                  {coin.market_data.market_cap_change_percentage_24h_in_currency
                    .inr + "%"}
                </span>
              </p>
              <p className="text-white text-2xl">
                Price:
                <span
                  className={`text-2xl ml-2 ${getChangeClass(
                    coin.market_data.current_price.inr
                  )}`}
                >
                  {coin.market_data.market_cap_change_percentage_24h_in_currency
                    .inr + "%"}
                </span>
              </p>
              <p className="text-2xl text-white">{"Symbol: " + coin.symbol}</p>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-3 '>
                <button onClick={() => setDays('24h')} className='text-white rounded-2xl bg-gradient-to-r from-[#3e00fa] to-[#d900ed] px-4 py-2'>24 h</button>
                <button onClick={() => setDays('7d')} className='text-white rounded-2xl bg-gradient-to-r from-[#3e00fa] to-[#d900ed] px-4 py-2'>7 days</button>
                <button onClick={() => setDays('30d')} className='text-white rounded-2xl bg-gradient-to-r from-[#3e00fa] to-[#d900ed] px-4 py-2'>1 month</button>
                <button onClick={() => setDays('180d')} className='text-white rounded-2xl bg-gradient-to-r from-[#3e00fa] to-[#d900ed] px-4 py-2'>6 month</button>
                <button onClick={() => setDays('360d')} className='text-white rounded-2xl bg-gradient-to-r from-[#3e00fa] to-[#d900ed] px-4 py-2'>1 year</button>
            </div>
            <div className="md:w-[600px] md:h-[400px]">
              <Chart arr={chartArray} days={days} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoinDetail