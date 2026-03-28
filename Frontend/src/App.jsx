import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import SunlightZone from './pages/SunlightZone';
import TwilightZone from './pages/TwilightZone';
import MidnightZone from './pages/MidnightZone';
import AbyssZone from './pages/AbyssZone';
import About from './pages/About';

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  return (
    <Layout scrollYProgress={scrollYProgress}>
      <div id="home">
        <Home />
      </div>
      <div id="sunlight">
        <SunlightZone />
      </div>
      <div id="twilight">
        <TwilightZone />
      </div>
      <div id="midnight">
        <MidnightZone />
      </div>
      <div id="abyss">
        <AbyssZone />
      </div>
      <div id="about">
        <About />
      </div>
    </Layout>
  );
}

export default App;
