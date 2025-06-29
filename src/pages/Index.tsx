import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Github, Mail, Code, Shield, Zap, Eye, Layers, Type, Target, FileText, Workflow, Lock, Puzzle, Download, Copy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import CodeBlock from '@/components/CodeBlock';
import FloatingElements from '@/components/FloatingElements';

const Index = () => {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  const platforms = [
    { name: 'Smithery.ai', url: 'https://smithery.ai/server/@sunriseapps/imagesorcery-mcp' },
    { name: 'MseeP.ai', url: 'https://mseep.ai/app/sunriseapps-imagesorcery-mcp' },
    { name: 'Pulse MCP', url: 'https://www.pulsemcp.com/servers/sunriseapps-imagesorcery' },
    { name: 'MCP.so', url: 'https://mcp.so/server/imagesorcery-mcp' },
    { name: 'MCPServers.org', url: 'https://mcpservers.org/servers/sunriseapps/imagesorcery-mcp' },
    { name: 'Cursor Directory', url: 'https://cursor.directory/mcp/imagesorcery-mcp' }
  ];

  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Intelligent Object Detection & Discovery",
      description: "Unleash powerful image intelligence. ImageSorcery empowers your AI agents to accurately identify and locate objects within images using cutting-edge models like <span class='text-primary font-semibold'>YOLO from Ultralytics</span>. With the <span class='text-primary font-semibold'>detect</span> and <span class='text-primary font-semibold'>find</span> tools, your AI can gain precise visual understanding. Crucially, these capabilities allow your agent to autonomously apply computer vision when it's a necessary step to fulfill your broader requests, even if not explicitly commanded.",
      demo: "AI receives command 'remove images without animals' → uses find to identify → images without animals disappear"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Image Transformation",
      description: "Gain granular control over your visuals. ImageSorcery empowers your AI to effortlessly transform images to exact specifications. Tools like <span class='text-primary font-semibold'>rotate</span> allow precise angular adjustments, while <span class='text-primary font-semibold'>crop</span> enables perfect framing for any platform. Additionally, <span class='text-primary font-semibold'>resize</span> offers flexible scaling. Crucially, the <span class='text-primary font-semibold'>get_metainfo</span> tool provides your agent with essential image dimensions and properties, ensuring intelligent and accurate application of these transformations.",
      demo: "Tilted Leaning Tower of Pisa → AI uses rotate to straighten → crop to center perfectly"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Seamless Image Layering",
      description: "Effortlessly enhance your images by overlaying other visuals. Whether it's adding logos, watermarks, or combining elements, ImageSorcery allows your AI to seamlessly blend images with transparency handling using the <span class='text-primary font-semibold'>overlay</span> tool, creating polished, professional results.",
      demo: "Logo overlay with transparency handling on main image"
    },
    {
      icon: <Type className="w-8 h-8" />,
      title: "Dynamic Text Annotation",
      description: "Add contextual information or creative flair directly onto your images. ImageSorcery empowers your AI to draw custom text at any position, with control over font, size, and color, using the <span class='text-primary font-semibold'>draw_texts</span> tool, perfect for labels, captions, or dynamic overlays.",
      demo: "Adding custom text with different fonts, sizes, and colors to images"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Visual Highlighting & Diagramming",
      description: "Guide attention and illustrate concepts with ease. ImageSorcery allows your AI to draw various shapes directly onto images, including arrows (<span class='text-primary font-semibold'>draw_arrows</span>), circles (<span class='text-primary font-semibold'>draw_circles</span>), and rectangles (<span class='text-primary font-semibold'>draw_rectangles</span>), enabling clear visual communication and annotation for presentations or analysis.",
      demo: "Adding arrows, circles, and rectangles to highlight specific areas"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Intelligent Text Extraction (OCR)",
      description: "Transform static images into actionable data. ImageSorcery's advanced OCR capabilities enable your AI to accurately extract text from documents, forms, or even specific fields like a name from an ID card, using the <span class='text-primary font-semibold'>ocr</span> tool, turning visual information into editable and searchable data.",
      demo: "Extracting name from ID card photo with precision"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Automated Multi-Step Workflows",
      description: "Unlock true automation by enabling your AI agent to intelligently combine ImageSorcery's powerful tools. Your agent can autonomously chain various functionalities to achieve complex visual goals, streamlining multi-step operations into a single, efficient process.",
      demo: "Find cat → crop around it → add watermark → automated workflow"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Uncompromised Privacy: Local Processing",
      description: "Unlike cloud-based solutions, ImageSorcery processes all your images directly on your local machine. This ensures your sensitive visual data never leaves your environment, providing unparalleled security and privacy. Whether you're interacting with external LLMs like <span class='text-primary font-semibold'>Claude</span>, <span class='text-primary font-semibold'>Gemini</span>, or <span class='text-primary font-semibold'>ChatGPT</span>, or leveraging the absolute security of local models such as <span class='text-primary font-semibold'>Llama</span> or <span class='text-primary font-semibold'>Mistral</span>, your visual data remains entirely within your control.",
      demo: "Data stays inside your computer with shield/lock protection"
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Expandable Model Ecosystem",
      description: "For advanced users, ImageSorcery offers unparalleled flexibility by allowing the integration of custom models. Easily download and utilize specialized models from platforms like <span class='text-primary font-semibold'>Hugging Face</span> to extend your AI's capabilities for niche tasks.",
      demo: "AI agent numbering web form fields using specialized model"
    }
  ];

  const agenticSetupCode = `1. Load MCP documentation if you have the tool for it. It will give you path to *MCP-configuration file* and other needed instructions.
2. Run command \`python -m venv imagesorcery-mcp\`
3. Run command \`source imagesorcery-mcp/bin/activate\`
   For windows bash run command \`source imagesorcery-mcp/Scripts/activate\`
   For windows cmd run command \`imagesorcery-mcp\\Scripts\\activate\`
4. Run command \`pip install imagesorcery-mcp\`
5. Run command \`imagesorcery-mcp --post-install\`
6. Create or modify *MCP-configuration file*.
7. Add the \`imagesorcery-mcp\` server configuration to the \`mcpServers\` object in the *MCP-configuration file*
   \`"imagesorcery-mcp": {"command": "/full/path/to/venv/bin/imagesorcery-mcp","timeout": 100}\`
8. Get available models using \`models://list\` resource from \`imagesorcery-mcp\`
9. Attempt completion, indicating that the installation and configuration are complete.`;

  return (
    <div className="min-h-screen bg-darker-bg relative overflow-hidden">
      <Header />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative min-h-screen hero-bg flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Empower Your AI Agents with{' '}
              <span className="text-gradient">Image Processing Sorcery</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              No more visual limitations for your AI. ImageSorcery equips your agents with a comprehensive suite of image analysis and manipulation tools, enabling them to understand, process, and transform visual data, with all processing handled securely on your local machine.
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

      {/* Video Demo Section */}
      <section className="py-20 bg-gradient-glow relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 rounded-2xl relative">
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

      {/* Features Section */}
      <section id="features" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Master Every Pixel: <span className="text-gradient">ImageSorcery's Core Features</span>
            </h2>
          </div>

          <div className="space-y-32">
            {features.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="glass-card p-8 rounded-2xl hover-glow transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-primary p-3 rounded-lg mr-4 text-white">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                    </div>
                    <p 
                      className="text-muted-foreground leading-relaxed text-lg mb-4"
                      dangerouslySetInnerHTML={{ __html: feature.description }}
                    />
                    <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-sm text-muted-foreground italic">
                        Demo scenario: {feature.demo}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="aspect-video bg-muted rounded-xl flex items-center justify-center glass-card">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                        {feature.icon}
                      </div>
                      <p className="text-muted-foreground">Feature Demo</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-20 bg-gradient-glow relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Getting Started</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrating ImageSorcery into your AI workflow is straightforward. Follow these steps to unlock powerful image processing capabilities for your agents.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Prerequisites */}
            <div className="glass-card p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-lg font-bold">1</div>
                Prerequisites: What You Need
              </h3>
              <p className="text-muted-foreground mb-6">
                Before you begin, ensure your system meets these basic requirements:
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Python 3.10 or higher</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>An MCP-compatible AI client (like Claude.app, Cursor, or Cline)</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> For detailed system library requirements (e.g., for Docker environments), please refer to the full README documentation.
                </p>
              </div>
            </div>

            {/* Setup Methods */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-lg font-bold">2</div>
                Setup: Choose Your Path
              </h3>
              <p className="text-muted-foreground mb-8">
                Select the setup method that best suits your AI client and preferences.
              </p>

              <Tabs defaultValue="agentic" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="agentic">Autonomous Agentic Setup</TabsTrigger>
                  <TabsTrigger value="manual">Manual Setup</TabsTrigger>
                </TabsList>

                <TabsContent value="agentic" className="space-y-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="text-muted-foreground mb-6">
                      For AI agents capable of processing detailed LLM instructions (e.g., Cline, Cursor, Windsurf), simply provide the following setup script. Your agent will handle the installation and configuration automatically.
                    </p>
                    <CodeBlock
                      code={agenticSetupCode}
                      language="bash"
                      copyKey="agentic"
                      copiedStates={copiedStates}
                      onCopy={handleCopy}
                    />
                    <p className="text-sm text-muted-foreground mt-4">
                      Copy this entire block and paste it into your AI agent's chat interface.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="manual" className="space-y-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="text-muted-foreground mb-6">
                      For direct control or if your AI client requires manual configuration, follow these steps to install ImageSorcery and configure your MCP client.
                    </p>

                    <Tabs defaultValue="linux" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="linux">Linux / macOS</TabsTrigger>
                        <TabsTrigger value="windows">Windows</TabsTrigger>
                      </TabsList>

                      <TabsContent value="linux" className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-4">Installation</h4>
                          <CodeBlock
                            code={`# 1. Create and activate a virtual environment (Recommended)
python -m venv imagesorcery-mcp
source imagesorcery-mcp/bin/activate

# 2. Install ImageSorcery MCP
pip install imagesorcery-mcp

# 3. Run the crucial post-installation script (downloads models & sets up CLIP)
imagesorcery-mcp --post-install`}
                            language="bash"
                            copyKey="linux-install"
                            copiedStates={copiedStates}
                            onCopy={handleCopy}
                          />
                          <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                            <p className="text-yellow-400 text-sm">
                              <strong>Important:</strong> The --post-install step downloads essential models and configures critical components. Don't skip it!
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-4">Configure Your MCP Client</h4>
                          <CodeBlock
                            code={`{
  "mcpServers": {
    "imagesorcery-mcp": {
      "command": "/full/path/to/venv/bin/imagesorcery-mcp",
      "transportType": "stdio",
      "timeout": 100
    }
  }
}`}
                            language="json"
                            copyKey="linux-config"
                            copiedStates={copiedStates}
                            onCopy={handleCopy}
                          />
                        </div>
                      </TabsContent>

                      <TabsContent value="windows" className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-4">Installation</h4>
                          <CodeBlock
                            code={`# 1. Create and activate a virtual environment (Recommended)
python -m venv imagesorcery-mcp
imagesorcery-mcp\\Scripts\\activate # For Windows Cmd
# OR, for Windows Bash:
# source imagesorcery-mcp/Scripts/activate

# 2. Install ImageSorcery MCP
pip install imagesorcery-mcp

# 3. Run the crucial post-installation script (downloads models & sets up CLIP)
imagesorcery-mcp --post-install`}
                            language="bash"
                            copyKey="windows-install"
                            copiedStates={copiedStates}
                            onCopy={handleCopy}
                          />
                          <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                            <p className="text-yellow-400 text-sm">
                              <strong>Important:</strong> The --post-install step downloads essential models and configures critical components. Don't skip it!
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-4">Configure Your MCP Client</h4>
                          <CodeBlock
                            code={`{
  "mcpServers": {
    "imagesorcery-mcp": {
      "command": "C:\\\\full\\\\path\\\\to\\\\venv\\\\Scripts\\\\imagesorcery-mcp.exe",
      "transportType": "stdio",
      "timeout": 100
    }
  }
}`}
                            language="json"
                            copyKey="windows-config"
                            copiedStates={copiedStates}
                            onCopy={handleCopy}
                          />
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Platforms Section */}
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

          <div className="relative">
            <div className="flex space-x-6 animate-scroll-x">
              {[...platforms, ...platforms].map((platform, index) => (
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

      {/* About & Contact Section */}
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
                  <p className="font-semibold">Kuntsevich Andrei</p>
                  <p className="text-sm text-muted-foreground">Solution Architect at Sunrise Apps</p>
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

      {/* Enhanced Footer */}
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
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/sunriseapps/imagesorcery-mcp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#getting-started" className="hover:text-primary transition-colors">Getting Started</a></li>
                <li><a href="#platforms" className="hover:text-primary transition-colors">Platforms</a></li>
                <li><a href="https://github.com/sunriseapps/imagesorcery-mcp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Documentation</a></li>
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
    </div>
  );
};

export default Index;
