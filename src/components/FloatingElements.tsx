
import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const elements = [
    // Large elements (90% speed)
    { size: 'w-32 h-32', top: '10%', left: '5%', color: 'bg-gradient-primary', speed: 0.9, delay: '0s' },
    { size: 'w-28 h-28', top: '60%', right: '8%', color: 'bg-gradient-primary', speed: 0.9, delay: '3s' },
    { size: 'w-24 h-24', top: '30%', left: '70%', color: 'bg-secondary', speed: 0.9, delay: '1.5s' },
    
    // Medium elements (60% speed)
    { size: 'w-20 h-20', top: '80%', left: '15%', color: 'bg-gradient-primary', speed: 0.6, delay: '2s' },
    { size: 'w-16 h-16', top: '45%', right: '25%', color: 'bg-secondary', speed: 0.6, delay: '4s' },
    { size: 'w-18 h-18', top: '70%', left: '60%', color: 'bg-gradient-primary', speed: 0.6, delay: '0.5s' },
    
    // Small elements (30% speed)
    { size: 'w-12 h-12', top: '20%', left: '80%', color: 'bg-primary', speed: 0.3, delay: '1s' },
    { size: 'w-10 h-10', top: '90%', right: '40%', color: 'bg-secondary', speed: 0.3, delay: '2.5s' },
    { size: 'w-8 h-8', top: '35%', left: '30%', color: 'bg-primary', speed: 0.3, delay: '3.5s' },
    { size: 'w-14 h-14', top: '55%', right: '60%', color: 'bg-secondary', speed: 0.3, delay: '0.8s' },
    { size: 'w-6 h-6', top: '75%', left: '45%', color: 'bg-primary', speed: 0.3, delay: '1.8s' },
    
    // Additional small elements for more variety
    { size: 'w-4 h-4', top: '15%', left: '40%', color: 'bg-primary', speed: 0.3, delay: '2.2s' },
    { size: 'w-5 h-5', top: '65%', right: '15%', color: 'bg-secondary', speed: 0.3, delay: '3.8s' },
    { size: 'w-7 h-7', top: '25%', right: '35%', color: 'bg-gradient-primary', speed: 0.3, delay: '1.2s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.size} ${element.color} rounded-full opacity-20 animate-float`}
          style={{
            ...element.top && { top: element.top },
            ...element.left && { left: element.left },
            ...element.right && { right: element.right },
            transform: `translateY(${-scrollY * element.speed}px) rotate(${scrollY * 0.1}deg)`,
            animationDelay: element.delay,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
