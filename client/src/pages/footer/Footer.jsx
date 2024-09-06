import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    // bg-[#27374D]
    <footer className="bg-[#1c2b41] text-white py-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
            <p className="mb-4">Feel free to reach out to me through any of the following channels:</p>
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-xl font-bold mb-2 text-center">Follow Me</h2>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#000000] hover:text-gray-950">
                <FaXTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://github.com/Roy-Ankush" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Ankush Roy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
