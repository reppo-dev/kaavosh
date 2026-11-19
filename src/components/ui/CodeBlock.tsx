"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * CODE BLOCK — dark code window with copy button.
 * Consumed by: interview Q&A answers, stage resources.
 */
export function CodeBlock({
  code,
  language,
  caption,
}: {
  code: string;
  language: string;
  caption?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0c14]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-3.5 py-2">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#fb7185]/70" />
            <span className="size-2.5 rounded-full bg-[#fbbf24]/70" />
            <span className="size-2.5 rounded-full bg-[#34d399]/70" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            {language}
          </span>
        </div>
        <button
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy code"}
          className="flex size-7 items-center justify-center rounded-md text-white/45 transition hover:bg-white/10 hover:text-white"
        >
          {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
        </button>
      </div>
      <pre dir="ltr" className="overflow-x-auto px-4 py-3.5 text-start">
        <code className="font-mono text-[13px] leading-relaxed text-[#c9cfdf]">
          {code}
        </code>
      </pre>
      {caption && (
        <p className="border-t border-white/[0.06] px-4 py-2 text-xs text-white/45">
          {caption}
        </p>
      )}
    </div>
  );
}
