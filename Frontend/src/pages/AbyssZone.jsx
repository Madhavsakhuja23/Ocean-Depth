import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, Heart } from 'lucide-react';

const AbyssZone = () => {
  return (
    <div className="page-container" style={{ background: '#000' }}>
      <div style={{ textAlign: 'center', zIndex: 10, maxWidth: '900px' }}>
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ 
             opacity: [0, 0.05, 0.02],
           }}
           transition={{ duration: 5 }}
           style={{ 
             position: 'absolute', 
             top: '50%', 
             left: '50%', 
             transform: 'translate(-50%, -50%)',
             fontSize: '25rem',
             filter: 'blur(30px)',
             pointerEvents: 'none',
             color: '#fff'
           }}
        >
          🦑
        </motion.div>

        <motion.h2 
           initial={{ opacity: 0, letterSpacing: '20px' }}
           whileInView={{ opacity: 0.4, letterSpacing: '8px' }}
           transition={{ duration: 2 }}
           style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', marginBottom: '5rem' }}
        >
          THE ABYSS (4,000m+)
        </motion.h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h1 style={{ fontSize: '4rem', marginBottom: '3rem', fontWeight: 200, fontStyle: 'italic', lineHeight: 1.3 }}>
            "We know more about the surface of the Moon <br/> than we do about the depths of our own Oceans."
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '12px', alignItems: 'center', color: 'rgba(255,255,255,0.3)', marginBottom: '5rem' }}
          >
            <Heart size={20} fill="rgba(255,255,255,0.1)" stroke="none" />
            <span style={{ fontSize: '1.1rem' }}>Protect our blue heart. Over 80% remains undiscovered.</span>
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="btn-primary" 
            style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 45px', textTransform: 'uppercase', letterSpacing: '2px' }}
          >
            <RefreshCcw size={20} /> Dive Again
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AbyssZone;
