import React from 'react';
import GlowingTitle from '../components/GlowingTitle';
import nomaShot from '../assets/Nomatoken_Screenshot from 2025-09-23 20-41-10.pngScreenshot from 2025-09-23 20-41-51.png';
import coopShot from '../assets/BlockCoop_Screenshot from 2025-09-23 20-39-58.png';

const Milestones = () => (
  <section id="milestones" className="milestones-section">
    <GlowingTitle text="Mainnet Milestones" />
    <p className="milestones-intro">
      Recent achievements shipping production-grade Web3 products to mainnet.
    </p>
    <ul className="milestones-list">
      <li>Shipped NomaToken — on-chain token utilities and dashboard.</li>
      <li>Launched BlockCoop Shares — digital shares platform for co-ops.</li>
    </ul>

    <div className="milestone-grid">
      <a className="milestone-card milestone-card--link" href="https://nomatoken.com" target="_blank" rel="noopener noreferrer">
        <div className="preview-media">
          <img src={nomaShot} alt="NomaToken preview" className="preview-image" />
        </div>
        <div className="preview-content">
          <h3>NomaToken — Live on Mainnet</h3>
          <p>A token utility and discovery hub with real-time data.</p>
          <span className="milestone-button">Open Site</span>
        </div>
      </a>

      <a className="milestone-card milestone-card--link" href="https://shares.blockcoopsacco.com" target="_blank" rel="noopener noreferrer">
        <div className="preview-media">
          <img src={coopShot} alt="BlockCoop preview" className="preview-image" />
        </div>
        <div className="preview-content">
          <h3>BlockCoop Shares — Live on Mainnet</h3>
          <p>Secure, modern shares management for cooperatives.</p>
          <span className="milestone-button">Open App</span>
        </div>
      </a>
    </div>
  </section>
);

export default Milestones;


