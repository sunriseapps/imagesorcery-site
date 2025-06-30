
import React from 'react';

const FooterSection = () => {
  return (
    <footer className="relative z-10 bg-darker-bg border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IS</span>
              </div>
              <span className="text-xl font-bold text-gradient">ImageSorcery MCP</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering AI agents with comprehensive image processing capabilities while maintaining complete privacy through local processing.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#getting-started" className="hover:text-primary transition-colors">Getting Started</a></li>
              <li><a href="#platforms" className="hover:text-primary transition-colors">Platforms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 SunriseApps. All rights reserved. Built with privacy-first principles.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Powered by AI • Secured by Design</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
