import React from 'react';
import p1 from "../assets/p1.svg"
import p2 from "../assets/p2.svg"
import p3 from "../assets/p3.svg"
import p4 from "../assets/p4.svg"
import p5 from "../assets/p5.svg"
import bag from "../assets/bag.svg"
import wave from "../assets/vave.svg";

const prizes = [
  {img:p1, title: 'WIN A BITCOIN', description: 'Subscribe to our super-rare and exclusive drops & collectibles.' },
  {img:p2,  title: 'WIN A XBOX',  description: 'Subscribe to our super-rare and exclusive drops & collectibles.'},
  {img:p3,  title: 'WIN A CAR',  description: 'Subscribe to our super-rare and exclusive drops & collectibles.' },
  {img:p4,  title: 'WIN A HOUSE',  description: 'Subscribe to our super-rare and exclusive drops & collectibles.' },
  {img:p5,  title: 'WIN A TRIP TO SPACE',  description: 'Subscribe to our super-rare and exclusive drops & collectibles.' },
];

export default function Prizes() {
  return (
    <div className=" text-white relative py-16 px-4 sm:px-6 lg:px-8">
         <div className="gradient z-[-1] right-[-30%] hidden md:block  absolute top-0 w-[500px] rounded-full blur-[220px] h-[500px]"></div>
         <div className="gradient z-[-1] left-[20%]  absolute bottom-60 w-[500px] rounded-full blur-[220px] h-[500px]"></div>
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl  md:text-6xl text-center font-bold mb-2">
          LUNA <span className="text-[#d3a605]  ">PRIZES</span>
        </h2>
        <p className="text-gray-400 text-center px-5 md:px-0  mb-8">Multiple Chains, One Home. Stack up all your NFTs from<br/>
        across blockchains.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-8">
          {prizes.map((prize, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 flex flex-col items-center text-center">
                <img src={prize.img} alt="" className="" />
              <h3 className="text-lg font-semibold mb-2">{prize.title}</h3>
              <p className="text-sm text-gray-400 mb-4 flex-grow">{prize.description}</p>
              <button className="bg-[#d3a605]  text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition duration-300">
              Claim Now
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center py-4 mt-10"> <img src={wave} alt="" /></div>
        <div className="bg-white/5  rounded-[40px] md:w-[80%] mx-auto p-4 lg:pl-20 flex flex-col gap-4 sm:flex-row items-center justify-between">
          <div className="flex flex-col gap-5">
          <div className=''>
            <h3 className="text-4xl md:text-6xl font-bold mb-2">NEVER <span className="text-[#d3a605]">MISS A DROP!</span></h3>
            <p className="text-gray-400 text-start mb-4 sm:mb-0">Subscribe to our super-rare and exclusive drops & collectibles.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 text-white px-4 py-2 rounded-full w-[300px] focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-[#d3a605] px-6 py-2 hover:bg-red-600 text-white rounded-full font-semibold  transition duration-300">
              Subscribe
            </button>
          </div>
          </div>
          <img src={bag} alt="Money bag"  className="" />
        </div>
       <div className="flex items-center justify-center py-4 mt-10"> <img src={wave} alt="" /></div>
      </div>
    </div>
  );
}
