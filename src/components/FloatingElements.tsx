
import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Создаем элементы с разными скоростями параллакса
  const elements = [
    // Крупные элементы (медленный параллакс)
    { size: 'w-32 h-32', top: 10, left: 5, color: 'bg-gradient-primary', speed: 0.2, delay: 0 },
    { size: 'w-28 h-28', top: 60, right: 8, color: 'bg-gradient-primary', speed: 0.25, delay: 3000 },
    { size: 'w-24 h-24', top: 30, left: 70, color: 'bg-secondary', speed: 0.15, delay: 1500 },
    
    // Средние элементы (средний параллакс)
    { size: 'w-20 h-20', top: 80, left: 15, color: 'bg-gradient-primary', speed: 0.4, delay: 2000 },
    { size: 'w-16 h-16', top: 45, right: 25, color: 'bg-secondary', speed: 0.35, delay: 4000 },
    { size: 'w-18 h-18', top: 70, left: 60, color: 'bg-gradient-primary', speed: 0.3, delay: 500 },
    
    // Мелкие элементы (быстрый параллакс)
    { size: 'w-12 h-12', top: 20, left: 80, color: 'bg-primary', speed: 0.6, delay: 1000 },
    { size: 'w-10 h-10', top: 90, right: 40, color: 'bg-secondary', speed: 0.7, delay: 2500 },
    { size: 'w-8 h-8', top: 35, left: 30, color: 'bg-primary', speed: 0.8, delay: 3500 },
    { size: 'w-14 h-14', top: 55, right: 60, color: 'bg-secondary', speed: 0.5, delay: 800 },
    { size: 'w-6 h-6', top: 75, left: 45, color: 'bg-primary', speed: 0.9, delay: 1800 },
    
    // Дополнительные мелкие элементы
    { size: 'w-4 h-4', top: 15, left: 40, color: 'bg-primary', speed: 1.0, delay: 2200 },
    { size: 'w-5 h-5', top: 65, right: 15, color: 'bg-secondary', speed: 0.85, delay: 3800 },
    { size: 'w-7 h-7', top: 25, right: 35, color: 'bg-gradient-primary', speed: 0.65, delay: 1200 },
    { size: 'w-3 h-3', top: 5, left: 60, color: 'bg-primary', speed: 1.2, delay: 4200 },
    { size: 'w-2 h-2', top: 85, left: 25, color: 'bg-secondary', speed: 1.1, delay: 1700 },
    { size: 'w-4 h-4', top: 40, right: 10, color: 'bg-gradient-primary', speed: 0.95, delay: 3300 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => {
        // Вычисляем позицию с параллакс эффектом
        const parallaxOffset = scrollY * element.speed;
        const initialTop = (window.innerHeight * element.top) / 100;
        const currentTop = initialTop - parallaxOffset;
        
        // Элемент остается видимым, циклически появляясь снизу когда исчезает сверху
        const adjustedTop = currentTop % (window.innerHeight + 200) - 100;
        
        return (
          <div
            key={index}
            className={`absolute ${element.size} ${element.color} rounded-full opacity-5 animate-float`}
            style={{
              top: `${adjustedTop}px`,
              ...element.left !== undefined && { left: `${element.left}%` },
              ...element.right !== undefined && { right: `${element.right}%` },
              animationDelay: `${element.delay}ms`,
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
