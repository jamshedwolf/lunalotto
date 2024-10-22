import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

import WalletImage from '../assets/wallet.svg';

const faqs = [
  {
    question: "What is Luna's NFT Collection?",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat proident.",
    p2: "  fugiat nulla pariatur.Excepteur sint occaecat cupidatat proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat proident."
  },
  {
    question: "How we can buy and invest NFT?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    question: "Why we should choose Luna's NFT?",
    answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "Where we can buy and sell NFTs?",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    question: "How secure is this token?",
    answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    question: "What is your contract address?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

function Faqs() {
  const [openItem, setOpenItem] = useState(0); // No item is open by default

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? -1 : index); // Toggle logic
  };

  return (
    <div className="lg:h-screen xl:h-auto relative text-white p-4 overflow-hidden  lg:p-8">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bgballs"></div>
       <div className="absolute top-0 left-0 w-[100%] h-[100%] z-[-1] bg6"></div>
      <div className="max-w-6xl relative mx-auto">
        <div className="gradient z-[-1] left-[-60%] absolute hidden lg:block bottom-40 w-[900px] rounded-full blur-[220px] h-[900px]"></div>
        <h1 className="text-6xl jack lg:text-6xl text-center mb-12">
          YOUR QUESTIONS <span className="text-[#85CD4F]">ANSWERED!</span>
        </h1>
        <div className="flex flex-col text-[20px] lg:flex-row gap-8">
          <div className="flex-[.7] border bg-white/5 border-[#393c39] p-5 rounded-[30px] shadow-lg">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b-[1px] border-b-[#393c386c]">
                <button
                  className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                  onClick={() => handleToggle(index)}
                >
                  <span className="text-white">{faq.question}</span>
                  {openItem === index ? (
                    <FaChevronUp className="w-3 h-3 text-[#e7e9e5] transform hover:scale-150 transition-transform duration-300" />
                  ) : (
                    <FaChevronDown className="w-3 h-3 text-[#e7e9e5] transform hover:scale-150 transition-transform duration-300" />
                  )}
                </button>
                {openItem === index && (
                  <div className="pb-4 text-[18px] text-gray-400">
                    <p>{faq.answer}</p>
                    <p className='py-6'>{faq.p2}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={WalletImage} alt="Rocket on coins" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
