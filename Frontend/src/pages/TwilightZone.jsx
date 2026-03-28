import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const TwilightZone = () => {
  return (
    <div className="page-container" style={{ padding: '120px 2rem' }}>
      <div style={{ maxWidth: '1100px', width: '100%' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ amount: 0.3 }}
           transition={{ duration: 1.2 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Zap color="#39ff14" />
            <span style={{ color: '#39ff14', fontWeight: 600, letterSpacing: '3px' }}>ZONE 02: TWILIGHT</span>
          </div>
          <h2 style={{ fontSize: '4.5rem', marginBottom: '2rem' }}>THE GLOWING ABYSS</h2>
          <p style={{ fontSize: '1.3rem', maxWidth: '600px', marginBottom: '5rem' }}>
            Between 200m and 1000m, sunlight rapidly decays. In this eternal dusk, life creates its own brilliance.
          </p>
        </motion.div>

        <div className="glass" style={{
          padding: '6rem 4rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '6rem',
          borderRadius: '32px'
        }}>
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(57, 255, 20, 0.15) 0%, transparent 70%)',
              zIndex: 0
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}
            >
              Bioluminescence
            </motion.h3>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)' }}
            >
              Creatures use chemical reactions to produce light—luring prey, finding mates, and hiding from predators in the eerie blue twilight.
            </motion.p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', fontSize: '4rem' }}>
              {['🪼', '🐙', '🐠'].map((emoji, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, Math.random() * -20 - 10, 0],
                    rotate: [0, Math.random() * 10 - 5, 0]
                  }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           style={{ textAlign: 'center' }}
        >
          <button 
            onClick={() => document.getElementById('midnight').scrollIntoView({ behavior: 'smooth' })} 
            className="btn-primary" 
            style={{ 
              background: 'var(--accent-midnight)', 
              color: '#fff',
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px',
              border: 'none',
              padding: '15px 40px',
              boxShadow: '0 0 30px rgba(255, 0, 255, 0.2)'
            }}
          >
            Descend Further <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TwilightZone;
