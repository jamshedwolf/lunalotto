import { FaFacebookF, FaPinterestP, FaDiscord, FaYoutube, FaTiktok } from 'react-icons/fa'
import React from 'react'
import f1 from "../assets/f1.svg"
import f2 from "../assets/f2.svg"
import f3 from "../assets/f3.svg"
import f4 from "../assets/f4.svg"
import f5 from "../assets/f5.svg"
import logo from "../assets/logo.svg"

export default function Footer() {
  return (
    <footer className="relative backdrop-blur-lg bg-white/5 text-white pt-8  ">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-7  gap-8">
          <div className="col-span-1 text-lg mx- lg:mx-0 md:col-span-3">
            <img src={logo} alt="Lunachano Crypto Logo"  className="mb-4 lg:w-30 w-[100px] " />
            <p className=" mb-4">
              The largest NFT Marketplace. Unique and <br/>authentic digital creations. Made possible <br/> by blockchain technology.
            </p>
            <div className="flex space-x-4">
              <img src={f1} alt="" className="w-10 transform hover:scale-110 transition-transform duration-300" />
              <img src={f2} alt="" className="w-10 transform hover:scale-110 transition-transform duration-300" />
              <img src={f3} alt="" className="w-10 transform hover:scale-110 transition-transform duration-300" />
              <img src={f4} alt="" className="w-10 transform hover:scale-110 transition-transform duration-300" />
              <img src={f5} alt="" className="w-10 transform hover:scale-110 transition-transform duration-300" />
             
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[20px] mb-2">My Account</h3>
            <ul className="space-y-2 text-    ">
              <li>Profile</li>
              <li>Collections</li>
              <li>Favourites</li>
              <li>Settings</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[20px] mb-2">Marketplace</h3>
            <ul className="space-y-2 ">
              <li>Explore</li>
              <li>All NFT</li>
              <li>Collectible</li>
              <li>All World</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[20px] mb-2">Resources</h3>
            <ul className="space-y-2 text-    ">
              <li>Help Center</li>
              <li>Partners</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className='' >
            <h3 className="font-semibold text-[20px] mb-2">Company</h3>
            <ul className="space-y-2 text-    ">
              <li>About Us</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Rankings</li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="mt-8 py-8 backdrop-blur-[150px] px-8 border-green-800 w-full flex flex-col md:flex-row justify-between items-center">
          <p className=" mb-4 md:mb-0 text-center">2024© Copyright Lunalotto. All Rights Reserved</p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:underline text-center">Terms Of Service</a>
            <a href="#" className="hover:underline text-center">Privacy Policy</a>
          </div>
        </div>
   
    </footer>
  )
}
