import React from 'react';

const Experience = () => (
  <section id="experience" className="experience-section">
    <h2>Blockchain Experience</h2>
    <p>
      I have a proven track record of deploying robust smart contracts and building scalable decentralized applications. Explore my work across multiple blockchain platforms below:
    </p>
    <div className="experience-grid">
      <a href="https://sepolia.etherscan.io" target="_blank" rel="noopener noreferrer" className="explorer-button">
        ETH Sepolia
      </a>
      <a href="https://optimistic.etherscan.io" target="_blank" rel="noopener noreferrer" className="explorer-button">
        Optimism
      </a>
      <a href="https://polygonscan.com" target="_blank" rel="noopener noreferrer" className="explorer-button">
        Polygon
      </a>
      <a href="https://qblockchainexplorer.com" target="_blank" rel="noopener noreferrer" className="explorer-button">
        QBlockchain
      </a>
      <a href="https://explorer.lisk.com" target="_blank" rel="noopener noreferrer" className="explorer-button">
        Lisk Sepolia
      </a>
      <a href="https://arbiscan.io" target="_blank" rel="noopener noreferrer" className="explorer-button">
        Arbitrum
      </a>
    </div>
  </section>
);

export default Experience;
