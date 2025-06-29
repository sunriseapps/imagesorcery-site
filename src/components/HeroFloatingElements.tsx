
import React from 'react';

const HeroFloatingElements = () => {
  const elements = [
    // Крупные элементы
    { size: 'w-32 h-32', top: 20, left: 10, color: 'bg-gradient-primary', delay: 0 },
    { size: 'w-28 h-28', top: 70, right: 15, color: 'bg-gradient-primary', delay: 3000 },
    { size: 'w-24 h-24', top: 40, left: 75, color: 'bg-secondary', delay: 1500 },
    
    // Средние элементы
    { size: 'w-20 h-20', top: 60, left: 20, color: 'bg-gradient-primary', delay: 2000 },
    { size: 'w-16 h-16', top: 30, right: 30, color: 'bg-secondary', delay: 4000 },
    { size: 'w-18 h-18', top: 85, left: 65, color: 'bg-gradient-primary', delay: 500 },
    
    // Мелкие элементы
    { size: 'w-12 h-12', top: 25, left: 85, color: 'bg-primary', delay: 1000 },
    { size: 'w-10 h-10', top: 80, right: 5, color: 'bg-secondary', delay: 2500 },
    { size: 'w-8 h-8', top: 45, left: 35, color: 'bg-primary', delay: 3500 },
    { size: 'w-14 h-14', top: 65, right: 65, color: 'bg-secondary', delay: 800 },
    { size: 'w-6 h-6', top: 15, left: 50, color: 'bg-primary', delay: 1800 },
    
    // Дополнительные мелкие элементы
    { size: 'w-4 h-4', top: 35, left: 45, color: 'bg-primary', delay: 2200 },
    { size: 'w-5 h-5', top: 75, right: 20, color: 'bg-secondary', delay: 3800 },
    { size: 'w-7 h-7', top: 55, right: 40, color: 'bg-gradient-primary', delay: 1200 },
    { size: 'w-3 h-3', top: 10, left: 60, color: 'bg-primary', delay: 4200 },
    { size: 'w-2 h-2', top: 90, left: 30, color: 'bg-secondary', delay: 1700 },
    { size: 'w-4 h-4', top: 50, right: 10, color: 'bg-gradient-primary', delay: 3300 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.size} ${element.color} rounded-full opacity-5 animate-float`}
          style={{
            top: `${element.top}%`,
            ...('left' in element && { left: `${element.left}%` }),
            ...('right' in element && { right: `${element.right}%` }),
            animationDelay: `${element.delay}ms`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};

export default HeroFloatingElements;
