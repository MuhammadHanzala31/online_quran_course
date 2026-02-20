"use client";
import { useState } from "react";

export default function Faq() {
  const faqs = [
    { title: "UI/UX Design", content: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy." },
    { title: "UI/UX Design", content: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing." },
    { title: "UI/UX Design", content: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text." },
    { title: "UI/UX Design", content: "Lorem Ipsum is simply dummy text of the printing." },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, index) => (
        <div key={index} className="shadow-2xl  overflow-hidden">
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
