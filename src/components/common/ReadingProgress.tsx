import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Show when scrolled a bit (more than 20px)
      if (window.scrollY > 20) {
        setIsVisible(true);
        setIsScrolling(true);
        
        // Reset timer
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[1px] bg-white origin-left z-[100]"
      style={{ 
        scaleX: scrollYProgress,
        opacity: isVisible && isScrolling ? 1 : 0
      }}
      transition={{ opacity: { duration: 0.5 } }}
    />
  );
}
