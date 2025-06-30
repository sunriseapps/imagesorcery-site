
import React from 'react';
import { Code } from 'lucide-react';

const PlatformsSection = () => {
  const platforms = [
    { name: 'Smithery.ai', url: 'https://smithery.ai/server/@sunriseapps/imagesorcery-mcp' },
    { name: 'MseeP.ai', url: 'https://mseep.ai/app/sunriseapps-imagesorcery-mcp' },
    { name: 'Pulse MCP', url: 'https://www.pulsemcp.com/servers/sunriseapps-imagesorcery' },
    { name: 'MCP.so', url: 'https://mcp.so/server/imagesorcery-mcp' },
    { name: 'MCPServers.org', url: 'https://mcpservers.org/servers/sunriseapps/imagesorcery-mcp' },
    { name: 'Cursor Directory', url: 'https://cursor.directory/mcp/imagesorcery-mcp' }
  ];

  // Дублируем платформы для бесконечной прокрутки
  const duplicatedPlatforms = [...platforms, ...platforms];

  return (
    <section id="platforms" className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Verified on <span className="text-gradient">Leading MCP Platforms</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ImageSorcery MCP is trusted and listed across prominent MCP directories and AI client platforms. Scroll to explore all platforms.
          </p>
        </div>

        {/* Контейнер для мобильных устройств с горизонтальным скроллом */}
        <div className="md:hidden">
          <div className="flex space-x-6 overflow-x-auto pb-4 px-6 -mx-6 scrollbar-none">
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-xl hover-glow transition-all duration-300 hover:scale-105 text-center flex-shrink-0 w-48"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-center">{platform.name}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Автоматическая прокрутка для десктопа */}
        <div className="hidden md:block relative">
          <div className="flex space-x-6 animate-scroll-x">
            {duplicatedPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-xl hover-glow transition-all duration-300 hover:scale-105 text-center flex-shrink-0 w-48"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-center">{platform.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
