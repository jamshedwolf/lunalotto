import { FaFacebookF, FaPinterestP, FaDiscord, FaYoutube, FaTiktok } from 'react-icons/fa';
import React from 'react';
import f1 from "../assets/f1.svg";
import f2 from "../assets/f2.svg";
import f3 from "../assets/f3.svg";
import f4 from "../assets/f4.svg";
import f5 from "../assets/f5.svg";
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  const navItems = [
    { name: 'HOME', type: 'router', to: '/' },
    { name: 'COLLECTION', type: 'scroll', to: 'roadmap' },
    { name: 'SERVICES', type: 'router', to: '/services' },
    { name: 'ABOUT US', type: 'scroll', to: 'about' },
    { name: 'ROAD MAP', type: 'scroll', to: 'roadmap' },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg5 text-white pt-8">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] z-[-1] bgballs"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <div className="col-span-1 text-lg mx- lg:mx-0 md:col-span-3">
            <img src={logo} alt="Lunachano Crypto Logo" className="mb-4 lg:w-30 w-[100px]" />
            <p className="mb-4">
              The largest NFT Marketplace. Unique and <br /> authentic digital creations. Made possible <br /> by blockchain technology.
            </p>
            <div className="flex space-x-4">
              <img src={f1} alt="" className="w-10 transform hover:scale-110 transition-transform duration-300" />
              <img src={f2} alt="" className="w-10 transform hover:scale-110 transition-transform duration-300" />
              <img src={f3} alt="" className="w-10 transform hover:scale-110 transition-transform duration-300" />
              <img src={f4} alt="" className="w-10 transform hover:scale-110 transition-transform duration-300" />
              <img src={f5} alt="" className="w-10 transform hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          
          <div id='li' className='flex md:col-span-4 items-center justify-center flex-col font-semibold md:flex-row gap-2'>
            {navItems.map((item) => {
              const commonProps = {
                className: "text-white  hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer",
                onClick: handleScrollToTop,
              };

              return item.type === 'router' ? (
                <Link key={item.name} to={item.to} {...commonProps}>
                  {item.name}
                </Link>
              ) : (
                <ScrollLink key={item.name} to={item.to} smooth={true} duration={500} {...commonProps}>
                  {item.name}
                </ScrollLink>
              );
            })}
          </div>
        </div>
        
      </div>
      <div className="mt-8 py-8 px-8 w-full flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-center">2024© Copyright Lunalotto. All Rights Reserved</p>
        <div className="flex space-x-4 text-sm">
          <Link href="#" to="Terms" className="hover:underline text-center z-10">Terms Of Service</Link>
          <Link href="#" to="Terms" className="hover:underline text-center z-10">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
