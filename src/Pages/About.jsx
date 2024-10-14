import React from 'react';
import card from "../assets/100.mov"
import rocket from '../assets/rocket.svg';

export default function About() {
  return (
    <div id='about' className="">
      <div className="max-w-7xl flex flex-col md:gap-10 mx-auto">
        <h2 className="text-4xl  md:text-6xl text-center font-bold mb-8">
          ABOUT <span className="text-[#d3a605]">THE PLATFORM</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-[.5] order-1 md:order-1">
            <div className=" w-[70%] mx-auto rounded-lg p-6 text-center">
            <video src={card}  autoPlay loop  muted  className='h-[500px] w-[300px] '></video>
             
            </div>
          </div>
          <div className="flex-[.5]  md:mt-[80px] order-2 flex flex-col gap-5 md:order-2">
            <h3 className="   text-center md:text-start text-4xl  md:text-6xl  font-bold mb-4">
              CREATE YOUR <br/><span className="text-[#d3a605]">OWN</span> NFT
            </h3>
            <p className="text-gray-400 text-center md:text-start px-5 md:px-0 mb-6">
              Multiple Chains, One Home. Stack up all your NFTs from<br/> various blockchains.
            </p>
            <button className="  max-w-fit mx-auto md:mx-0 px-6 py-4 text-[#d3a605] border-2 rounded-full font-semibold hover:text-white hover:bg-red-600   transition duration-300 flex items-center">
              Mint Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
