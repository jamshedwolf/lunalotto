import React from 'react';
import bag from "../assets/bag.svg";
import meta from "../assets/fire.svg";
import coin from "../assets/sol.svg";
import x from "../assets/phantom.svg";
import trust from "../assets/trust.svg";
import bit from "../assets/bit.svg";

const phases = [
  {
    time: "August 2024",
    t1: "Idea and ",
    t2: "preparations",
    description: "Concept development and planning phase for LunaLotto and LunaCasino. Creation of the technical foundations and first partnerships.",
  },
  {
    time: "December 2024",
    t1: "Start of NFT sale & ",
    t2: "LunaLotto Beta",
    description: "Start of NFT sale & LunaLotto Beta. LunaFounder NFTs are offered for sale. LunaLotto starts the beta phase with first raffles.",
  },
  {
    time: "March 2024",
    t1: "Completion of ",
    t2: "NFT sale",
    description: "The sale of LunaFounder NFTs ends. All NFTs are sold and the funds are used to further develop the platform.",
  },
  {
    time: "JUNE 2024",
    t1: "LunaCasino launch & major ",
    t2: "advertising measures",
    description: "LunaCasino will officially go online, 1 month after the end of the NFT sale. Major advertising campaigns start in parallel to attract new players.",
  },
];

const logos = [meta, bit, coin, trust, x];

export default function Roadmap() {
  return (
    <div id='roadmap' className="relative min-h-screen flex flex-col  items-center justify-center text-white p-4 lg:p-8">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] z-[-5] bgballs"></div>
        <div className="absolute top-0 left-0 w-[100%] h-[100%] z-[-5] bg4"></div>
      <div className="gradient z-[-1] right-1/3 absolute top-[20%] w-[700px] rounded-full blur-[420px] h-[700px]"></div>
      <h1 className="text-6xl jack lg:text-6xl text-center mb-12">
        LUNALOTTO&apos;S <span className="text-[#85CD4F]">ROADMAP</span>
      </h1>
      <div className="grid grid-cols-1 lg:w-[70%] md:grid-cols-2 lg:grid-cols-2 gap-10">
        {phases.map((phase, index) => (
          <div key={index} className="bg-white/5 p-8 transform hover:scale-110 space-y-8 transition-transform duration-300 rounded-[20px] shadow-md border border-gray-700">
            <div className="flex justify-between items-center mb-">
              <h2 className="text-[#85CD4F] text-[18px] font-bold">{phase.time}</h2>
            </div>
            <div className="flex flex-col gap-1 space-y-0">
              <p className="md:text-3xl text-2xl jack">{phase.t1}</p>
              <p className="md:text-3xl text-2xl jack">{phase.t2}</p>
            </div>
            <p className="text-gray-400 text-[18px] mb-4">{phase.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center lg:mt-20 gap-5">
        <p className="text-center text-gray-500">POWERED BY AMAZING PARTNERS</p>
        <div className="flex flex-wrap justify-center items-center mt-10">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} className="h-16 lg:h-[100px] transform hover:scale-110 delay-100 transition-transform duration-300 mx-2" />
          ))}
        </div>
      </div>

      <div className="bg-white/5 my-10 lg:mt-20 rounded-[40px] md:w-[70%] mx-auto p-4 lg:pl-20 flex flex-col gap-4 sm:flex-row items-center justify-between">
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-6xl jack md:text-6xl mb-2">NEVER <span className="text-[#85CD4F]">MISS A DROP!</span></h3>
            <p className="text-gray-400 text-start mb-4 sm:mb-0">Subscribe to our super-rare and exclusive drops & collectibles.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 text-white px-4 py-2 rounded-full w-[300px] focus:outline-none focus:ring-2 focus:ring-[#85CD4F]"
            />
            <button className="bg-[#85CD4F] px-6 py-2 hover:bg-red-600 text-white rounded-full font-semibold transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
        <img src={bag} alt="Money bag" />
      </div>
    </div>
  );
}
