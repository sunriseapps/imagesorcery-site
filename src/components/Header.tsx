
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

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

  const handleNavigateClick = (targetSection: string) => {
    trackEvent('navigate_click', {
      section: 'header',
      target_section: targetSection,
    });
    document.getElementById(targetSection)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCTAClick = () => {
    trackEvent('cta_click', {
      section: 'header',
      button_text: 'Get Started',
      target_section: 'getting-started',
    });
    document.getElementById('getting-started')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOutboundLinkClick = (linkName: string, linkUrl: string) => {
    trackEvent('outbound_link_click', {
      section: 'header',
      link_name: linkName,
      link_url: linkUrl,
    });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="lovable-uploads/c74fd64d-00ef-4dcd-8cc9-e59e96d21d96.png"
                alt="ImageSorcery MCP Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gradient">ImageSorcery</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavigateClick('features')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => handleNavigateClick('getting-started')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Getting Started
              </button>
              <button
                onClick={() => handleNavigateClick('platforms')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Platforms
              </button>
              <button
                onClick={() => handleNavigateClick('contact')}
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
                onClick={() => handleOutboundLinkClick('GitHub Repo', 'https://github.com/sunriseapps/imagesorcery-mcp')}
              >
                <Github className="w-5 h-5" />
              </a>
              <Button
                size="sm"
                className="bg-gradient-primary hover:opacity-90"
                onClick={handleCTAClick}
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
