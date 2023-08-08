import React from 'react';
import Safe from '../assets/safe.png'
import Wallet from '../assets/wallet.png'
import {FaYoutube, FaTwitter, FaFacebook, FaDiscord} from 'react-icons/fa';

function Footer() {
  return (
    <div className="flex items-center justify-evenly bg-[#0f051d] mb-12 ">
      <img
        className="w-10 h-10 md:w-[130px] md:h-[130px]"
        src={Safe}
        alt="Bitcoin-Safe"
      />
      <div className="flex flex-col gap-3 md:gap-6">
        <div className="flex gap-5 md:gap-8 items-center justify-center text-white text-2xl md:text-4xl">
          <FaTwitter />
          <FaFacebook />
          <FaYoutube />
          <FaDiscord />
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-8 text-white text-base md:text-xl">
          <span>Privacy</span>
          <span>Terms of Use</span>
        </div>
      </div>
      <img
        className="w-10 h-10 md:w-[130px] md:h-[130px]"
        src={Wallet}
        alt="Bitcoin-Wallet"
      />
    </div>
  );
}

export default Footer