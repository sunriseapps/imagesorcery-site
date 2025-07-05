
import React from 'react';
import { Star } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-glow relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-2xl relative hover:animate-video-glow transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl animate-pulse-slow"></div>
              <div className="relative z-10">
                <div className="aspect-video bg-muted rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-lg text-muted-foreground">Demo Video Coming Soon</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  See ImageSorcery transform your workflow with a single spell. Watch as your AI agent seamlessly installs the tool, then adapts images for social media and web, and brandishes them with your custom logo – all automated for peak efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
