import Accordion from "@/app/components/homepage/Accordians";
import SectionLayout from "@/app/components/SectionLayout";
import Image from "next/image";
import React from "react";
import image from '@/../public/f.png'

export default function FaqsSection() {
  const faqData = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework for building server-rendered and static web applications.",
    },
    {
      question: "Is Tailwind CSS good for Next.js?",
      answer:
        "Yes! Tailwind CSS works seamlessly with Next.js and makes styling faster.",
    },
    {
      question: "How to use this accordion?",
      answer:
        "Just import the Accordion component and pass title and content props.",
    },
  ];

  return (
    <SectionLayout>
      <div className="bg-[#F7F7F7] lg:p-[117px] pb-[40px] flex items-center lg:flex-row flex-col gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          {/* <p className="text-[#535353] text-[16px] font-poppins font-medium">
            FAQ’s
          </p>

          <h5 className="text-4xl font-poppins font-medium">
            Frequently Asked Question
          </h5>

          <p className="text-[#535353] text-[16px] font-poppins font-medium max-w-[453px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <button className="text-[16px] font-poppins font-normal border border-[#098A46] cursor-pointer mt-14 text-white py-2.5 px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] w-fit">
            Apply Now
          </button> */}
          <Image src={image} alt="f-image"/>
        </div>

        {/* Right Accordion */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              title={item.question}
              content={item.answer}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
