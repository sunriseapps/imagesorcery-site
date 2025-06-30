
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeBlock from '@/components/CodeBlock';

interface GettingStartedSectionProps {
  copiedStates: { [key: string]: boolean };
  onCopy: (text: string, key: string) => void;
}

const GettingStartedSection: React.FC<GettingStartedSectionProps> = ({ copiedStates, onCopy }) => {
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
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Python 3.10 or higher</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>An MCP-compatible AI client (like Claude.app, Cursor, or Cline)</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> For detailed system library requirements (e.g., for Docker environments), please refer to the full <a href="https://github.com/sunriseapps/imagesorcery-mcp" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">README</a> documentation.
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
                <TabsTrigger value="agentic">Agentic</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
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
                    onCopy={onCopy}
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
                          onCopy={onCopy}
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
                          onCopy={onCopy}
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
                          onCopy={onCopy}
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
                          onCopy={onCopy}
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
  );
};

export default GettingStartedSection;
