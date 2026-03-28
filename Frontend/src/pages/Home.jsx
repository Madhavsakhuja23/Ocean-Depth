import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="page-container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.8 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', zIndex: 10 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: '400px', 
            height: '400px', 
            background: 'radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, transparent 70%)',
            zIndex: -1
          }}
        />

        <motion.h1 
          className="glow-text"
          style={{ fontSize: '6rem', marginBottom: '1rem', lineHeight: 1 }}
        >
          DIVE INTO <br/> THE UNKNOWN
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: '1.2rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '4rem' }}
        >
          From sunlight to the abyss
        </motion.p>
        
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 210, 255, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('sunlight').scrollIntoView({ behavior: 'smooth' })} 
          className="btn-primary" 
          style={{ fontSize: '1rem', padding: '20px 50px', border: 'none', letterSpacing: '2px', textTransform: 'uppercase' }}
        >
          Start Journey
        </motion.button>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '3rem', opacity: 0.5 }}
      >
        <ChevronDown size={32} color="#fff" />
      </motion.div>
    </div>
  );
};

export default Home;
