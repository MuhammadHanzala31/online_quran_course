"use client";

import { useRef } from "react";

interface ImageDropzoneProps {
  value: string;
  onChange: (dataUrl: string) => void;
}

export default function ImageDropzone({ value, onChange }: ImageDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const readFile = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => readFile(e.target.files?.[0])}
      />
      {value ? (
        <div className="relative group rounded-xl overflow-hidden border border-brand-dark/15">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Featured preview" className="w-full h-56 object-cover" />
          <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="px-3 py-1.5 rounded-full bg-white text-brand-dark text-sm font-semibold"
            >
              Replace
            </button>
            <button
              type="button"
              onClick={() => onChange("")}
              className="px-3 py-1.5 rounded-full bg-white text-red-600 text-sm font-semibold"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="w-full h-56 rounded-xl border-2 border-dashed border-brand-dark/20 flex flex-col items-center justify-center gap-2 text-brand-dark-soft hover:border-brand-green hover:bg-brand-green-light/40 transition-colors"
        >
          <span className="w-10 h-10 rounded-full bg-brand-yellow-light flex items-center justify-center text-brand-yellow-dark text-lg">
            ⬆
          </span>
          <span className="text-sm font-medium">Click to upload featured image</span>
          <span className="text-xs text-brand-dark-soft/70">PNG, JPG up to a few MB</span>
        </button>
      )}
    </div>
  );
}