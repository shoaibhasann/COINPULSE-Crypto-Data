import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { exchangeApi } from '../main'
import Loader from './Loader';
import Exchangecard from './Exchangecard';

function Exchange() {

    const [ exchanges, setExchanges ] = useState([]);
    const [ loading , setLoading ] = useState(true);

    useEffect(() => {
   const fetchExchangeData = async() => {
        try {
            const { data } = await axios.get(`${exchangeApi}/exchanges`);
            setExchanges(data);
            setLoading(false);
        } catch (error) {
            setLoading(true);
        }
   }
   fetchExchangeData();
    }, []);
    
  return (
    <div className="bg-[#0f051d]">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[1240px] m-auto">
          <h1 className="text-white font-medium text-3xl mt-16 mb-10 ">
            Exchange Update
          </h1>
          <div className=" grid grid-cols-3 font-medium rounded-t-lg text-2xl text-white p-4 place-items-center bg-gradient-to-r from-[#3e00fa] to-[#d900ed]">
            <h3>Exchange</h3>
            <h3>Rank</h3>
            <h3>Market Cap</h3>
          </div>
          {exchanges.map((element) => (
            <Exchangecard
              key={element.id}
              name={element.name}
              image={element.image}
              price={element.trade_volume_24h_btc}
              rank={element.trust_score_rank}
              url={element.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Exchange