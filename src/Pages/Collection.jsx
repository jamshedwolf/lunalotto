import React from 'react';
import wave from "../assets/vave.svg";
import card from "../assets/100.mp4";
import card2 from "../assets/500.mp4";
import card3 from "../assets/1000.mp4";
import card4 from "../assets/5000.mp4";
import card6 from "../assets/25000.mp4";
import card7 from "../assets/50000.mp4";

import card5 from "../assets/10000.mp4";
import bitcoin from "../assets/bitcoin.svg";
import eth from "../assets/eth.svg";

const collections = [
    { number: '100', video: card },
    { number: '500', video: card2 },
    { number: '1000', video: card3 },
    { number: '5000', video: card4 },
    { number: '10000', video: card5 },
    { number: '25000', video: card6 },
    { number: '500000', video: card7 },
];

const stats = [
    { value: '10000+', label: 'Collections' },
    { value: '9000+', label: 'Artists' },
    { value: '1860+', label: 'Community members' },
    { value: '2.5x', label: 'Estimated value' },
];

export default function Collections() {
    return (
        <div id='collection' className="text-white  relative py-16 px-4 sm:px-6 lg:px-8">
             

           
              <div className="absolute top-0 left-0 w-[100%] h-[100%] z-[-5] bg-[#052035]"></div>
            <div className="max-w-7xl flex flex-col items-center justify-center gap-10 mx-auto">
                <div className="">
                    <h2 className="text-6xl jack lg:text-6xl text-center mb-4">
                        LUNA <span className="text-[#85CD4F]">COLLECTIONS</span>
                    </h2>
                    <p className="text-gray-400 text-center mb-6">
                        Multiple Chains, One Home. Stack up all your NFTs from across blockchains.
                    </p>
                </div>
                {/* Collection Cards with Videos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2  mb-12">
                    {collections.map((collection, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                            <div className="flex flex-col gap-2  ">
                                <div className="flex justify-center items-center">
                                    {/* Video instead of image */}
                                    <video
                                        src={collection.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="h-[300px]"
                                        alt={`Luna Collection ${collection.number}`}
                                    />
                                </div>
                                <button className="bg-[#85CD4F] mx-auto px-3 py-2 rounded-full max-w-fit font-semibold hover:bg-red-600 duration-300 delay-100 transition-colors">
                                    Mint Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Wave Image */}

                {/* Stats Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 rounded-full bg-white/5 p-10 gap-8 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <p className="text-6xl lg:text-6xl text-white jack mb-2">{stat.value}</p>
                            <p className="text-center mr-2 font-light text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* SVG Arrow */}
            </div>
          
        </div>
    );
}
