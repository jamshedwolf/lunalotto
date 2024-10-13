import React from 'react';
import WalletImage from '../assets/wallet.svg'; // Correct import for local SVG
import m1 from '../assets/m1.svg'; // Correct import for local SVG
import m2 from '../assets/m2.svg'; // Correct import for local SVG
import m3 from '../assets/m3.svg'; // Correct import for local SVG
import m4 from '../assets/m4.svg'; // Correct import for local SVG
import { FaWallet, FaShoppingCart, FaPaintBrush, FaListUl } from 'react-icons/fa';

const Mint = () => {
    return (
        <div className="text-white relative p-4 md:p-8">
            <div className="gradient z-[-1] right-[-30%]  absolute top-0 w-[900px] rounded-full blur-[220px] h-[900px]"></div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
                {/* Left side: Wallet Image and Mint Now Section */}
                <div className="flex flex-col p-5 flex-[.4] items-center lg:items-start gap-4">
                    <div className="w-full flex justify-center">
                        <img
                            src={WalletImage} // Using img tag for local SVG
                            alt="Wallet Illustration"
                            className="mx-auto ml-5"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left">
                            LET'S START <br />
                            <span className="text-[#d3a605]">MINTING!</span>
                        </h1>
                        <p className="mb-6 text-center lg:text-left">
                            Use Trust Wallet, Metamask, or any wallet to connect to the app.
                        </p>
                        <button className="bg-[#d3a605] lg:mx-10 text-white px-6 py-4 rounded-full font-semibold hover:bg-red-600 transition duration-300">
                            Mint Now
                        </button>
                    </div>
                </div>

                {/* Right side: Cards Section */}
                <div className="grid-cols-1 hidden md:grid flex-[.6] sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
                    {/* Card 1: Connect Wallet */}
                    <div className="flex flex-col gap-4">
                        <div className=" bg-white/5 p-6 rounded-[20px]">
                            <div className="text-yellow-400 text-3xl mb-4">
                                <img src={m4} alt="Connect Wallet" />
                            </div>
                            <h3 className="text-2xl py-4 font-semibold mb-2">CONNECT WALLET</h3>
                            <p className="text-gray-400">
                                Use Trust Wallet, Metamask, or any wallet to connect to the app.
                            </p>
                        </div>

                        {/* Card 2: Create Artwork */}
                        <div className="bg-white/5 p-6 rounded-[20px]">
                            <div className="text-yellow-400 text-3xl mb-4">
                                <img src={m2} alt="Create Artwork" />
                            </div>
                            <h3 className="text-2xl py-4 font-semibold mb-2">CREATE ARTWORK</h3>
                            <p className="text-gray-400">
                                Create your unique digital artwork using our tools.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:mt-20 gap-4">
                        <div className="bg-white/5 p-6 rounded-[20px]">
                            <div className="text-yellow-400 text-3xl mb-4">
                                <img src={m1} alt="Buy Your NFT" />
                            </div>
                            <h3 className="text-2xl py-4 font-semibold mb-2">BUY YOUR NFT</h3>
                            <p className="text-gray-400">
                                Select the NFT you want to buy and complete the transaction.
                            </p>
                        </div>

                        {/* Card 4: List Them for Sale */}
                        <div className="bg-white/5 p-6 rounded-[20px]">
                            <div className="text-yellow-400 text-3xl mb-4">
                                <img src={m3} alt="List Them for Sale" />
                            </div>
                            <h3 className="text-2xl py-4 font-semibold mb-2">LIST THEM FOR SALE</h3>
                            <p className="text-gray-400">
                                List your created or purchased NFTs for sale on our marketplace.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mobile version of the Cards */}
                <div className="grid grid-cols-1 lg:hidden flex-[.6] sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
                    {/* Card 1: Connect Wallet */}
                    <div className="bg-white/5 p-6 rounded-lg">
                        <div className="text-yellow-400 text-3xl mb-4">
                            <img src={m4} alt="Connect Wallet" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">CONNECT WALLET</h3>
                        <p className="text-gray-400">
                            Use Trust Wallet, Metamask, or any wallet to connect to the app.
                        </p>
                    </div>

                    {/* Card 2: Buy Your NFT */}
                    <div className="bg-white/5 p-6 rounded-lg">
                        <div className="text-yellow-400 text-3xl mb-4">
                            <img src={m1} alt="Buy Your NFT" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">BUY YOUR NFT</h3>
                        <p className="text-gray-400">
                            Select the NFT you want to buy and complete the transaction.
                        </p>
                    </div>

                    {/* Card 3: Create Artwork */}
                    <div className="bg-white/5 p-6 rounded-lg">
                        <div className="text-yellow-400 text-3xl mb-4">
                            <img src={m2} alt="Create Artwork" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">CREATE ARTWORK</h3>
                        <p className="text-gray-400">
                            Create your unique digital artwork using our tools.
                        </p>
                    </div>

                    {/* Card 4: List Them for Sale */}
                    <div className="bg-white/5 p-6 rounded-lg">
                        <div className="text-yellow-400 text-3xl mb-4">
                            <img src={m3} alt="List Them for Sale" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">LIST THEM FOR SALE</h3>
                        <p className="text-gray-400">
                            List your created or purchased NFTs for sale on our marketplace.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mint;
