import React, { useEffect, useState, useCallback } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [clicks, setClicks] = useState([]);

  // Mouse position state
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  // Large glow position state (slightly slower for trailing effect)
  const glowX = useSpring(0, { stiffness: 150, damping: 20 });
  const glowY = useSpring(0, { stiffness: 150, damping: 20 });

  const addClickSplash = useCallback((e) => {
    const newClick = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    };
    setClicks(prev => [...prev.slice(-5), newClick]); // Keep last 5 clicks
    
    // Remove click after animation
    setTimeout(() => {
      setClicks(prev => prev.filter(click => click.id !== newClick.id));
    }, 600);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      glowX.set(e.clientX);
      glowY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isClickable = 
        target.closest('a') || 
        target.closest('button') || 
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = (e) => addClickSplash(e);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, glowX, glowY, isVisible, addClickSplash]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-100">
      {/* Click Splashes */}
      <AnimatePresence>
        {clicks.map(click => (
          <motion.div
            key={click.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed w-10 h-10 rounded-full border-2 border-blue-500 dark:border-blue-400"
            style={{
              left: click.x,
              top: click.y,
              translateX: '-50%',
              translateY: '-50%',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Outer Glow */}
      <motion.div
        className="fixed w-32 h-32 rounded-full blur-3xl opacity-20 dark:opacity-40"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          background: isPointer 
            ? 'radial-gradient(circle, var(--color-purple-600) 0%, transparent 70%)'
            : 'radial-gradient(circle, var(--color-blue-600) 0%, transparent 70%)',
        }}
      />

      {/* Main Cursor Circle */}
      <motion.div
        className="fixed w-4 h-4 rounded-full border-2 border-blue-500 dark:border-blue-400 flex items-center justify-center mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0)',
        }}
      />

      {/* Center Dot */}
      <motion.div
        className="fixed w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 0 : 1,
        }}
      />
    </div>
  );
};

export default CustomCursor;
