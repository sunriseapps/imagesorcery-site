import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const elements = [
    // Крупные элементы (быстрый параллакс - ближе к зрителю)
    { size: 'w-32 h-32', top: 10, left: 5, color: 'bg-gradient-primary', speed: 0.8 },
    { size: 'w-28 h-28', top: 25, right: 8, color: 'bg-gradient-primary', speed: 0.7 },
    { size: 'w-24 h-24', top: 40, left: 70, color: 'bg-secondary', speed: 0.6 },
    { size: 'w-32 h-32', top: 55, right: 15, color: 'bg-gradient-primary', speed: 0.8 },
    { size: 'w-28 h-28', top: 70, left: 20, color: 'bg-secondary', speed: 0.7 },
    { size: 'w-24 h-24', top: 85, right: 60, color: 'bg-gradient-primary', speed: 0.6 },
    
    // Средние элементы (средний параллакс)
    { size: 'w-20 h-20', top: 15, left: 15, color: 'bg-gradient-primary', speed: 0.5 },
    { size: 'w-16 h-16', top: 30, right: 25, color: 'bg-secondary', speed: 0.4 },
    { size: 'w-18 h-18', top: 45, left: 60, color: 'bg-gradient-primary', speed: 0.45 },
    { size: 'w-20 h-20', top: 60, right: 40, color: 'bg-secondary', speed: 0.5 },
    { size: 'w-16 h-16', top: 75, left: 45, color: 'bg-gradient-primary', speed: 0.4 },
    { size: 'w-18 h-18', top: 90, right: 20, color: 'bg-secondary', speed: 0.45 },
    
    // Мелкие элементы (медленный параллакс - дальше от зрителя)
    { size: 'w-12 h-12', top: 8, left: 80, color: 'bg-primary', speed: 0.3 },
    { size: 'w-10 h-10', top: 22, right: 5, color: 'bg-secondary', speed: 0.25 },
    { size: 'w-8 h-8', top: 35, left: 30, color: 'bg-primary', speed: 0.2 },
    { size: 'w-14 h-14', top: 48, right: 70, color: 'bg-secondary', speed: 0.35 },
    { size: 'w-6 h-6', top: 62, left: 10, color: 'bg-primary', speed: 0.15 },
    { size: 'w-12 h-12', top: 77, right: 35, color: 'bg-secondary', speed: 0.3 },
    { size: 'w-10 h-10', top: 92, left: 65, color: 'bg-primary', speed: 0.25 },
    
    // Дополнительные мелкие элементы (самый медленный параллакс)
    { size: 'w-4 h-4', top: 12, left: 40, color: 'bg-primary', speed: 0.1 },
    { size: 'w-5 h-5', top: 28, right: 15, color: 'bg-secondary', speed: 0.12 },
    { size: 'w-7 h-7', top: 42, right: 50, color: 'bg-gradient-primary', speed: 0.18 },
    { size: 'w-3 h-3', top: 58, left: 75, color: 'bg-primary', speed: 0.08 },
    { size: 'w-2 h-2', top: 72, left: 25, color: 'bg-secondary', speed: 0.05 },
    { size: 'w-4 h-4', top: 88, right: 10, color: 'bg-gradient-primary', speed: 0.1 },
    { size: 'w-5 h-5', top: 95, left: 50, color: 'bg-primary', speed: 0.12 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => {
        const totalHeight = Math.max(document.documentElement.scrollHeight || 5000, 8000);
        const viewportHeight = window.innerHeight || 800;
        
        const initialTop = (totalHeight * element.top) / 100;
        const parallaxOffset = scrollY * element.speed;
        const currentTop = initialTop - parallaxOffset;
        
        const cycleHeight = totalHeight + viewportHeight;
        const adjustedTop = ((currentTop % cycleHeight) + cycleHeight) % cycleHeight;
        
        return (
          <div
            key={index}
            className={`absolute ${element.size} ${element.color} rounded-full opacity-5 animate-float`}
            style={{
              top: `${adjustedTop}px`,
              ...('left' in element && { left: `${element.left}%` }),
              ...('right' in element && { right: `${element.right}%` }),
              filter: 'blur(1px)',
              transform: `rotate(${scrollY * 0.1}deg)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;
