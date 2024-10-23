import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; // FontAwesome icon
import circle from "../assets/circle1.svg";
import card from "../assets/100.mp4";
import wave from "../assets/vave.svg";

export default function Hero() {
  return (
    <section className="text-white relative pt-10 min-h-screen flex items-center">
<div className="absolute top-0 left-0 w-[100%] h-[100%] bgballs"></div>
<div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#052035] z-[-1]"></div>
      {/* <div className="gradient z-[-1] left-[-30%] absolute top-0 hidden md:block w-[500px] rounded-full blur-[220px] h-[500px]"></div> */}
      <div className="container max-w-7xl mx-auto py-12 mt-10 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center flex-[.3] justify-between gap-12">
          {/* Card - Top on mobile, Right on large screens */}
          <div className="w-full lg:w-1/4 order-1 flex items-center justify-center lg:order-2 flex-[.4]">
            <div className="rounded-lg overflow-hidden">
              <video src={card} autoPlay loop muted className=''></video>
            </div>
          </div>

          {/* Content - Bottom on mobile, Left on large screens */}
          <div className="w-[80%] lg:py-10 flex flex-col gap-8 order-2 lg:order-1 flex-[.5]">
            <div className="mx-auto flex flex-col gap-8">
              <h1 className="text-6xl jack uppercase lg:text-7xl mb-4">
                LunaCasino and <br /><span className="text-[#85CD4F]">LunaLotto</span>
              </h1>
              <div className="flex flex-col gap-">
                <p className="text-[18px] text-[#B7B4BB] mb-3">Connect the world of online gambling with blockchain technology.</p>
                <p className="text-[18px] text-[#B7B4BB] mb-3">Players can share in the success of the platform by owning LunaFounder NFTs</p>
              </div>
              <p className="text-4xl jack uppercase lg:text-5xl">
                0 / 13850 <span className="text-[#85CD4F]">Minted</span>
              </p>

              <div className="flex gap-4 mb-8">
                <button className="bg-[#85CD4F] transform hover:scale-110 transition-all duration-300 text-white lg:px-6 px-2 py-2 lg:py-3 rounded-full font-semibold hover:bg-red-600 ">
                  Mint Now
                </button>
                <button className="hover:bg-red-600 transform hover:scale-110 transition-all duration-300 lg:px-6 px-2 py-2 lg:py-3 rounded-full font-semibold bg-white text-[#85CD4F] ">
                  Whitelist Now
                </button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
