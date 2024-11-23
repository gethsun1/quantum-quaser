import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import tgQrCode from '../assets/tgqr.png'; 
const Footer = () => (
  <footer className="dynamic-bg text-[#F9FAFB] py-6 flex flex-col items-center space-y-6">
    {/* Footer Text */}
    <p>© 2024 Gethsun Misesi. All Rights Reserved.</p>

    {/* Social Media Icons */}
    <div className="flex space-x-6">
      <a
        href="https://github.com/gethsun1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="text-2xl hover:text-[#FFC107]" />
      </a>
      <a
        href="https://ke.linkedin.com/in/gethsunmisesi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-2xl hover:text-[#FFC107]" />
      </a>
      <a
        href="https://x.com/Gethsun1?t=yq_uAnKVR9MZR_IxsXCoGw&s=09"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter className="text-2xl hover:text-[#FFC107]" />
      </a>
    </div>

    {/* Contact Information */}
    <div className="text-center mt-4">
      <p>
        Contact:{" "}
        <a
          href="mailto:gethsun09@gmail.com"
          className="text-[#007BFF] font-bold hover:text-[#FFC107]"
        >
          gethsun09@gmail.com
        </a>
      </p>
      <p>
        Wallet:{" "}
        <span className="text-[#007BFF] font-bold hover:text-[#FFC107]">
          0xf672e2b5b3072b7ee79e3bddcf5907032c8d0c74
        </span>
      </p>
    </div>

    {/* Telegram QR Code */}
    <div className="mt-4 text-center">
      <p className="mb-2 text-lg font-medium">Join me on Telegram:</p>
      <a 
        href="https://t.me/gethsun" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img
          src={tgQrCode} 
          alt="Telegram QR Code"
          className="w-32 h-32 hover:opacity-90 rounded-lg"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
