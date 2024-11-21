import React from 'react';

const Experience = () => (
  <section id="experience" className="experience-section">
    <h2>Blockchain Experience</h2>
    <p>
      I have a proven track record of deploying robust smart contracts and building scalable decentralized applications. Explore my work across multiple blockchain platforms below:
    </p>
    <div className="experience-grid">
      <a href="https://sepolia.etherscan.io/address/0xf672e2b5b3072b7ee79e3bddcf5907032c8d0c74" target="_blank" rel="noopener noreferrer" className="explorer-button">
        ETH Sepolia
      </a>
      <a href="https://optimistic.etherscan.io/address/0xf672e2b5b3072b7ee79e3bddcf5907032c8d0c74" target="_blank" rel="noopener noreferrer" className="explorer-button">
        Optimism
      </a>
      <a href="https://polygonscan.com/address/0xf672e2b5b3072b7ee79e3bddcf5907032c8d0c74" target="_blank" rel="noopener noreferrer" className="explorer-button">
        Polygon
      </a>
      <a href="https://explorer.q.org/address/0x3535448e2AAa9EfB9F575F292C904d383EDa9352" target="_blank" rel="noopener noreferrer" className="explorer-button">
        QBlockchain
      </a>
      <a href="https://sepolia-blockscout.lisk.com/address/0xf672e2b5b3072b7eE79e3BDdcF5907032c8D0C74" target="_blank" rel="noopener noreferrer" className="explorer-button">
        Lisk Sepolia
      </a>
      <a href="https://arbiscan.io/address/0xf672e2b5b3072b7ee79e3bddcf5907032c8d0c74" target="_blank" rel="noopener noreferrer" className="explorer-button">
        Arbitrum
      </a>
    </div>
  </section>
);

export default Experience;
