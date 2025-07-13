
import React, { useState } from 'react';
import Header from '@/components/Header';
import FloatingElements from '@/components/FloatingElements';
import HeroSection from '@/components/sections/HeroSection';
import VideoSection from '@/components/sections/VideoSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import GettingStartedSection from '@/components/sections/GettingStartedSection';
import PlatformsSection from '@/components/sections/PlatformsSection';
import AboutSection from '@/components/sections/AboutSection';
import FooterSection from '@/components/sections/FooterSection';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-darker-bg relative overflow-hidden body-bg">
      <Header />
      <FloatingElements />
      
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <GettingStartedSection copiedStates={copiedStates} onCopy={handleCopy} />
      <PlatformsSection />
      <AboutSection />
      <FooterSection />
      
      <CookieConsent />
    </div>
  );
};

export default Index;
