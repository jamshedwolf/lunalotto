import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; // FontAwesome icon
import circle from "../assets/circle.svg"
import card from "../assets/100.mp4"

export default function Hero() {
  return (
    <section className=" text-white relative min-h-screen flex items-center">

        <div className="gradient z-[-1] left-[-30%] hidden lg:block  absolute top-0 w-[900px] rounded-full blur-[220px] h-[900px]"></div>
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Card - Top on mobile, Right on large screens */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2 flex-[.4]"> {/* Applied flex-[.5] */}
            <div className=" rounded-lg overflow-hidden  ">
           <video src={card}  autoPlay loop  muted  className='h-[500px]  w-[300px] '></video>
        
       
       

             
            </div>
          </div>

          {/* Content - Bottom on mobile, Left on large screens */}
          <div className="w-full lg:w-2/3 font-bold order-2 lg:order-1 flex-[.5]"> {/* Applied flex-[.5] */}
            <div className="w-[70%] mx-auto">
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              MINT YOUR <br/><span className="text-[#d3a605]">LUNA NFTS</span> <br/> NOW
            </h1>
            <p className="text-xl mb-6">5,366 / 5555 MINTED</p>
            <div className="flex gap-4 mb-8">
              <button className="bg-[#d3a605] text-white lg:px-6 px-2 py-2 lg:py-3 rounded-full font-semibold hover:bg-red-600 transition-colors">
                Mint Now
              </button>
              <button className="hover:bg-red-600   lg:px-6 px-2 py-2 lg:py-3 rounded-full font-semibold bg-white text-yellow-400 transition-colors">
                Whitelist Now
              </button>
            </div>
            <div className="flex justify-between  items-center mb-8">
              <div className="">
                <p className="  text-3xl lg:text-6xl font-bold">2k+</p>
                <p className="text-sm font-light text-gray-400">Collection Items</p>
              </div>
              <div className="">
                <p className="  text-3xl lg:text-6xl font-bold">0.55</p>
                <p className="text-sm font-light text-gray-400">Floor Price (SOL)</p>
              </div>
              <div className="">
                <p className="  text-3xl lg:text-6xl font-bold">2.5x</p>
                <p className="text-sm font-light text-gray-400">Estimated Value</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-yellow-400">
              <FaArrowUp size={24} /> {/* Used FontAwesome arrow */}
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
