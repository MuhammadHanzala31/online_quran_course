"use client";

import SectionLayout from "@/app/components/SectionLayout";
import React from "react";
import Slider from "react-slick";
import TestimonialCard from "@/app/components/TestimonialCard";
import test from "node:test";

export default function SliderTestimonial() {

  const testimonials = [
    {
      name: "Ayesha Khan",
      country: "United States",
      review:
        "I am truly grateful for this Online Quran Course. The one-to-one live classes make a huge difference because the teacher gives full attention to my child. I’ve seen clear improvement in tajweed and confidence within just a few weeks. Highly recommended for parents who want quality Quran education at home.",
    },
    {
      name: "Muhammad Bilal",
      country: "United States",
      review:
        "This academy provides excellent live Quran classes. The teacher is patient, knowledgeable, and explains everything clearly. I appreciate the flexible timings, especially since I have a busy work schedule. The personal interaction really helps in correcting mistakes immediately.",
    },
    {
      name: "Fatima Zahra",
      country: "United Kingdom",
      review:
        "My experience with this Online Quran Academy has been wonderful. The one-on-one sessions make learning easy and comfortable. The teacher encourages questions and ensures proper pronunciation. I feel more connected to the Quran now than ever before.",
    },
    {
      name: "Ahmed Raza",
      country: "United Kingdom",
      review:
        "I enrolled my two children in this Online Quran Course, and I am very satisfied. The teachers are professional and well-trained. The live interaction keeps my kids engaged throughout the class. Their recitation has improved significantly.",
    },
    {
      name: "Hafsa Noor",
      country: "United States",
      review:
        "Alhamdulillah, this is one of the best online Quran learning platforms I have come across. The individual attention during the live classes helps me understand tajweed rules properly. The teacher is supportive and very respectful.",
    },
    {
      name: "Umar Farooq",
      country: "United Kingdom",
      review:
        "The one-to-one teaching method is the best part of this academy. The teacher focuses completely on the student and corrects every small mistake. The classes are organized, punctual, and spiritually uplifting. I highly recommend this Online Quran Course to anyone who wants to learn seriously.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
        arrows: false,
      },
    ],
    appendArrows: (slider: any) => (
      <div className="flex justify-center gap-6 items-center mt-10">
        <button
          className="custom-prev w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-200"
          onClick={slider?.slickPrev}
        >
          →
        </button>
        <button
          className="custom-next w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-200"
          onClick={slider?.slickNext}
        >
          ←
        </button>
      </div>
    ),
  };

  return (
    <div className="w-full mx-auto lg:px-4 px-8 lg:my-[70px] my-10 lg:py-5 py-4  ">
      {/* Heading */}
      <div className="mb-[50px] flex flex-col gap-4 mx-auto text-center justify-center">
        <p className="text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[614px]">
          Testimonials of OQC Academy
        </p>
        <h5 className="text-4xl font-poppins font-medium max-w-[614px] mx-auto">
          What Our Students Say About Us
        </h5>
      </div>

      {/* Slider */}
      <Slider {...settings} className="testimonials-s">
        {
          testimonials.map((testi) => (
          <div className="px-3">
            <TestimonialCard name={testi.name} city={testi.country} content={testi.review}/>
          </div>
          ))
        }
      </Slider>
    </div>
  );
}
