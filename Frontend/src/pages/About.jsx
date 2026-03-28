import React from 'react';
import { motion } from 'framer-motion';
import { Info, Globe, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="page-container" style={{ padding: '120px 2rem 60px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '800px', width: '100%' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <Info color="var(--accent-glow)" />
          <span style={{ color: 'var(--accent-glow)', fontWeight: 600, letterSpacing: '2px' }}>OUR MISSION</span>
        </div>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>DIVE INTO KNOWLEDGE</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <section className="glass" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <Globe color="var(--accent-glow)" />
              <h3 style={{ fontSize: '1.5rem' }}>Global Impact</h3>
            </div>
            <p>
              The ocean covers 71% of the Earth's surface and contains 97% of the planet's water. 
              It regulates our climate and provides more than half of the world's oxygen.
            </p>
          </section>

          <section className="glass" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <Shield color="var(--accent-glow)" />
              <h3 style={{ fontSize: '1.5rem' }}>Conservation</h3>
            </div>
            <p>
              Through immersive storytelling, we hope to raise awareness about the fragile beauty 
              of the deep sea and the importance of marine protection.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
