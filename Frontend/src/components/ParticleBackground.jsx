import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = ({ count = 30, speed = 1, color = 'rgba(255, 255, 255, 0.1)' }) => {
  const particles = Array.from({ length: count });

  return (
    <div 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        overflow: 'hidden', 
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      {particles.map((_, i) => {
        const size = Math.random() * 10 + 2;
        const left = Math.random() * 100;
        const duration = (Math.random() * 10 + 10) / speed;
        const delay = Math.random() * 20;

        return (
          <motion.div
            key={i}
            className="particle"
            initial={{ y: '110%', x: `${left}%`, opacity: 0 }}
            animate={{ 
              y: '-20%',
              opacity: [0, 0.5, 0.5, 0],
              x: [`${left}%`, `${left + (Math.random() * 5 - 2.5)}%`]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear"
            }}
            style={{
              width: size,
              height: size,
              background: color,
              boxShadow: `0 0 10px ${color}`
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleBackground;
