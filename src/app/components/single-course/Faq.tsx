"use client";
import { useState } from "react";

interface FaqItem {
  title: string;
  content: string;
}

interface FaqProps {
  faqs: FaqItem[];
}

export default function Faq({ faqs }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {faqs?.map((faq, index) => (
        <div key={index} className="shadow-2xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full bg-[#098A46] text-white text-left px-4 py-2 font-medium"
          >
            {faq.title}
          </button>

          {openIndex === index && (
            <div className="p-4 text-gray-700 bg-white">
              {faq.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}