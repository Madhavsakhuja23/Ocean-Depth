import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Info, Home, Volume2, VolumeX } from 'lucide-react';

const Navbar = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [audio] = useState(new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')); // Placeholder ambient
  const { scrollYProgress } = useScroll();
  const sections = ['home', 'sunlight', 'twilight', 'midnight', 'abyss', 'about'];
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (!isMuted) {
      audio.loop = true;
      audio.volume = 0.2;
      audio.play().catch(e => console.log("Audio play blocked by browser. Click anywhere to enable."));
    } else {
      audio.pause();
    }
  }, [isMuted, audio]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(id => {
        const el = document.getElementById(id);
        return el ? { id, top: el.offsetTop } : null;
      }).filter(Boolean);

      const current = offsets.reduce((prev, curr) => {
        return (window.scrollY + 200 >= curr.top) ? curr : prev;
      }, offsets[0]);

      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home', icon: <Home size={16} /> },
    { id: 'sunlight', label: 'Explore', icon: <Compass size={16} /> },
    { id: 'about', label: 'About', icon: <Info size={16} /> },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Dynamic glow color based on depth
  const glowColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ['#00d2ff', '#39ff14', '#ff00ff', '#ffffff']
  );

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="glass"
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '8px 8px 8px 24px',
        display: 'flex',
        gap: '48px',
        zIndex: 1000,
        alignItems: 'center',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2)',
        borderRadius: '100px'
      }}
    >
      <div 
        className="logo" 
        style={{ 
          fontWeight: 800, 
          fontSize: '1rem', 
          letterSpacing: '2px', 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }} 
        onClick={() => scrollTo('home')}
      >
        DIVE<span style={{ color: 'var(--accent-glow)' }}>.</span>DEPTHS
      </div>

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', position: 'relative' }}>
        {links.map((link) => (
          <button 
            key={link.id}
            onClick={() => scrollTo(link.id)}
            style={{ 
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: activeSection === link.id || (link.id === 'sunlight' && ['sunlight', 'twilight', 'midnight', 'abyss'].includes(activeSection)) 
                     ? '#fff' : 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              padding: '10px 20px',
              borderRadius: '100px',
              position: 'relative',
              zIndex: 2
            }}
          >
            {link.icon}
            {link.label}
          </button>
        ))}

        {/* Moving Background Pill */}
        <motion.div
          layoutId="active-pill"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '100px', // Fallback
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '100px',
            zIndex: 1
          }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        />
        
        <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)', margin: '0 8px' }} />
        
        <motion.button
          whileHover={{ scale: 1.1, background: 'rgba(255, 255, 255, 0.1)' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMuted(!isMuted)}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '4px'
          }}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
