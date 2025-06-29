
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IS</span>
              </div>
              <span className="text-xl font-bold text-gradient">ImageSorcery</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('getting-started')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Getting Started
              </button>
              <button 
                onClick={() => scrollToSection('platforms')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Platforms
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/sunriseapps/imagesorcery-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <Button 
                size="sm" 
                className="bg-gradient-primary hover:opacity-90"
                onClick={() => scrollToSection('getting-started')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
