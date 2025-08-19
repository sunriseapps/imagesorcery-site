
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeBlock from '@/components/CodeBlock';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { trackEvent } from '@/lib/analytics';

interface GettingStartedSectionProps {
  copiedStates: { [key: string]: boolean };
  onCopy: (text: string, key: string) => void;
}

const GettingStartedSection: React.FC<GettingStartedSectionProps> = ({ copiedStates, onCopy }) => {
  const sectionRef = useIntersectionObserver(
    () => {
      trackEvent('section_view', {
        section_id: 'getting-started',
        section_title: 'Getting Started',
      });
    },
    { threshold: 0.25, once: true }
  );

  const agenticSetupCode = `1. Load MCP documentation if you have the tool for it. It will give you path to *MCP-configuration file* and other needed instructions.
2. Run command \`pipx install imagesorcery-mcp\`
3. Run command \`imagesorcery-mcp --post-install\`
4. Create or modify *MCP-configuration file*.
5. Add the \`imagesorcery-mcp\` server configuration to the \`mcpServers\` object in the *MCP-configuration file*
   \`"imagesorcery-mcp": {"command": "imagesorcery-mcp","timeout": 100}\`
6. Access available models using \`models://list\` resource from \`imagesorcery-mcp\`
7. Attempt completion, indicating that the installation and configuration are complete.`;

  return (
    <section ref={sectionRef} id="getting-started" className="py-20 bg-gradient-glow relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Getting Started</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Prerequisites */}
          <div className="glass-card p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-lg font-bold">1</div>
              System Requirements
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Python 3.10 or higher</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>pipx (recommended) - for easy installation and virtual environment management</span>
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
              Setup
            </h3>

            <Tabs
              defaultValue="agentic"
              className="w-full"
              onValueChange={(value) =>
                trackEvent('tab_select', {
                  tab_group: 'setup_method',
                  selected_tab: value,
                })
              }
            >
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
                    copiedStates={copiedStates}
                    onCopy={onCopy}
                    codeBlockId="agentic"
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

                  <Tabs
                    defaultValue="pipx"
                    className="w-full"
                    onValueChange={(value) =>
                      trackEvent('tab_select', {
                        tab_group: 'installation_method',
                        selected_tab: value,
                      })
                    }
                  >
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="pipx">pipx (Recommended)</TabsTrigger>
                      <TabsTrigger value="manual-venv">Manual Virtual Environment</TabsTrigger>
                    </TabsList>

                    <TabsContent value="pipx" className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Installation with pipx (Recommended)</h4>
                        <p className="text-muted-foreground mb-4">
                          pipx automatically handles virtual environment creation and management, making the installation process much simpler.
                        </p>

                        <Tabs
                          defaultValue="macos"
                          className="w-full"
                          onValueChange={(value) =>
                            trackEvent('tab_select', {
                              tab_group: 'pipx_install_os',
                              selected_tab: value,
                            })
                          }
                        >
                          <TabsList className="grid w-full grid-cols-3 mb-4">
                            <TabsTrigger value="macos">macOS</TabsTrigger>
                            <TabsTrigger value="linux">Linux</TabsTrigger>
                            <TabsTrigger value="windows">Windows</TabsTrigger>
                          </TabsList>

                          <TabsContent value="macos">
                            <CodeBlock
                              code={`# 1. Install pipx (if not already installed)
brew install pipx

# 2. Install ImageSorcery MCP with pipx
pipx install imagesorcery-mcp

# 3. Run the crucial post-installation script (downloads models & sets up CLIP)
imagesorcery-mcp --post-install`}
                              language="bash"
                              codeBlockId="pipx-install-macos"
                              copiedStates={copiedStates}
                              onCopy={onCopy}
                            />
                          </TabsContent>

                          <TabsContent value="linux">
                            <CodeBlock
                              code={`# 1. Install pipx (if not already installed)
sudo apt update && sudo apt install pipx

# 2. Install ImageSorcery MCP with pipx
pipx install imagesorcery-mcp

# 3. Run the crucial post-installation script (downloads models & sets up CLIP)
imagesorcery-mcp --post-install`}
                              language="bash"
                              codeBlockId="pipx-install-linux"
                              copiedStates={copiedStates}
                              onCopy={onCopy}
                            />
                          </TabsContent>

                          <TabsContent value="windows">
                            <CodeBlock
                              code={`# 1. Install pipx (if not already installed)
pip install --user pipx
pipx ensurepath

# 2. Install ImageSorcery MCP with pipx
pipx install imagesorcery-mcp

# 3. Run the crucial post-installation script (downloads models & sets up CLIP)
imagesorcery-mcp.exe --post-install`}
                              language="bash"
                              codeBlockId="pipx-install-windows"
                              copiedStates={copiedStates}
                              onCopy={onCopy}
                            />
                          </TabsContent>
                        </Tabs>

                        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                          <p className="text-yellow-400 text-sm">
                            <strong>Important:</strong> The --post-install step downloads essential models and configures critical components. Don't skip it!
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4">Configure Your MCP Client</h4>
                        <p className="text-muted-foreground mb-4">For pipx installation, use the simple command name:</p>

                        <Tabs
                          defaultValue="macos-config"
                          className="w-full"
                          onValueChange={(value) =>
                            trackEvent('tab_select', {
                              tab_group: 'pipx_config_os',
                              selected_tab: value,
                            })
                          }
                        >
                          <TabsList className="grid w-full grid-cols-3 mb-4">
                            <TabsTrigger value="macos-config">macOS</TabsTrigger>
                            <TabsTrigger value="linux-config">Linux</TabsTrigger>
                            <TabsTrigger value="windows-config">Windows</TabsTrigger>
                          </TabsList>

                          <TabsContent value="macos-config">
                            <CodeBlock
                              code={`{
  "mcpServers": {
    "imagesorcery-mcp": {
      "command": "imagesorcery-mcp",
      "transportType": "stdio",
      "autoApprove": ["blur", "change_color", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
      "timeout": 100
    }
  }
}`}
                              language="json"
                              codeBlockId="pipx-config-macos"
                              copiedStates={copiedStates}
                              onCopy={onCopy}
                            />
                          </TabsContent>

                          <TabsContent value="linux-config">
                            <CodeBlock
                              code={`{
  "mcpServers": {
    "imagesorcery-mcp": {
      "command": "imagesorcery-mcp",
      "transportType": "stdio",
      "autoApprove": ["blur", "change_color", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
      "timeout": 100
    }
  }
}`}
                              language="json"
                              codeBlockId="pipx-config-linux"
                              copiedStates={copiedStates}
                              onCopy={onCopy}
                            />
                          </TabsContent>

                          <TabsContent value="windows-config">
                            <CodeBlock
                              code={`{
  "mcpServers": {
    "imagesorcery-mcp": {
      "command": "imagesorcery-mcp.exe",
      "transportType": "stdio",
      "autoApprove": ["blur", "change_color", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
      "timeout": 100
    }
  }
}`}
                              language="json"
                              codeBlockId="pipx-config-windows"
                              copiedStates={copiedStates}
                              onCopy={onCopy}
                            />
                          </TabsContent>
                        </Tabs>
                      </div>
                    </TabsContent>

                    <TabsContent value="manual-venv" className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Manual Virtual Environment (Plan B)</h4>
                        <p className="text-muted-foreground mb-4">
                          If pipx doesn't work for your system, you can manually create a virtual environment. For reliable installation of all components, it is strongly recommended to use Python's built-in venv module.
                        </p>

                        <Tabs
                          defaultValue="macos-manual"
                          className="w-full"
                          onValueChange={(value) =>
                            trackEvent('tab_select', {
                              tab_group: 'manual_venv_os',
                              selected_tab: value,
                            })
                          }
                        >
                          <TabsList className="grid w-full grid-cols-3 mb-4">
                            <TabsTrigger value="macos-manual">macOS</TabsTrigger>
                            <TabsTrigger value="linux-manual">Linux</TabsTrigger>
                            <TabsTrigger value="windows-manual">Windows</TabsTrigger>
                          </TabsList>

                          <TabsContent value="macos-manual">
                            <CodeBlock
                              code={`# 1. Create and activate a virtual environment
python -m venv imagesorcery-mcp
source imagesorcery-mcp/bin/activate

# 2. Install ImageSorcery MCP
pip install imagesorcery-mcp

# 3. Run the crucial post-installation script (downloads models & sets up CLIP)
imagesorcery-mcp --post-install`}
                              language="bash"
                              codeBlockId="macos-manual-install"
                              copiedStates={copiedStates}
                              onCopy={onCopy}
                            />
                          </TabsContent>

                          <TabsContent value="linux-manual">
                            <CodeBlock
                              code={`# 1. Create and activate a virtual environment
python -m venv imagesorcery-mcp
source imagesorcery-mcp/bin/activate

# 2. Install ImageSorcery MCP
pip install imagesorcery-mcp

# 3. Run the crucial post-installation script (downloads models & sets up CLIP)
imagesorcery-mcp --post-install`}
                              language="bash"
                              codeBlockId="linux-manual-install"
                              copiedStates={copiedStates}
                              onCopy={onCopy}
                            />
                          </TabsContent>

                          <TabsContent value="windows-manual">
                            <CodeBlock
                              code={`# 1. Create and activate a virtual environment
python -m venv imagesorcery-mcp
imagesorcery-mcp\\Scripts\\activate # For Windows Cmd
# OR, for Windows Bash:
# source imagesorcery-mcp/Scripts/activate

# 2. Install ImageSorcery MCP
pip install imagesorcery-mcp

# 3. Run the crucial post-installation script (downloads models & sets up CLIP)
imagesorcery-mcp.exe --post-install`}
                              language="bash"
                              codeBlockId="windows-manual-install"
                              copiedStates={copiedStates}
                              onCopy={onCopy}
                            />
                          </TabsContent>
                        </Tabs>

                        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                          <p className="text-yellow-400 text-sm">
                            <strong>Important:</strong> The --post-install step downloads essential models and configures critical components. Don't skip it!
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4">Configure Your MCP Client</h4>
                        <p className="text-muted-foreground mb-4">
                          When using manual virtual environment, you'll need to provide the full path to the executable:
                        </p>

                        <Tabs
                          defaultValue="macos-manual-config"
                          className="w-full"
                          onValueChange={(value) =>
                            trackEvent('tab_select', {
                              tab_group: 'manual_config_os',
                              selected_tab: value,
                            })
                          }
                        >
                          <TabsList className="grid w-full grid-cols-3 mb-4">
                            <TabsTrigger value="macos-manual-config">macOS</TabsTrigger>
                            <TabsTrigger value="linux-manual-config">Linux</TabsTrigger>
                            <TabsTrigger value="windows-manual-config">Windows</TabsTrigger>
                          </TabsList>

                          <TabsContent value="macos-manual-config">
                            <CodeBlock
                              code={`{
  "mcpServers": {
    "imagesorcery-mcp": {
      "command": "/full/path/to/venv/bin/imagesorcery-mcp",
      "transportType": "stdio",
      "autoApprove": ["blur", "change_color", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
      "timeout": 100
    }
  }
}`}
                              language="json"
                              codeBlockId="macos-manual-config"
                              copiedStates={copiedStates}
                              onCopy={onCopy}
                            />
                          </TabsContent>

                          <TabsContent value="linux-manual-config">
                            <CodeBlock
                              code={`{
  "mcpServers": {
    "imagesorcery-mcp": {
      "command": "/full/path/to/venv/bin/imagesorcery-mcp",
      "transportType": "stdio",
      "autoApprove": ["blur", "change_color", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
      "timeout": 100
    }
  }
}`}
                              language="json"
                              codeBlockId="linux-manual-config"
                              copiedStates={copiedStates}
                              onCopy={onCopy}
                            />
                          </TabsContent>

                          <TabsContent value="windows-manual-config">
                            <CodeBlock
                              code={`{
  "mcpServers": {
    "imagesorcery-mcp": {
      "command": "C:\\\\full\\\\path\\\\to\\\\venv\\\\Scripts\\\\imagesorcery-mcp.exe",
      "transportType": "stdio",
      "autoApprove": ["blur", "change_color", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
      "timeout": 100
    }
  }
}`}
                              language="json"
                              codeBlockId="windows-manual-config"
                              copiedStates={copiedStates}
                              onCopy={onCopy}
                            />
                          </TabsContent>
                        </Tabs>
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
