import React from 'react';
import web3ai from '../assets/web3ai.avif';

const AIProficiency = () => (
  <section id="ai" className="section-card">
    <h2>AI Proficiency</h2>
    <p>
      With extensive experience in AI and blockchain integration, I have developed advanced agentic AI systems that are tailored to enhance blockchain-based solutions. These systems leverage the power of Retrieval-Augmented Generation (RAG) and multimodal search to facilitate intelligent decision-making and streamlined workflows in decentralized applications (dApps). 
    </p>
    <p>
      My proficiency extends across a wide range of AI methodologies, from fine-tuning models to deploying them efficiently in real-world applications. I specialize in Python-based AI workflows and model optimization, ensuring high performance and scalability for blockchain projects. By integrating AI with blockchain technologies, I have created solutions that enhance security, transparency, and efficiency.
    </p>
    <p>
      I have also worked on deploying AI agents to manage complex tasks, automating decision-making processes in decentralized finance (DeFi) platforms, enhancing user experience, and driving operational efficiency. These agentic AI systems are designed to seamlessly interact with blockchain protocols, enabling advanced functionalities such as automated governance, predictive analytics, and real-time decision-making across various use cases.
    </p>

    <div className="nft-container">
      <img 
        src={web3ai} 
        alt="NFT Awarded for AI Proficiency" 
        className="nft-image"
      />
      <a 
        href="https://opensea.io/assets/matic/0xdBf2138593aeC61d55d86E80b8ed86D7b9ba51F5/11911" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="nft-button"
      >
        Check NFT on OpenSea
      </a>
    </div>
    
    <ul>
      <li>Built agentic AI systems integrating RAG and multimodal search to optimize blockchain workflows.</li>
      <li>Proficient in Python-based AI workflows, model tuning, and optimization to enhance blockchain solutions.</li>
      <li>Expertise in deploying AI for automated decision-making, governance, and security in blockchain applications.</li>
    </ul>
  </section>
);

export default AIProficiency;
