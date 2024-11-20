import React from 'react';
import gethsunI from '../assets/gethsunI.jpeg';

const About = () => (
  <section id="about" className="about-section">
    <h2>About Me</h2>
    <div className="about-content">
      <img src={gethsunI} alt="Gethsun" className="about-image" />
      <div className="about-text">
        <p>
          Hello, I'm Gethsun, a passionate Blockchain developer with over five years of experience 
          in creating innovative solutions in the Web3 space. My expertise includes:
        </p>
        <ul>
          <li>Deploying secure and efficient smart contracts on EVM and non-EVM platforms.</li>
          <li>Minting and managing NFTs with advanced metadata customization.</li>
          <li>Integrating AI-driven tools into decentralized applications (DApps) to enhance functionality.</li>
          <li>Building full-stack solutions, leveraging frameworks like React, Vue.js, and Django.</li>
          <li>Contributing to decentralized finance (DeFi) projects and tokenization of assets.</li>
        </ul>
        <p>
          With a strong focus on innovation and collaboration, I aim to bridge the gap between 
          emerging technologies and real-world applications. Let’s transform industries together!
        </p>
      </div>
    </div>
  </section>
);

export default About;
  