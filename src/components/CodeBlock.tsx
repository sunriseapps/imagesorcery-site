
import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy, CheckCircle } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  codeBlockId: string;
  copiedStates: { [key: string]: boolean };
  onCopy: (text: string, key: string) => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  filename,
  codeBlockId,
  copiedStates,
  onCopy,
}) => {
  const handleManualCopy = () => {
    trackEvent('code_copy', {
      method: 'manual_selection',
      code_block_id: codeBlockId,
    });
  };

  return (
    <div className="relative">
      {filename && (
        <div className="bg-muted/20 px-4 py-2 text-sm text-muted-foreground border-b border-muted/20 rounded-t-lg">
          {filename}
        </div>
      )}
      <div className="bg-black/70 backdrop-blur-sm p-4 rounded-lg relative">
        <div className="overflow-x-auto">
          <pre className="text-sm" onCopy={handleManualCopy}>
            <code className={`language-${language} text-primary whitespace-pre`}>
              {code}
            </code>
          </pre>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="absolute top-3 right-3 bg-primary/30 border-primary/50 text-white hover:bg-primary hover:text-white transition-all duration-200"
          onClick={() => onCopy(code, codeBlockId)}
        >
          {copiedStates[codeBlockId] ? (
            <>
              <CheckCircle className="w-4 h-4 mr-1" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CodeBlock;
