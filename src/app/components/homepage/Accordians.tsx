"use client";
import { useState } from "react";

export default function Accordion({ title, content } : any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-none border border-[#098A46] overflow-hidden transition-all duration-300 cursor-pointer ${
        isOpen ? "bg-[#098A46] text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center p-4 font-poppins font-medium text-left ${isOpen ? 'border-b-2 border-white' : null}`}
      >
        <span className="font-bold">{title}</span>
        <span className={`text-2xl font-bold  ${isOpen ? 'bg-white text text-[#098A46] h-8 w-8 flex justify-center items-center rounded-full' : ''}`}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 mt-2 text-sm font-poppins leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
}
