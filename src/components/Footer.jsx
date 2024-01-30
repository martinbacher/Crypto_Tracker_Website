import React from "react";
import {
  FaFacebook,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-300 h-[3vh] md:h-[10vh] lg:h-[15vh] flex flex-col justify-center items-center text-white-smoke">
      <div className="flex justify-center items-center">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaFacebook size={40} color="#1877F2" />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaTiktok size={40} color="#000000" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaTwitter size={40} color="#1DA1F2" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaYoutube size={40} color="#FD0002" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={40} color="#EC0930" />
        </a>
      </div>
      <h3 className="mt-4 text-2xl">Crypto Tracker Social Media Accounts</h3>
    </div>
  );
};

export default Footer;
