import React from 'react';
import Slider from 'react-slick';

// Import blockchain logos
import ethereumLogo from '../assets/ethereum.svg';
import solanaLogo from '../assets/solana.png';
import polygonLogo from '../assets/polygon.png';
import optimismLogo from '../assets/optimism.png';
import baseLogo from '../assets/Base.png';
import avalancheLogo from '../assets/avalanche.png';
import bscLogo from '../assets/bsc.png';
import arbitrumLogo from '../assets/arbitrum.png';
import suiLogo from '../assets/sui.png';
import aptosLogo from '../assets/aptos.png';
import lisk from '../assets/lisk.png';
import q from '../assets/q.png';

// Import Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlockchainsSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },  
      },
    ],
  };

  return (
    <section className="bg-[#E5E7EB] py-10 px-6">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Blockchains I Have Built On
      </h2>
      <Slider {...settings} className="flex items-center">
        <div className="p-4">
          <img src={ethereumLogo} alt="Ethereum" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={solanaLogo} alt="Solana" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={polygonLogo} alt="Polygon" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={optimismLogo} alt="Optimism" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={baseLogo} alt="Base" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={avalancheLogo} alt="Avalanche" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={bscLogo} alt="Binance Smart Chain" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={arbitrumLogo} alt="Arbitrum" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={suiLogo} alt="Sui Network" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={aptosLogo} alt="Aptos" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={lisk} alt="lisk" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={q} alt="q" className="h-16 mx-auto" />
        </div>
      </Slider>
    </section>
  );
};

export default BlockchainsSection;
