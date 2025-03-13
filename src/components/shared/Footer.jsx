// import React from "react";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-[#1b1b1b] text-white py-6 pl-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-[#f5b754]">R</span>ENAX
            </h2>
            <p className="mt-5 text-[#999]">
              Rent a car imperdiet sapien porttito the bibenum ellentesue the
              commodo erat nesuen.
            </p>
            <div className="flex space-x-4 mt-5">
              <a href="#" aria-label="Facebook" className="border border-[#f5b754] p-3 rounded-full hover:bg-[#f5b754] hover:text-black">
                <CiFacebook />
              </a>
              <a href="#" aria-label="Twitter" className="border border-[#f5b754] p-3 rounded-full hover:bg-[#f5b754] hover:text-black">
                <CiTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="border border-[#f5b754] p-3 rounded-full hover:bg-[#f5b754] hover:text-black">
              <RiLinkedinLine />
              </a>
              <a href="#" aria-label="LinkedIn" className="border border-[#f5b754] p-3 rounded-full hover:bg-[#f5b754] hover:text-black">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <ul className="mt-5 space-y-2">
              <li>
                <a href="/" className="hover:text-[#f5b754] text-[#999] font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#f5b754] text-[#999] font-semibold">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#f5b754] text-[#999] font-semibold">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#f5b754] text-[#999] font-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Subscribe</h3>
            <p className="mt-5 text-[#999]">
              Want to be notified about our services. Just sign up and we'll
              send you a notification by email.
            </p>
            <div class="relative flex items-center mt-5 border border-[#f5b754] rounded-full px-4 py-2 w-[300px] bg-transparent">
              <input
                type="email"
                placeholder="Email Address"
                class="bg-transparent text-white outline-none w-full placeholder-[#999]"
              />

              <button class="bg-[#f5b754] hover:bg-[#999] cursor-pointer text-black w-12 h-10 rounded-full ml-2 flex items-center justify-center">
                <span class="inline-block text-sm -rotate-45">➜</span>
              </button>
            </div>
          </div>
        </div>

        <div className="text-left text-[12px] mt-10 mx-10 border-t border-[#222222] pt-4">
          <p className="mt-8 text-[#999]">© {new Date().getFullYear()} RENAX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
