import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="dynamic-bg text-[#F9FAFB] py-6 flex flex-col items-center space-y-4">
    {/* Footer Text */}
    <p>© 2024 Gethsun Misesi  All Rights Reserved.</p>

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
    <p className="mt-4">Contact: gethsun09@gmail.com | Wallet: 0xf672e2b5b3072b7ee79e3bddcf5907032c8d0c74</p>
  </footer>
);

export default Footer;
