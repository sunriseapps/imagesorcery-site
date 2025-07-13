
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      if (scrollTop > heroHeight * 0.8) {
        setHasScrolledPastHero(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Show consent popup only if user hasn't made a choice AND has scrolled past hero
    if (consent === null && hasScrolledPastHero) {
      setIsVisible(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledPastHero]);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="glass-card max-w-4xl mx-auto p-6 rounded-lg border-border">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
            <p className="text-muted-foreground text-sm mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="flex gap-3">
              <Button onClick={acceptCookies} size="sm" className="bg-gradient-primary hover:opacity-90">
                Accept All
              </Button>
              <Button onClick={declineCookies} variant="outline" size="sm">
                Decline
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={declineCookies}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
