import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import Exchangecard from './ExchangeCard';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ErrorCard from './ErrorCard';

function Exchange() {

    const [ exchanges, setExchanges ] = useState([]);
    const [ loading , setLoading ] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [showError, setError] = useState(false);

    const exchangeApi = "https://api.coingecko.com/api/v3/exchanges?vs_currency=inr";

    function numberWithCommas(x){
      return x
        .toString()
        .replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,");
    }

    useEffect(() => {
   const fetchExchangeData = async() => {
        try {
            const { data } = await axios.get(exchangeApi);
            setExchanges(data);
            setLoading(false);
        } catch (error) {
            setError(true);
        }
   }
   fetchExchangeData();
    }, [currentPage]);
    
      const previousPage = currentPage === 1 ? "hidden" : "";
      const lastPage = currentPage === Math.ceil(exchanges.length / 10) ? "hidden" : "";

        const scrollTop = () => {
          window.scrollTo({ top: (0, 0), behavior: "smooth" });
        };

        if(showError){
          return <ErrorCard/>
        }

  return (
    <div className="bg-[#0f051d]">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[1240px] m-auto">
          <h1 className="text-white font-medium text-3xl mt-16 mb-10 ">
            Exchange Updates
          </h1>
          <div className=" grid grid-cols-2 md:grid-cols-3 font-medium rounded-t-lg md:text-2xl text-white p-4 place-items-center bg-gradient-to-r from-[#3e00fa] to-[#d900ed]">
            <h3>Exchange</h3>
            <h3 className='hidden md:block'>Rank</h3>
            <h3>Bitcoin Trade Amount</h3>
          </div>
          {exchanges.slice(currentPage * 10 - 10, currentPage * 10).map((element) => (
            <Exchangecard
              key={element.id}
              name={element.name}
              image={element.image}
              price={numberWithCommas(element.trade_volume_24h_btc)}
              rank={element.trust_score_rank}
              url={element.url}
            />
          ))}
          {exchanges.length > 0 && (
            <div onClick={scrollTop} className="flex gap-2 items-center my-7 w-full justify-center">
              <AiOutlineArrowLeft
                onClick={() => setCurrentPage(currentPage - 1)}
                className={`bg-white w-12 h-12 p-2 rounded-full focus:bg-gradient-to-r from-[#3e00fa] to-[#d900ed] focus:text-white ${previousPage}`}
              />
              {[...Array(Math.ceil(exchanges.length / 10))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`bg-white hidden md:block text-base w-12 h-12 text-black font-bold rounded-full focus:bg-gradient-to-r from-[#3e00fa] to-[#d900ed] focus:text-white ${
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
                className={`bg-white w-12 h-12 p-2 rounded-full focus:bg-gradient-to-r from-[#3e00fa] to-[#d900ed] focus:text-white ${lastPage}`}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Exchange