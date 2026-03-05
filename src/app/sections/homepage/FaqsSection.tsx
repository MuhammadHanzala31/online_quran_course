import Accordion from "@/app/components/homepage/Accordians";
import SectionLayout from "@/app/components/SectionLayout";
import Image from "next/image";
import React from "react";
import image from '@/../public/faq-new.jpg'

export default function FaqsSection() {
  const faqData = [
    {
      question: "Do the classes fit my schedule?",
      answer:
        "Yes. You pick the time that suits you best. Teachers are available 24 hours/day, 7 days/week.",
    },
    {
      question: "Are these pre-recorded lessons?",
      answer:
        "No. All lessons are live with a teacher.",
    },
    {
      question: "Where is your company located?",
      answer:
        "We are an international company with teachers all around the world.",
    },
    {
      question: "How do I start?",
      answer:
        "Just sign up and schedule your first lesson!",
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
          <Image src={image} alt="f-image" height={'500'} width={'400'} className="rounded"/>
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
