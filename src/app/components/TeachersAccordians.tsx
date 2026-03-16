"use client"

import { Imprima } from "next/font/google"
import Image from "next/image"
import { useState } from "react"
import image1 from '@/../public/single-t-5.png'

export default function TeachersAccordians() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  const accordionItems = [
    {
      title: "Certification Verification",
      items: [
        "We meticulously verify Ijazas and formal Islamic certifications from recognized institutes to confirm their profound knowledge in Tajweed, Hifz, and Islamic studies.",
      ],
    },
    {
      title: "Virtual Classroom Mastery",
      items: [
        "Candidates undergo live teaching demos to evaluate their practical teaching methods, patience, and ability to engage students effectively in a virtual setting. "
      ],
    },
    {
      title: "Language Proficiency Test",
      items: [
        "Tutors must demonstrate excellent fluency in English (or the teaching language) to ensure seamless communication and clear instruction for every student enrolled. "
      ],
    },
    {
      title: "Continuous Training",
      items: [
        "All selected teachers participate in ongoing professional development focused on the Advanced LMS and modern online educational best practices. "
      ],
    },
  ]

  return (
    <main className="w-full">
      <section className="min-h-screen bg-gradient-to-r from-[#5BC05A] to-[#4CAF50] flex items-center justify-center px-6 py-20">
        <div className="max-w-[1330px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="font-poppins text-[36px] font-normal">Thorough Selection & Training Process</h1>
              <p className="text-[16px] font-poppins font-normal">
                Our rigorous vetting and continuous development program guarantees that every OQC Academy tutor is not only a certified scholar but also an effective online educator. We prioritize expertise, patience, and student engagement in every step of our process.
              </p>
            </div>

            <div className=" ">
              {accordionItems.map((item, index) => (
                <div key={index} className="border-b border-white/20 ">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="w-full flex items-center justify-between pt-4 text-left hover:opacity-80 transition-opacity"
                  >
                    <div className="flex items-center gap-3 ">
                      <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-[#4CAF50]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    {/* <svg
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
                    </svg> */}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300  ml-2.5 border-l border-l-white ${openAccordion === index ? "max-h-96  py-2" : "max-h-0"
                      }`}
                  >
                    <ul className=" ml-9 pb-4 text-base  opacity-95 list-none ">
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
          <div className="flex justify-center items-center">
            <div className="w-[400px] h-[400px] bg-white rounded-full shadow-2xl flex items-center justify-center">
              <Image src={image1} alt="image1" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
