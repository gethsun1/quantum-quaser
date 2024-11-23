import React from 'react';
import { ReactTyped } from 'react-typed';

const GlowingTitle = ({ text }) => (
  <h2 className="text-4xl font-bold text-center text-[#007BFF] glow-effect my-8">
    <ReactTyped strings={[text]} typeSpeed={200} backSpeed={100} loop />
  </h2>
);

export default GlowingTitle;
