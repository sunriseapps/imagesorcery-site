
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroFloatingElements from '@/components/HeroFloatingElements';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-bg flex items-center justify-center overflow-hidden">
      <HeroFloatingElements />
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Empower Your AI Agents with{' '}
            <span className="text-gradient">Image Processing Sorcery</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            ImageSorcery equips your agents with a comprehensive suite of image manipulation tools, enabling them to understand, process, and transform visual data <span className="text-primary font-semibold">on your local machine</span>.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl glow-effect hover-glow transition-all duration-300"
            onClick={() => document.getElementById('getting-started')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Unveil the Sorcery
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
