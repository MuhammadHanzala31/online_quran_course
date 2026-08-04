"use client";

import { useEffect, useRef } from "react";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

const buttons: { label: string; command: string; arg?: string; title: string }[] = [
  { label: "B", command: "bold", title: "Bold" },
  { label: "I", command: "italic", title: "Italic" },
  { label: "U", command: "underline", title: "Underline" },
  { label: "H2", command: "formatBlock", arg: "H2", title: "Heading" },
  { label: "❝", command: "formatBlock", arg: "BLOCKQUOTE", title: "Quote" },
  { label: "•", command: "insertUnorderedList", title: "Bullet list" },
  { label: "1.", command: "insertOrderedList", title: "Numbered list" },
  { label: "🔗", command: "createLink", title: "Insert link" },
  { label: "✕", command: "removeFormat", title: "Clear formatting" },
];

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (ref.current && isFirstRender.current) {
      ref.current.innerHTML = value || "";
      isFirstRender.current = false;
    }
  }, [value]);

  const exec = (command: string, arg?: string) => {
    if (command === "createLink") {
      const url = window.prompt("Enter URL");
      if (!url) return;
      document.execCommand(command, false, url);
    } else {
      document.execCommand(command, false, arg);
    }
    ref.current?.focus();
    handleInput();
  };

  const handleInput = () => {
    if (ref.current) onChange(ref.current.innerHTML);
  };

  return (
    <div className="border border-brand-dark/15 rounded-xl overflow-hidden bg-white">
      <div className="flex flex-wrap gap-1 border-b border-brand-dark/10 bg-brand-dark-light px-2 py-2">
        {buttons.map((b) => (
          <button
            key={b.label}
            type="button"
            title={b.title}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec(b.command, b.arg)}
            className="min-w-[32px] h-8 px-2 rounded-md text-sm font-semibold text-brand-dark bg-white border border-brand-dark/10 hover:bg-brand-yellow-light hover:border-brand-yellow transition-colors"
          >
            {b.label}
          </button>
        ))}
      </div>
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        data-placeholder={placeholder}
        className="prose-content min-h-[220px] max-h-[480px] overflow-y-auto px-4 py-3 text-sm focus:outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-brand-dark-soft/50"
      />
    </div>
  );
}