import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo / Brand */}
          <div className="text-xl font-bold text-white">UniRentals</div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a href="#" className="hover:text-white font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-bold">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-bold">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-bold">
                Contact
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} UniRentals. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
