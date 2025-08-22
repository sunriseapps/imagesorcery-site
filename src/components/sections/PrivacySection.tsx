import React from 'react';
import { Shield, Lock, Eye, Settings } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { trackEvent } from '@/lib/analytics';

const PrivacySection: React.FC = () => {
  const sectionRef = useIntersectionObserver(
    () => {
      trackEvent('section_view', {
        section_id: 'privacy-telemetry',
        section_title: 'Privacy & Telemetry',
      });
    },
    { threshold: 0.25, once: true }
  );

  return (
    <section ref={sectionRef} id="privacy" className="py-20 bg-gradient-darker relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-primary mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold">Privacy & Telemetry</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are committed to your privacy. ImageSorcery MCP runs locally, ensuring your data stays secure.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Lock className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Local Processing</h3>
                    <p className="text-muted-foreground">
                      ImageSorcery MCP is designed to run entirely on your machine, ensuring your images and data never leave your control.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Eye className="w-6 h-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Opt-in Telemetry</h3>
                    <p className="text-muted-foreground">
                      <strong>Telemetry is disabled by default.</strong> You must explicitly opt-in to enable anonymous usage analytics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Settings className="w-6 h-6 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Full Control</h3>
                    <p className="text-muted-foreground">
                      You can enable or disable telemetry at any time through your configuration settings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-purple-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Anonymous Data</h3>
                    <p className="text-muted-foreground">
                      When enabled, only anonymized usage statistics are collected to help improve the software.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">What we collect (when opted-in):</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Features used (e.g., <code className="bg-muted/30 px-2 py-1 rounded text-sm">crop</code>, <code className="bg-muted/30 px-2 py-1 rounded text-sm">detect</code>)</li>
                  <li>• Application version and operating system type</li>
                  <li>• Anonymized tool failures for debugging</li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-400 mb-3">What we NEVER collect:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Image data or file contents</li>
                  <li>• File paths or names</li>
                  <li>• IP addresses or personally identifiable information</li>
                  <li>• Any sensitive or personal data</li>
                </ul>
              </div>

              <div className="bg-muted/20 border border-muted/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Managing Telemetry Settings</h4>
                <p className="text-muted-foreground mb-3">
                  You can control telemetry by setting <code className="bg-muted/30 px-2 py-1 rounded text-sm">enabled = true</code> or <code className="bg-muted/30 px-2 py-1 rounded text-sm">enabled = false</code> in the <code className="bg-muted/30 px-2 py-1 rounded text-sm">[telemetry]</code> section of your <code className="bg-muted/30 px-2 py-1 rounded text-sm">config.toml</code> file.
                </p>
                <p className="text-muted-foreground">
                  During setup, your AI agent will prompt for permission before enabling telemetry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;