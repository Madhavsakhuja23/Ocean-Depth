import React from 'react';
import { motion, useTransform } from 'framer-motion';

const DepthMeter = ({ scrollYProgress }) => {
  const maxDepth = 11000;
  
  // Map scroll progress to depth value
  const depthValue = useTransform(scrollYProgress, [0, 1], [0, maxDepth]);
  // Map scroll progress to visual percentage for the progress bar
  const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="depth-meter-container" style={{
      position: 'fixed',
      right: '40px',
      top: '50%',
      transform: 'translateY(-50%)',
      height: '300px',
      width: '4px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '2px',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }}>
      <motion.div 
        className="depth-progress"
        style={{
          width: '100%',
          height: useTransform(percentage, p => `${p}%`),
          background: 'var(--accent-glow)',
          boxShadow: '0 0 15px var(--accent-glow)',
          borderRadius: '2px'
        }}
      />
      
      <motion.div
        className="depth-indicator"
        style={{
          position: 'absolute',
          right: '-12px',
          y: useTransform(percentage, p => (p * 3)), // 300px total height
          background: 'var(--accent-glow)',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '10px',
          fontWeight: 'bold',
          color: '#000',
          whiteSpace: 'nowrap'
        }}
      >
        <motion.span>{useTransform(depthValue, v => Math.round(v))}</motion.span>m
      </motion.div>

      {/* Depth Labels */}
      <div style={{ 
        position: 'absolute', left: '-70px', top: '0', fontSize: '10px', 
        color: useTransform(scrollYProgress, [0, 0.1], ['var(--accent-glow)', 'rgba(255,255,255,0.4)']),
        fontWeight: 700,
        transition: 'all 0.3s ease'
      }}>SURFACE</div>
      
      <div style={{ 
        position: 'absolute', left: '-70px', top: '20%', fontSize: '10px', 
        color: useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], ['rgba(255,255,255,0.4)', 'var(--accent-glow)', 'var(--accent-glow)', 'rgba(255,255,255,0.4)']),
        transition: 'all 0.3s ease'
      }}>SUNLIGHT</div>
      
      <div style={{ 
        position: 'absolute', left: '-70px', top: '40%', fontSize: '10px', 
        color: useTransform(scrollYProgress, [0.35, 0.4, 0.55, 0.6], ['rgba(255,255,255,0.4)', 'var(--accent-glow)', 'var(--accent-glow)', 'rgba(255,255,255,0.4)']),
        transition: 'all 0.3s ease'
      }}>TWILIGHT</div>
      
      <div style={{ 
        position: 'absolute', left: '-70px', top: '60%', fontSize: '10px', 
        color: useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], ['rgba(255,255,255,0.4)', 'var(--accent-glow)', 'var(--accent-glow)', 'rgba(255,255,255,0.4)']),
        transition: 'all 0.3s ease'
      }}>MIDNIGHT</div>
      
      <div style={{ 
        position: 'absolute', left: '-70px', top: '100%', fontSize: '10px', 
        color: useTransform(scrollYProgress, [0.85, 0.9], ['rgba(255,255,255,0.4)', 'var(--accent-glow)']),
        transition: 'all 0.3s ease'
      }}>ABYSS</div>
    </div>
  );
};

export default DepthMeter;
