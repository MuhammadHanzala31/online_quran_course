"use client";

import { useState, KeyboardEvent } from "react";

interface TagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
}

export default function TagInput({ tags, onChange }: TagInputProps) {
  const [draft, setDraft] = useState("");

  const addTag = () => {
    const clean = draft.trim().replace(/,$/, "");
    if (clean && !tags.includes(clean)) {
      onChange([...tags, clean]);
    }
    setDraft("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && !draft && tags.length) {
      onChange(tags.slice(0, -1));
    }
  };

  const removeTag = (tag: string) => {
    onChange(tags.filter((t) => t !== tag));
  };

  return (
    <div className="flex flex-wrap items-center gap-2 border border-brand-dark/15 rounded-xl px-3 py-2 bg-white focus-within:border-brand-green">
      {tags.map((tag) => (
        <span
          key={tag}
          className="flex items-center gap-1 bg-brand-green-light text-brand-green-dark text-xs font-semibold px-3 py-1 rounded-full"
        >
          #{tag}
          <button
            type="button"
            onClick={() => removeTag(tag)}
            className="text-brand-green-dark/70 hover:text-brand-dark"
          >
            ✕
          </button>
        </span>
      ))}
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={addTag}
        placeholder={tags.length ? "Add tag…" : "e.g. nextjs, tailwind, webdev"}
        className="flex-1 min-w-[120px] py-1 text-sm outline-none bg-transparent"
      />
    </div>
  );
}