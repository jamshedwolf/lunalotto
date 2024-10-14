import React from 'react';
import wave from "../assets/vave.svg";
import card from "../assets/100.mov";
import card2 from "../assets/500.mov";
import card3 from "../assets/1000.mov";
import card4 from "../assets/5000.mov";
import card5 from "../assets/10000.mov";
import bitcoin from "../assets/bitcoin.svg";
import eth from "../assets/eth.svg";

const collections = [
    { number: '100', video: card },
    { number: '500', video: card2 },
    { number: '1000', video: card3 },
    { number: '5000', video: card4 },
    { number: '10000', video: card5 },
];

const stats = [
    { value: '400+', label: 'Collections' },
    { value: '200+', label: 'Artists' },
    { value: '1860+', label: 'Community members' },
    { value: '2.5x', label: 'Estimated value' },
];

export default function Collections() {
    return (
        <div id='collection' className=" text-white relative py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl lg:text-6xl text-center font-bold mb-4">
                    LUNA <span className="text-[#d3a605]">COLLECTIONS</span>
                </h2>
                <p className="text-gray-400 text-center mb-6">
                    Multiple Chains, One Home. Stack up all your NFTs from <br /> across blockchains.
                </p>

                {/* Collection Cards with Videos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
                    {collections.map((collection, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                            <div className="flex flex-col ">
                               
                                    <div className=" flex justify-center items-center">
                                        {/* Video instead of image */}
                                        <video
                                        
                                            src={collection.video}
                                            autoPlay
                                            loop
                                            muted
                                            
                                            playsInline
                                            className=" h-[500px]"
                                            alt={`Luna Collection ${collection.number}`}
                                        />
                                    </div>
                                    
                               
                                <button className="bg-[#d3a605]  mx-auto px-6 py-4 rounded-full max-w-fit font-semibold hover:bg-red-600 duration-300 delay-100 transition-colors">
                                    Mint Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Wave Image */}
                <div className="flex items-center relative justify-center py-4 mt-10 md:p-20">
                    <img src={wave} alt="Wave" />
                    <img src={eth} alt="" className="absolute bottom-10 right-60 w-6" />
 
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <p className="text-4xl lg:text-6xl font-bold text-white mb-2">{stat.value}</p>
                            <p className="text-center mr-2 font-light text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* SVG Arrow */}
                <div className="flex justify-center md:mt-10">
                    <div className="flex items-center relative justify-center py-4 mt-10 lg:mt-20">
             
                    <img src={bitcoin} alt="" className="absolute top-0 w-8 right-80" />
                        <img src={wave} alt="Wave" />
                    </div>
                </div>
            </div>
        </div>
    );
}
