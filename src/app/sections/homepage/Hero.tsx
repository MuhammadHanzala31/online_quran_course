import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'
import BannerImage from '@/../public/banner-main.png'
import BannerTop from '@/../public/banner-top.png'
import BannerBottom from '@/../public/banner-bottom.png'
import Image from 'next/image'
import Yellow from '@/../public/yellow-marker.webp'

export default function Hero() {
  return (
    <SectionLayout>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-0">
        {/* LEFT CONTENT */}
        <div
          className="lg:w-1/2 w-full flex flex-col gap-4 text-center lg:text-left"
          data-aos="fade-up-right"
        >
          <h5 className="text-sm sm:text-base md:text-lg font-poppins font-normal text-shadow-black">
            Lorem Ipsum is simply dummy text of the printing
          </h5>

          <h1 className="text-shadow-black font-jakarta text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold leading-[140%] relative inline-block">
            Learn{" "}
            <span className="font-poppins text-[#098A46]">Quran Online</span> in USA
            <Image
              src={Yellow}
              alt="yellow"
              className="absolute left-0 -bottom-6 sm:-bottom-10 md:-bottom-14 lg:-bottom-30 w-20 sm:w-28 md:w-36 lg:w-auto"
            />
          </h1>

          <p className="text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto lg:mx-0">
            Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mt-4 justify-center lg:justify-start">
            <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] rounded-md">
              Get Enrolled Now
            </button>
            <button className="text-sm sm:text-base md:text-lg font-poppins text-[#098A46] py-2.5 px-6 sm:px-8 bg-transparent border cursor-pointer border-[#098A46] hover:text-white hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] rounded-md">
              See Courses
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="lg:w-1/2 w-full flex items-center justify-center lg:justify-end gap-4"
          data-aos="fade-up-left"
        >
          <Image
            src={BannerImage}
            alt="banner-main"
            className="upAndDown w-[70%] sm:w-[60%] md:w-[50%] lg:w-auto"
          />
          <div className="flex gap-4 flex-col">
            <Image
              src={BannerTop}
              alt="banner-top"
              className="upAndDown w-20 sm:w-24 md:w-28 lg:w-auto"
            />
            <Image
              src={BannerBottom}
              alt="banner-bottom"
              className="downAndUp w-20 sm:w-24 md:w-28 lg:w-auto"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
