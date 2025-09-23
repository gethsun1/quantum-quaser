import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Hackathons from './components/Hackathons';
import AIProficiency from './components/AIProficiency';
import Footer from './components/Footer';
import TechnologiesSection from './components/TechnologiesSection';
import BlockchainsSection from './components/BlockchainsSection';  
import Milestones from './components/Milestones';
import BackToTop from './components/BackToTop';
import RevealOnScroll from './components/RevealOnScroll';

const App = () => (
  <div>
    <Header />
    <RevealOnScroll><About /></RevealOnScroll>
    <RevealOnScroll><Experience /></RevealOnScroll>
    <RevealOnScroll><Milestones /></RevealOnScroll>
    <RevealOnScroll><Hackathons /></RevealOnScroll>
    <RevealOnScroll><AIProficiency /></RevealOnScroll>
    <RevealOnScroll><TechnologiesSection /></RevealOnScroll>
    <RevealOnScroll><BlockchainsSection /></RevealOnScroll>
    <Footer />
    <BackToTop />
  </div>
);

export default App;
