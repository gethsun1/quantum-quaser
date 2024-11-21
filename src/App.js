import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Hackathons from './components/Hackathons';
import AIProficiency from './components/AIProficiency';
import Footer from './components/Footer';
import TechnologiesSection from './components/TechnologiesSection';

const App = () => (
  <div>
    <Header />
    <About />
    <Experience />
    <Hackathons />
    <AIProficiency />
    <TechnologiesSection />
    <Footer />
  </div>
);

export default App;