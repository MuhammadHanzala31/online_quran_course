"use client";
import { useState } from "react";

export default function Accordion({ title, content } : any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-md overflow-hidden transition-all duration-300 cursor-pointer ${
        isOpen ? "bg-[#098A46] text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 font-poppins font-medium text-left"
      >
        <span>{title}</span>
        <span className="text-2xl font-bold">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-sm font-poppins leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
}
