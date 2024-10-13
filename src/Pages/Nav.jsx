import { useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'HOME', to: 'home' },
    { name: 'COLLECTION', to: 'collection' },
    { name: 'ABOUT US', to: 'about' },
    { name: 'ROAD MAP', to: 'roadmap' },
  ];

  const scrollToTop = () => {
    scroller.scrollTo('home', {
      smooth: true,
      duration: 500,
      offset: -70, // Adjust if you have a fixed header
    });
  };

  return (
    <nav className=" w-full z-50 text-[16px] py-4 text-white transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className=" cursor-pointer" onClick={scrollToTop}>
            <img src={logo} className='lg:w-30 w-[100px] ' alt="Ultrachand Crypto" />
          </div>
          <div className="hidden text-[16px] md:block">
            <div className="ml-10 flex  space-x-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjusts scroll position for fixed header
                  className="text-white  hover:text-white px-3 py-2 rounded-md  font-medium cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#d3a605] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
              Connect Wallet
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white "
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 flex flex-col items-center justify-center space-y-1 sm:px-3">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                onClick={toggleMenu}
              >
                {item.name}
              </ScrollLink>
            ))}
            <button className="mt-4  bg-yellow-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
