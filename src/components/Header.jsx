import React from 'react';
import gethsun from '../assets/gethsun.jpeg';


const Header = () => (
  <header className="w-full fixed top-0 left-0 z-10">
    <div className="dynamic-bg text-[#F9FAFB] py-4 px-8 flex justify-between items-center">
      {/* Personal Avatar */}
      <div className="flex items-center space-x-4">
      <img src={gethsun} alt="Gethsun" className="header-image" />
        <h1 className="text-xl font-bold">Gethsun Misesi</h1>
      </div>

      {/* Navigation Links */}
      <nav className="space-x-6">
        <a href="#about" className="text-[#007BFF] font-bold hover:text-[#FFC107]">About</a>
        <a href="#experience" className="text-[#007BFF] font-bold hover:text-[#FFC107]">Experience</a>
        <a href="#milestones" className="text-[#007BFF] font-bold hover:text-[#FFC107]">Milestones</a>
        <a 
        href="https://wa.me/254721913191" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[#007BFF] font-bold hover:text-[#FFC107]"
      >
        Contact
      </a>

      </nav>
    </div>
  </header>
);

export default Header;
