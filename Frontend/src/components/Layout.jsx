import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import DepthMeter from './DepthMeter';
import ParticleBackground from './ParticleBackground';
import { motion, useTransform, useSpring, useScroll, useVelocity } from 'framer-motion';

const Layout = ({ children }) => {
  const { scrollYProgress, scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Map scroll progress (0-1) to background colors
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      '#4facfe', // Surface
      '#005bea', // Sunlight
      '#1e3c72', // Twilight
      '#020024', // Midnight
      '#000000', // Abyss
      '#050505'  // About
    ]
  );

  // Spotlight visibility: Only active after 50% scroll (entering Midnight)
  const spotlightOpacity = useTransform(scrollYProgress, [0.5, 0.65, 1], [0, 1, 1]);
  
  // Liquid Scroll Effect: subtle skew based on velocity
  const skew = useTransform(scrollVelocity, [-2000, 2000], [-2, 2]);
  const smoothSkew = useSpring(skew, { stiffness: 100, damping: 30 });

  return (
    <motion.div style={{ position: 'relative', minHeight: '100vh', width: '100%', backgroundColor }}>
      <Navbar />
      <DepthMeter scrollYProgress={scrollYProgress} />
      <ParticleBackground count={40} speed={1} />
      
      {/* Global Spotlight Effect (Active in deep zones) */}
      <motion.div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          pointerEvents: 'none',
          opacity: spotlightOpacity,
          background: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,0.98) 100%)`
        }}
      />

      <motion.main 
        style={{ 
          position: 'relative', 
          zIndex: 5,
          skewY: smoothSkew // Liquid effect
        }}
      >
        {children}
      </motion.main>

      {/* Dynamic Background Overlay */}
      <motion.div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          background: backgroundColor
        }}
      />
    </motion.div>
  );
};

export default Layout;
