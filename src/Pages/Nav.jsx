import { useState } from 'react'; 
import { Link } from 'react-router-dom';  // For navigation to other pages
import { Link as ScrollLink } from 'react-scroll';  // For scrolling to sections within the same page
import { FaBars, FaTimes, FaFacebookF, FaPinterestP, FaDiscord } from 'react-icons/fa'; // Social icons
import logo from '../assets/logo.svg';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'HOME', type: 'router', to: '/' }, // Navigates to index page
    { name: 'COLLECTION', type: 'scroll', to: 'roadmap' }, // Scrolls to roadmap section
    { name: 'SERVICES', type: 'router', to: '/services' }, // Navigates to services page
    { name: 'ABOUT US', type: 'scroll', to: 'about' }, // Scrolls to about section
    { name: 'ROAD MAP', type: 'scroll', to: 'roadmap' }, // Scrolls to roadmap section
  ];

  return (
    <nav className="w-full absolute top-0 left-0 right-0 z-50 text-[16px] py-4 text-white transition-all duration-300 bg-transparent  bg-[#052035] md:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer">
            <img src={logo} className="lg:w-30 w-[100px]" alt="Ultrachand Crypto" />
          </div>
          <div className="hidden jack text-[16px] md:block">
            <div className="ml-10 flex space-x-4">
              {navItems.map((item) =>
                item.type === 'router' ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-white hover:text-white px-3 py-2 rounded-md text-[20px] cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="text-white hover:text-white px-3 py-2 rounded-md text-[20px] font-light cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                )
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[#86C248] hover:bg-red-600 transition-all hover:scale-105 duration-300 text-white font-bold py-2 px-4 rounded-full">
              Connect Wallet
            </button>
            <FaFacebookF className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <FaTwitter className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <FaTelegramPlane className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden ">
          <div className="px-2 pt-2 pb-3 jack flex flex-col items-center justify-center space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.type === 'router' ? (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ) : (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                  onClick={toggleMenu}
                >
                  {item.name}
                </ScrollLink>
              )
            )}
            <button className="mt-4 bg-[#86C248] transition-all font-sans hover:scale-105 duration-300 hover:bg-red-600 text-white  py-2 px-4 rounded-full">
              Connect Wallet
            </button>
            <div className="flex space-x-4 mt-4">
              <FaFacebookF className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
              <FaTwitter className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
              <FaTelegramPlane className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
