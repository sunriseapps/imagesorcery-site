
import React from 'react';

const PlatformsSection = () => {
  const platforms = [
    {
      name: 'Smithery.ai',
      url: 'https://smithery.ai/server/@sunriseapps/imagesorcery-mcp',
      logo: '/lovable-uploads/e1527e34-386e-4712-9e0a-09a2880990ad.png'
    },
    {
      name: 'MseeP.ai',
      url: 'https://mseep.ai/app/sunriseapps-imagesorcery-mcp',
      logo: '/lovable-uploads/58be6960-95a1-4600-b805-0001874803e4.png'
    },
    {
      name: 'Pulse MCP',
      url: 'https://www.pulsemcp.com/servers/sunriseapps-imagesorcery',
      logo: '/lovable-uploads/4dbc2bd7-220a-4c83-be3f-e4b805f84e65.png'
    },
    {
      name: 'MCP.so',
      url: 'https://mcp.so/server/imagesorcery-mcp',
      logo: '/lovable-uploads/61c683ac-40fa-4d37-be5a-10adcbceb553.png'
    },
    {
      name: 'MCPServers.org',
      url: 'https://mcpservers.org/servers/sunriseapps/imagesorcery-mcp',
      logo: '/lovable-uploads/8fb3ab7f-ed2a-4e2b-9e6a-ff34e084f84f.png'
    },
    {
      name: 'ModelScope',
      url: 'https://www.modelscope.cn/mcp/servers/@sunriseapps/imagesorcery-mcp',
      logo: '/lovable-uploads/b02baeef-8af5-42ba-93f0-ef10efd739af.png'
    },
    {
      name: 'Glama.ai',
      url: 'https://glama.ai/mcp/servers/@sunriseapps/imagesorcery-mcp',
      logo: '/lovable-uploads/0de07841-479f-405f-bd87-192eb9dc831f.png'
    },
    {
      name: 'Cursor Directory',
      url: 'https://cursor.directory/mcp/imagesorcery-mcp',
      logo: '/lovable-uploads/3ec19e1b-a31f-4776-8248-94e866fc606a.png'
    }
  ];

  return (
    <section id="platforms" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Verified on Leading MCP Platforms
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ImageSorcery MCP is trusted and listed across prominent MCP directories and AI client platforms. 
            Click on any logo to explore our listing.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-xl glass-card hover:glow-effect transition-all duration-300 flex items-center justify-center aspect-square"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
              
              {/* Platform name tooltip */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                {platform.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
