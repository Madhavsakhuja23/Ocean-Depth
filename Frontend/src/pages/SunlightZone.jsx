import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Waves } from 'lucide-react';

const SunlightZone = () => {
  const cards = [
    { title: 'Coral Reefs', desc: 'The "rainforests of the sea" teeming with millions of species.', icon: '🪸' },
    { title: 'Dolphins', desc: 'Highly intelligent marine mammals that thrive near the surface.', icon: '🐬' },
    { title: 'Sea Turtles', desc: 'Ancient navigators traveling thousands of miles across oceans.', icon: '🐢' }
  ];

  return (
    <div className="page-container" style={{ padding: '120px 2rem' }}>
      <div style={{ maxWidth: '1100px', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 1 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Waves color="var(--accent-glow)" />
            <span style={{ color: 'var(--accent-glow)', fontWeight: 600, letterSpacing: '3px' }}>ZONE 01: SUNLIGHT</span>
          </div>
          <h2 style={{ fontSize: '4.5rem', marginBottom: '2rem', maxWidth: '800px' }}>BREATHING OCEAN LIFE</h2>
          <p style={{ fontSize: '1.3rem', maxWidth: '600px', marginBottom: '5rem', color: 'rgba(255,255,255,0.6)' }}>
            The sunlit upper layer of the ocean is home to 90% of marine species. Here, light is life.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '6rem' }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -15, background: 'rgba(255, 255, 255, 0.08)' }}
              style={{ padding: '3rem 2.5rem', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
              >
                {card.icon}
              </motion.div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{card.title}</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.8 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <button 
            onClick={() => document.getElementById('twilight').scrollIntoView({ behavior: 'smooth' })} 
            className="btn-primary" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', border: 'none', padding: '15px 40px' }}
          >
            Dive Deeper <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SunlightZone;
