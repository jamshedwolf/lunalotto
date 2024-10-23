import React, { useState, useEffect } from 'react';
import card from "../assets/100.mp4";
import card2 from "../assets/500.mp4";
import card3 from "../assets/1000.mp4";
import card4 from "../assets/5000.mp4";
import card5 from "../assets/10000.mp4";
import card6 from "../assets/25000.mp4";
import card7 from "../assets/50000.mp4";

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
    { value: '7', label: 'Collections' },
    { value: '9000+', label: 'Artists' },
    { value: '100+', label: 'Community Members' },
    { value: '2.5x', label: 'Estimated Value' },
];

const Collections = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const itemsToShow = window.innerWidth < 640 ? 1 : 5;
    const totalSlides = Math.ceil(collections.length / itemsToShow);
    const dotsToShow = window.innerWidth < 640 ? 7 : 2;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id='collection' className="text-white relative py-16 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 z-[-5] bg-[#052035]"></div>
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
                <header className="text-center">
                    <h2 className="text-6xl lg:text-6xl mb-4">
                        LUNA <span className="text-[#85CD4F]">COLLECTIONS</span>
                    </h2>
                    <p className="text-gray-400 mb-6">
                        Multiple Chains, One Home. Stack up all your NFTs from across blockchains.
                    </p>
                </header>

                {/* Custom Slider */}
                <div className="relative w-full">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300"
                            style={{ transform: `translateX(-${currentSlide * (100 / itemsToShow)}%)` }}
                        >
                            {collections.map((collection, index) => (
                                <div key={index} className="flex-shrink-0 w-full md:w-1/5">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-center items-center">
                                            <video
                                                src={collection.video}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="lg:h-[300px] w-full object-cover"
                                                alt={`Luna Collection ${collection.number}`}
                                            />
                                        </div>
                                        <button className="bg-[#85CD4F] mx-auto px-3 py-2 rounded-full max-w-fit font-semibold hover:bg-red-600 duration-300 transition-colors">
                                            Mint Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-4">
                        {Array.from({ length: dotsToShow }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`mx-1 h-2 w-2 rounded-full ${currentSlide === index ? 'bg-[#85CD4F]' : 'bg-gray-500'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-full bg-white/5 p-10 gap-8 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <p className="text-6xl lg:text-6xl text-white mb-2">{stat.value}</p>
                            <p className="font-light text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Collections;
