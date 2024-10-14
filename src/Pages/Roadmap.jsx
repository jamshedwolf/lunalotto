import React from 'react';
import wave from "../assets/vave.svg";
import r1 from "../assets/r1.svg";
import r2 from "../assets/r2.svg";
import r3 from "../assets/r3.svg";
import r4 from "../assets/r4.svg";
import r5 from "../assets/r5.svg";
import r6 from "../assets/r6.svg";
import meta from "../assets/meta.svg";
import coin from "../assets/coinbase.svg";
import x from "../assets/x.svg";
import trust from "../assets/trust.svg";
import bit from "../assets/bit.svg";

const phases = [
  {
    title: "PLANNING",
    description: "Quality comes first, we took our time to plan out everything and build our production pipeline for good quality artworks.",
    items: ["Release website and logo", "Grow community", "Launch the project"],
    image: r2
  },
  {
    title: "PRODUCTION",
    description: "Quality comes first, we took our time to plan out everything and build our production pipeline for good quality artworks.",
    items: ["Release website and logo", "Grow community", "Launch the project"],
    image: r1
  },
  {
    title: "LAUNCH",
    description: "Quality comes first, we took our time to plan out everything and build our production pipeline for good quality artworks.",
    items: ["Release website and logo", "Grow community", "Launch the project"],
    image: r6
  },
  {
    title: "MINTING",
    description: "Quality comes first, we took our time to plan out everything and build our production pipeline for good quality artworks.",
    items: ["Release website and logo", "Grow community", "Launch the project"],
    image: r5
  },
  {
    title: "NEW NFTS",
    description: "Quality comes first, we took our time to plan out everything and build our production pipeline for good quality artworks.",
    items: ["Release website and logo", "Grow community", "Launch the project"],
    image: r4
  },
  {
    title: "METAVERSE",
    description: "Quality comes first, we took our time to plan out everything and build our production pipeline for good quality artworks.",
    items: ["Release website and logo", "Grow community", "Launch the project"],
    image: r3
  }
];

const logos = [meta, bit, coin, trust, x];

export default function Roadmap() {
  return (
    <div id='roadmap' className=" relative  min-h-screen flex flex-col items-center justify-center text-white p-4 lg:p-8">
           <div className="gradient z-[-1] right-[0%]  absolute bottom-[20%] w-[700px] rounded-full blur-[220px] h-[700px]"></div>
      <h1 className="text-4xl lg:text-6xl font-bold  text-center mb-12">
        LUNALOTTO&apos;S <span className="text-[#d3a605]">ROADMAP</span>
      </h1>
      <div className="grid grid-cols-1 lg:w-[70%] md:grid-cols-2 lg:grid-cols-3 gap-6">
        {phases.map((phase, index) => (
          <div key={index} className="bg-white/5 p-6 transform hover:scale-110 transition-transform duration-300 rounded-[20px] shadow-md border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#D3A605] font-bold">
                PHASE 0{index + 1}
              </h2>
              <img src={phase.image} alt={phase.title} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">{phase.title}</h2>
            <p className="text-gray-400 mb-4">{phase.description}</p>
            <div className="w-20 h-px bg-gray-600 mr-2" />
            <ul className="space-y-2 py-5">
              {phase.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex ml-10 items-center">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex p-5 mt-5 lg:mt-20 items-center justify-center">
        <img src={wave} alt="" />
      </div>
      <div className="flex flex-col items-center lg:mt-20 gap-5">
        <p className="text-center text-gray-500">POWERED BY AMAZING INVESTORS:</p>
        <div className="flex flex-wrap justify-center items-center mt-10">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} className=" h-16 lg:h-[100px] transform hover:scale-110 delay-100 transition-transform duration-300 mx-2" />
          ))}
        </div>
      </div>
      <div className="flex p-5 mt-5 lg:mt-20 items-center justify-center">
        <img src={wave} alt="" />
      </div>
    </div>
  );
}
