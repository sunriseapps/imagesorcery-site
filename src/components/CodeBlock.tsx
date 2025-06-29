
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, CheckCircle } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  copyKey: string;
  copiedStates: { [key: string]: boolean };
  onCopy: (text: string, key: string) => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'bash', 
  filename,
  copyKey,
  copiedStates,
  onCopy 
}) => {
  return (
    <div className="relative">
      {filename && (
        <div className="bg-muted/20 px-4 py-2 text-sm text-muted-foreground border-b border-muted/20 rounded-t-lg">
          {filename}
        </div>
      )}
      <div className="bg-black/70 backdrop-blur-sm p-4 rounded-lg relative overflow-x-auto">
        <pre className="text-sm">
          <code className="text-primary whitespace-pre-wrap">
            {code}
          </code>
        </pre>
        <Button
          size="sm"
          variant="outline"
          className="absolute top-3 right-3 bg-primary/30 border-primary/50 text-white hover:bg-primary hover:text-white transition-all duration-200"
          onClick={() => onCopy(code, copyKey)}
        >
          {copiedStates[copyKey] ? (
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
