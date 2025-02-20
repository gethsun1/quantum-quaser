import React from 'react';
import Slider from 'react-slick';
import GlowingTitle from '../components/GlowingTitle';
import thirdWebLogo from '../assets/thirdweb.svg';
import walletConnectLogo from '../assets/walletconnect.png';
import metamaskLogo from '../assets/MetaMask.svg';
import etherscanLogo from '../assets/etherscan.png';
import chainlinkLogo from '../assets/Chainlink.svg';
import alchemyLogo from '../assets/alchemy.svg';
import infuraLogo from '../assets/infura.svg';
import hardhatLogo from '../assets/hardhat.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TechnologiesSection = () => {
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
    <section className="bg-[#F3F4F6] py-10 px-6">
       <GlowingTitle text="Technologies I Use" />
      <Slider {...settings} className="flex items-center">
        <div className="p-4">
          <img src={thirdWebLogo} alt="Third Web" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={walletConnectLogo} alt="Wallet Connect" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={metamaskLogo} alt="Metamask" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={etherscanLogo} alt="Etherscan" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={chainlinkLogo} alt="Chainlink" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={alchemyLogo} alt="Alchemy" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={infuraLogo} alt="Infura" className="h-16 mx-auto" />
        </div>
        <div className="p-4">
          <img src={hardhatLogo} alt="Hardhat" className="h-16 mx-auto" />
        </div>
      </Slider>
    </section>
  );
};

export default TechnologiesSection;
