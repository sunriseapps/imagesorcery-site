
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
  const highlightCode = (code: string, lang: string) => {
    // Simple syntax highlighting for bash and JSON
    if (lang === 'bash') {
      return code
        .replace(/(#.*$)/gm, '<span class="text-green-400">$1</span>')
        .replace(/^(\w+)/gm, '<span class="text-blue-400">$1</span>')
        .replace(/(".*?")/g, '<span class="text-yellow-400">$1</span>');
    } else if (lang === 'json') {
      return code
        .replace(/(".*?")\s*:/g, '<span class="text-blue-400">$1</span>:')
        .replace(/:\s*(".*?")/g, ': <span class="text-green-400">$1</span>')
        .replace(/\/\/.*$/gm, '<span class="text-gray-500">$&</span>');
    }
    return code;
  };

  return (
    <div className="relative">
      {filename && (
        <div className="bg-muted/20 px-4 py-2 text-sm text-muted-foreground border-b border-muted/20 rounded-t-lg">
          {filename}
        </div>
      )}
      <div className="bg-black/70 backdrop-blur-sm p-4 rounded-lg relative overflow-x-auto">
        <pre className="text-sm">
          <code 
            dangerouslySetInnerHTML={{ 
              __html: highlightCode(code, language) 
            }}
            className="text-green-400 whitespace-pre-wrap"
          />
        </pre>
        <Button
          size="sm"
          variant="outline"
          className="absolute top-3 right-3 bg-muted/20 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-200"
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
