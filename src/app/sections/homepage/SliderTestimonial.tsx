"use client";

import SectionLayout from "@/app/components/SectionLayout";
import React from "react";
import Slider from "react-slick";
import TestimonialCard from "@/app/components/TestimonialCard";

export default function SliderTestimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
    appendArrows: (slider: any) => (
      <div className="flex justify-center gap-6 items-center mt-10">
        <button
          className="custom-prev w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-200"
          onClick={slider?.slickPrev}
        >
          ←
        </button>
        <button
          className="custom-next w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-200"
          onClick={slider?.slickNext}
        >
          →
        </button>
      </div>
    ),
  };

  return (
    <SectionLayout>
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
        <div className="px-3">
          <TestimonialCard />
        </div>
        <div className="px-3">
          <TestimonialCard />
        </div>
        <div className="px-3">
          <TestimonialCard />
        </div>
        <div className="px-3">
          <TestimonialCard />
        </div>
        <div className="px-3">
          <TestimonialCard />
        </div>
      </Slider>
    </SectionLayout>
  );
}
