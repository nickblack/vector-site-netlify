"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CopyableTemplateProps {
  title: string;
  content: string;
  className?: string;
}

export function CopyableTemplate({ title, content, className }: CopyableTemplateProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className={cn("bg-dark border-white/10", className)}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider">
            {title}
          </h4>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="text-white/40 hover:text-white hover:bg-white/10 shrink-0 h-8 w-8 p-0"
          >
            {copied ? <Check className="h-4 w-4 text-acid-green" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <p className="text-white font-mono text-sm leading-relaxed whitespace-pre-wrap">
          {content}
        </p>
      </CardContent>
    </Card>
  );
}
