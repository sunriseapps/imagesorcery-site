
import React from 'react';
import { Mail, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-glow relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us & Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Behind ImageSorcery is a commitment to empowering AI with secure, powerful visual capabilities. Let's connect.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Our Vision: Empowering AI with Privacy-First Visual Intelligence</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At <strong>SunriseApps</strong>, we believe AI agents should be limitless, especially when it comes to visual data. We created ImageSorcery to bridge the critical gap in AI's ability to interact with and manipulate images directly, all while upholding the highest standards of privacy and security.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to equip every AI agent with the 'eyes' and 'hands' it needs to master the visual world, transforming complex image tasks into seamless, automated workflows.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">AK</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Kuntsevich Andrei</p>
                  <p className="text-sm text-muted-foreground mb-2">Solution Architect at Sunrise Apps</p>
                  <Badge variant="secondary" className="text-xs">Author</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-primary" />
                  Contact Information
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">General Inquiries:</p>
                    <a href="mailto:hello@sunriseapps.com" className="text-primary hover:underline">
                      hello@sunriseapps.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Sales & Enterprise:</p>
                    <a href="mailto:sales@sunriseapps.com" className="text-primary hover:underline">
                      sales@sunriseapps.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Partnerships:</p>
                    <a href="mailto:andrei@sunriseapps.com" className="text-primary hover:underline">
                      andrei@sunriseapps.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Github className="w-5 h-5 mr-2 text-primary" />
                  Open Source
                </h4>
                <p className="text-muted-foreground mb-4">
                  Explore our code, report issues, or contribute to the project.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://github.com/sunriseapps/imagesorcery-mcp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    sunriseapps/imagesorcery-mcp
                  </a>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Show your support:</p>
                    <a 
                      className="github-button" 
                      href="https://github.com/sunriseapps/imagesorcery-mcp" 
                      data-color-scheme="no-preference: dark; light: dark; dark: dark;" 
                      data-icon="octicon-star"
                      data-size="large" 
                      data-show-count="true" 
                      aria-label="Star sunriseapps/imagesorcery-mcp on GitHub"
                    >
                      Star
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
