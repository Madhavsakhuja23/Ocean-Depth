import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, EyeOff } from 'lucide-react';

const MidnightZone = () => {
  return (
    <div className="page-container" style={{ padding: '120px 2rem' }}>
      <div style={{ maxWidth: '1100px', width: '100%' }}>
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ amount: 0.3 }}
           transition={{ duration: 1.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <EyeOff color="#ff00ff" />
            <span style={{ color: '#ff00ff', fontWeight: 600, letterSpacing: '3px' }}>ZONE 03: MIDNIGHT</span>
          </div>
          <h2 style={{ fontSize: '4.5rem', marginBottom: '2rem' }}>ETERNAL NIGHT</h2>
          <p style={{ fontSize: '1.3rem', maxWidth: '600px', marginBottom: '5rem', color: 'rgba(255,255,255,0.5)' }}>
            Welcome to the Bathypelagic zone. Here, the pressure is immense, the temperature is freezing, and the darkness is absolute.
          </p>
        </motion.div>

        <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ textAlign: 'center' }}
          >
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 5, repeat: Infinity }}
               style={{ fontSize: '10rem', filter: 'brightness(0.2) drop-shadow(0 0 20px rgba(255,0,255,0.1))' }}
             >
               🦈
             </motion.div>
             <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 0.3 }}
               transition={{ delay: 1 }}
               style={{ marginTop: '2rem', letterSpacing: '5px', fontSize: '0.8rem' }}
             >
               UNSEEN HUNTERS LURK
             </motion.p>
          </motion.div>
          
          {/* Subtle particle streaks in the dark */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{ 
                x: [-100, window.innerWidth],
                opacity: [0, 0.1, 0]
              }}
              transition={{ 
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 10
              }}
              style={{
                top: `${20 + i * 15}%`,
                width: '100px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
              }}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <button 
            onClick={() => document.getElementById('abyss').scrollIntoView({ behavior: 'smooth' })} 
            className="btn-primary" 
            style={{ 
              background: '#0a0a0a', 
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px',
              padding: '15px 40px',
              cursor: 'pointer'
            }}
          >
            The Final Descent <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default MidnightZone;
