
import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Triple the number of elements (original had ~24, now ~72)
  const elements = [
    // Крупные элементы (быстрый параллакс - ближе к зрителю)
    { size: 'w-32 h-32', top: 10, left: 5, color: 'bg-gradient-primary', speed: 0.8 },
    { size: 'w-28 h-28', top: 25, right: 8, color: 'bg-gradient-primary', speed: 0.7 },
    { size: 'w-24 h-24', top: 40, left: 70, color: 'bg-secondary', speed: 0.6 },
    { size: 'w-32 h-32', top: 55, right: 15, color: 'bg-gradient-primary', speed: 0.8 },
    { size: 'w-28 h-28', top: 70, left: 20, color: 'bg-secondary', speed: 0.7 },
    { size: 'w-24 h-24', top: 85, right: 60, color: 'bg-gradient-primary', speed: 0.6 },
    
    // Дополнительные крупные элементы
    { size: 'w-30 h-30', top: 15, left: 85, color: 'bg-secondary', speed: 0.75 },
    { size: 'w-26 h-26', top: 35, right: 25, color: 'bg-gradient-primary', speed: 0.65 },
    { size: 'w-32 h-32', top: 45, left: 30, color: 'bg-secondary', speed: 0.8 },
    { size: 'w-28 h-28', top: 65, right: 75, color: 'bg-gradient-primary', speed: 0.7 },
    { size: 'w-24 h-24', top: 80, left: 60, color: 'bg-secondary', speed: 0.6 },
    { size: 'w-30 h-30', top: 95, right: 30, color: 'bg-gradient-primary', speed: 0.75 },
    
    // Еще больше крупных элементов
    { size: 'w-32 h-32', top: 105, left: 10, color: 'bg-secondary', speed: 0.8 },
    { size: 'w-28 h-28', top: 115, right: 50, color: 'bg-gradient-primary', speed: 0.7 },
    { size: 'w-26 h-26', top: 125, left: 80, color: 'bg-secondary', speed: 0.65 },
    { size: 'w-24 h-24', top: 135, right: 20, color: 'bg-gradient-primary', speed: 0.6 },
    { size: 'w-30 h-30', top: 145, left: 45, color: 'bg-secondary', speed: 0.75 },
    { size: 'w-32 h-32', top: 155, right: 65, color: 'bg-gradient-primary', speed: 0.8 },
    
    // Средние элементы (средний параллакс)
    { size: 'w-20 h-20', top: 15, left: 15, color: 'bg-gradient-primary', speed: 0.5 },
    { size: 'w-16 h-16', top: 30, right: 25, color: 'bg-secondary', speed: 0.4 },
    { size: 'w-18 h-18', top: 45, left: 60, color: 'bg-gradient-primary', speed: 0.45 },
    { size: 'w-20 h-20', top: 60, right: 40, color: 'bg-secondary', speed: 0.5 },
    { size: 'w-16 h-16', top: 75, left: 45, color: 'bg-gradient-primary', speed: 0.4 },
    { size: 'w-18 h-18', top: 90, right: 20, color: 'bg-secondary', speed: 0.45 },
    
    // Дополнительные средние элементы
    { size: 'w-22 h-22', top: 20, left: 75, color: 'bg-secondary', speed: 0.55 },
    { size: 'w-18 h-18', top: 35, right: 55, color: 'bg-gradient-primary', speed: 0.45 },
    { size: 'w-16 h-16', top: 50, left: 25, color: 'bg-secondary', speed: 0.4 },
    { size: 'w-20 h-20', top: 65, right: 10, color: 'bg-gradient-primary', speed: 0.5 },
    { size: 'w-18 h-18', top: 80, left: 85, color: 'bg-secondary', speed: 0.45 },
    { size: 'w-22 h-22', top: 95, right: 45, color: 'bg-gradient-primary', speed: 0.55 },
    
    // Еще больше средних элементов
    { size: 'w-20 h-20', top: 110, left: 35, color: 'bg-secondary', speed: 0.5 },
    { size: 'w-16 h-16', top: 120, right: 70, color: 'bg-gradient-primary', speed: 0.4 },
    { size: 'w-18 h-18', top: 130, left: 55, color: 'bg-secondary', speed: 0.45 },
    { size: 'w-22 h-22', top: 140, right: 35, color: 'bg-gradient-primary', speed: 0.55 },
    { size: 'w-20 h-20', top: 150, left: 15, color: 'bg-secondary', speed: 0.5 },
    { size: 'w-16 h-16', top: 160, right: 85, color: 'bg-gradient-primary', speed: 0.4 },
    
    // Мелкие элементы (медленный параллакс - дальше от зрителя)
    { size: 'w-12 h-12', top: 8, left: 80, color: 'bg-primary', speed: 0.3 },
    { size: 'w-10 h-10', top: 22, right: 5, color: 'bg-secondary', speed: 0.25 },
    { size: 'w-8 h-8', top: 35, left: 30, color: 'bg-primary', speed: 0.2 },
    { size: 'w-14 h-14', top: 48, right: 70, color: 'bg-secondary', speed: 0.35 },
    { size: 'w-6 h-6', top: 62, left: 10, color: 'bg-primary', speed: 0.15 },
    { size: 'w-12 h-12', top: 77, right: 35, color: 'bg-secondary', speed: 0.3 },
    { size: 'w-10 h-10', top: 92, left: 65, color: 'bg-primary', speed: 0.25 },
    
    // Дополнительные мелкие элементы
    { size: 'w-14 h-14', top: 18, left: 50, color: 'bg-secondary', speed: 0.35 },
    { size: 'w-8 h-8', top: 32, right: 15, color: 'bg-primary', speed: 0.2 },
    { size: 'w-12 h-12', top: 42, left: 85, color: 'bg-secondary', speed: 0.3 },
    { size: 'w-10 h-10', top: 58, right: 55, color: 'bg-primary', speed: 0.25 },
    { size: 'w-6 h-6', top: 72, left: 40, color: 'bg-secondary', speed: 0.15 },
    { size: 'w-14 h-14', top: 88, right: 25, color: 'bg-primary', speed: 0.35 },
    
    // Еще больше мелких элементов
    { size: 'w-12 h-12', top: 108, left: 70, color: 'bg-secondary', speed: 0.3 },
    { size: 'w-8 h-8', top: 118, right: 40, color: 'bg-primary', speed: 0.2 },
    { size: 'w-10 h-10', top: 128, left: 20, color: 'bg-secondary', speed: 0.25 },
    { size: 'w-14 h-14', top: 138, right: 60, color: 'bg-primary', speed: 0.35 },
    { size: 'w-6 h-6', top: 148, left: 90, color: 'bg-secondary', speed: 0.15 },
    { size: 'w-12 h-12', top: 158, right: 15, color: 'bg-primary', speed: 0.3 },
    
    // Дополнительные мелкие элементы (самый медленный параллакс)
    { size: 'w-4 h-4', top: 12, left: 40, color: 'bg-primary', speed: 0.1 },
    { size: 'w-5 h-5', top: 28, right: 15, color: 'bg-secondary', speed: 0.12 },
    { size: 'w-7 h-7', top: 42, right: 50, color: 'bg-gradient-primary', speed: 0.18 },
    { size: 'w-3 h-3', top: 58, left: 75, color: 'bg-primary', speed: 0.08 },
    { size: 'w-2 h-2', top: 72, left: 25, color: 'bg-secondary', speed: 0.05 },
    { size: 'w-4 h-4', top: 88, right: 10, color: 'bg-gradient-primary', speed: 0.1 },
    { size: 'w-5 h-5', top: 95, left: 50, color: 'bg-primary', speed: 0.12 },
    
    // Еще больше самых мелких элементов
    { size: 'w-3 h-3', top: 25, left: 65, color: 'bg-secondary', speed: 0.08 },
    { size: 'w-4 h-4', top: 38, right: 30, color: 'bg-primary', speed: 0.1 },
    { size: 'w-5 h-5', top: 52, left: 90, color: 'bg-gradient-primary', speed: 0.12 },
    { size: 'w-2 h-2', top: 68, right: 75, color: 'bg-secondary', speed: 0.05 },
    { size: 'w-7 h-7', top: 82, left: 5, color: 'bg-primary', speed: 0.18 },
    { size: 'w-3 h-3', top: 98, right: 55, color: 'bg-gradient-primary', speed: 0.08 },
    
    // Финальная партия самых мелких
    { size: 'w-4 h-4', top: 112, left: 45, color: 'bg-secondary', speed: 0.1 },
    { size: 'w-5 h-5', top: 122, right: 80, color: 'bg-primary', speed: 0.12 },
    { size: 'w-2 h-2', top: 132, left: 75, color: 'bg-gradient-primary', speed: 0.05 },
    { size: 'w-7 h-7', top: 142, right: 45, color: 'bg-secondary', speed: 0.18 },
    { size: 'w-3 h-3', top: 152, left: 30, color: 'bg-primary', speed: 0.08 },
    { size: 'w-4 h-4', top: 162, right: 70, color: 'bg-gradient-primary', speed: 0.1 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => {
        const totalHeight = Math.max(document.documentElement.scrollHeight || 5000, 8000);
        const viewportHeight = window.innerHeight || 800;
        
        // Calculate initial position in viewport units
        const initialTopVh = element.top;
        
        // Calculate parallax offset - this is what makes elements move at different speeds
        const parallaxOffset = scrollY * element.speed;
        
        // Calculate cycle position for infinite scroll effect
        const cycleHeight = totalHeight + viewportHeight;
        const currentPosition = -parallaxOffset;
        const adjustedPosition = ((currentPosition % cycleHeight) + cycleHeight) % cycleHeight;
        
        return (
          <div
            key={index}
            className={`absolute ${element.size} ${element.color} rounded-full opacity-5 animate-float`}
            style={{
              top: `${initialTopVh}vh`, // Fixed initial position in viewport units
              ...('left' in element && { left: `${element.left}%` }),
              ...('right' in element && { right: `${element.right}%` }),
              filter: 'blur(1px)',
              // Use transform for parallax movement - this prevents layout shifts
              transform: `translateY(${adjustedPosition}px) rotate(${scrollY * 0.1}deg)`,
              // Use will-change to optimize performance
              willChange: 'transform',
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;
