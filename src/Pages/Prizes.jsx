import React from 'react';
import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import p3 from "../assets/p3.svg";
import p4 from "../assets/p4.svg";
import p5 from "../assets/p5.svg";
import avatar from "../assets/avatar.svg";

const prizes = [
  { img: p1, title: 'WIN A BITCOIN', description: 'Subscribe to our super-rare and exclusive drops & collectibles.' },
  { img: p2, title: 'WIN A XBOX', description: 'Subscribe to our super-rare and exclusive drops & collectibles.' },
  { img: p3, title: 'WIN A CAR', description: 'Subscribe to our super-rare and exclusive drops & collectibles.' },
  { img: p4, title: 'WIN A HOUSE', description: 'Subscribe to our super-rare and exclusive drops & collectibles.' },
  { img: p5, title: 'WIN A TRIP TO SPACE', description: 'Subscribe to our super-rare and exclusive drops & collectibles.' },
];

export default function Prizes() {
  return (
    <div className="text-white relative py-16 px-4  sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] z-[-1] bgballs"></div>
       <div className="absolute top-0 left-0 w-[100%] h-[100%] z-[-1] bg4"></div>
      {/* <div className="gradient z-[-1] right-[-30%] hidden md:block absolute top-0 w-[500px] rounded-full blur-[220px] h-[500px]"></div>
      <div className="gradient z-[-1] left-[20%] absolute bottom-60 w-[300px] rounded-full blur-[120px] h-[300px]"></div> */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl text-white jack md:text-6xl text-center mb-2">
          LUNA <span className="text-[#85CD4F]">PRIZES</span>
        </h2>
        <p className="text-gray-400 text-center px-5 md:px-0 mb-8">
          Multiple Chains, One Home. Stack up all your NFTs from across blockchains.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {prizes.map((prize, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 flex flex-col items-center text-center h-full">
              <img src={prize.img} alt={`${prize.title} image`} className="mb-4" />
              <h3 className="text-lg font-semibold mb-2">{prize.title}</h3>
              <p className="text-sm text-gray-400 mb-4 flex-grow">{prize.description}</p>
              <button className="bg-[#85CD4F] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition duration-300">
                Claim Now
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-6xl jack md:text-6xl">
              Winners <span className="text-[#85CD4F]">LEADERBOARD</span>
            </h2>
            <p className="text-center lg:text-start text-gray-400">List of our recent prize winners. Buy tickets now, you have a great chance to win.</p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-max rounded-lg overflow-hidden">
              {/* Table Headers */}
              <div className="flex bg-[#1E2E1E] border-b border-b-[#ffffff] text-white font-bold">
                <div className="w-1/6 p-3">Winners</div>
                <div className="w-1/6 p-3">Wallet Address</div>
                <div className="w-1/6 p-3">Transaction</div>
                <div className="w-1/6 p-3">Date</div>
                <div className="w-1/6 p-3">Time</div>
                <div className="w-1/6 p-3">Prize</div>
              </div>

              {/* Table Rows */}
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex bg-white/5">
                  <div className="w-1/6 flex  items-center p-3 space-x-3">
                    <img src={avatar} alt={`Avatar of Winner ${index + 1}`} className="w-8 h-8 rounded-full" />
                  </div>
                  <div className="w-1/6 p-3">0x1234...abcd</div>
                  <div className="w-1/6 p-3">0xTransactionID</div>
                  <div className="w-1/6 p-3">2024-10-19</div>
                  <div className="w-1/6 p-3">14:35:21</div>
                  <div className="w-1/6 p-3">5 BTC</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
