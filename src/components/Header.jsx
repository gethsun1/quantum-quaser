import React from 'react';

const Header = () => (
  <header>
    <div className="dynamic-bg text-[#F9FAFB] py-4 px-8 flex justify-between items-center">
  {/* Personal Avatar */}
  <div className="flex items-center space-x-4">
    <img
      src="../assets/gethsun.jpeg"
      alt="Gethsun"
      className="w-10 h-10 rounded-full border-2 border-[#F9FAFB]"
    />
    <h1 className="text-xl font-bold">Gethsun Misesi</h1>
  </div>

  {/* Navigation Links */}
  <nav className="space-x-6">
    <a href="#about" className="hover:text-[#FFC107]">About</a>
    <a href="#experience" className="hover:text-[#FFC107]">Experience</a>
    <a href="#contact" className="hover:text-[#FFC107]">Contact</a>
  </nav>
  </div>
  </header>
);

export default Header;
