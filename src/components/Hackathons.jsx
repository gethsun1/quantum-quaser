import React from 'react';
import scalingweb3 from '../assets/scalingweb3.avif';
import sovereigncast from '../assets/sovereigncast.png';
const Hackathons = () => (
  <section id="hackathons" className="hackathons-section">
    <h2>Hackathon Accolades</h2>
    <p>
      I have participated in several hackathons, earning recognition for my innovative Web3 and blockchain projects. Below are some of the hackathons I've been a part of, including detailed descriptions of the winning projects and the rewards earned.
    </p>

    <div className="hackathon-card">
      <h3>Scaling Web3 Hackathon Winner by Encode Club</h3>
      <p>
        <strong>Fedha.io Dapp</strong>: Fedha.io is your gateway to a world of convenient and rewarding crypto experiences. Built on ultra-low gas fee EVM compatible smart rollups, Fedha.io seamlessly connects to Orderly Network's Omnichain order-book, providing unified liquidity across blockchains without the need for bridges. With features like Mpesa-Crypto swaps, Play & Earn Arcade, and Be Your Own Bank, it empowers users to easily manage and earn from crypto assets.
      </p>
      <div className="hackathon-nft">
        <img src={scalingweb3} alt="Scaling Web3 Hackathon NFT" className="nft-image" />
        <a href="https://opensea.io/assets/matic/0xdBf2138593aeC61d55d86E80b8ed86D7b9ba51F5/12094" className="nft-link" target="_blank" rel="noopener noreferrer">
          <button className="view-nft-button">View NFT on OpenSea</button>
        </a>
      </div>
    </div>

    <div className="hackathon-card">
      <h3>DoraHacks Winner</h3>
      <p>
        <strong>SovereignCast: Secure, Transparent, and Accessible Cross-Chain Voting</strong>: SovereignCast aims to revolutionize elections by providing a secure, transparent, and accessible cross-chain voting system powered by Secret Network's blockchain. This innovative solution ensures voter anonymity, reduces fraud, and guarantees a tamper-proof voting process across multiple blockchains.
      </p>
      <div className="hackathon-nft">
        <img src={sovereigncast} alt="DoraHacks Winner NFT" className="nft-image" />
        <a href="https://opensea.io/assets/matic/0x1234567890abcdef" className="nft-link" target="_blank" rel="noopener noreferrer">
          <button className="view-nft-button">View NFT on OpenSea</button>
        </a>
      </div>
    </div>

    <div className="hackathon-card">
      <h3>Multiple Wins at EthGlobal Events</h3>
      <p>
        I've participated in and won various EthGlobal hackathons, building innovative solutions that bridge the gap between traditional finance and blockchain. These projects focus on decentralization, privacy, and community-driven governance models.
      </p>
    </div>
  </section>
);

export default Hackathons;
