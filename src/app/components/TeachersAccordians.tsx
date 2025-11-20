"use client"

import { useState } from "react"

export default function TeachersAccordians() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  const accordionItems = [
    {
      title: "Header layout.",
      items: [
        "Lorem ipsum is simply dummy text of the printing lorem ipsum is simply dummy text of the.",
        "Lorem ipsum is simply dummy text of the printing lorem ipsum is simply dummy text of the.",
        "Lorem ipsum is simply dummy text of the printing lorem ipsum is simply dummy text of the.",
      ],
    },
    {
      title: "Header layout.",
      items: [
        "Lorem ipsum is simply dummy text of the printing lorem ipsum is simply dummy text of the.",
        "Lorem ipsum is simply dummy text of the printing lorem ipsum is simply dummy text of the.",
      ],
    },
    {
      title: "Header layout.",
      items: [
        "Lorem ipsum is simply dummy text of the printing lorem ipsum is simply dummy text of the.",
        "Lorem ipsum is simply dummy text of the printing lorem ipsum is simply dummy text of the.",
      ],
    },
  ]

  return (
    <main className="w-full">
      <section className="min-h-screen bg-gradient-to-r from-[#5BC05A] to-[#4CAF50] flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="font-poppins text-[36px] font-normal">Thorough Selection & Training Process</h1>
              <p className="text-[16px] font-poppins font-normal">
                Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy.
              </p>
            </div>

            <div className="space-y-4 ">
              {accordionItems.map((item, index) => (
                <div key={index} className="border-b border-white/20 ">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left hover:opacity-80 transition-opacity"
                  >
                    <div className="flex items-center gap-3 ">
                      <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${openAccordion === index ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300  border-l border-l-white ${openAccordion === index ? "max-h-96" : "max-h-0"
                      }`}
                  >
                    <ul className="space-y-2 ml-9 pb-4 text-base opacity-95">
                      {item.items.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-2">
                          <span className="text-white/70 mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Circle */}
          <div className="flex justify-center items-center">
            <div className="w-[400px] h-[400px] bg-white rounded-full shadow-2xl flex items-center justify-center">
              <h2 className="text-3xl font-normal font-poppins text-[#4CAF50]">Creative</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
