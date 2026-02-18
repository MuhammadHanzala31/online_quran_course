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
          className="lg:w-1/2 w-full flex flex-col gap text-center lg:text-left"
          data-aos="fade-up-right"
        >
          <h5 className="text-sm sm:text-base md:text-lg font-poppins font-normal text-shadow-black">
            Lorem Ipsum is simply dummy text of the printing
          </h5>

          <h1 className="text-shadow-black font-jakarta text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold leading-[140%] relative inline-block">
            Learn{" "}
            <span className="font-poppins text-[#098A46]">Quran Online</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] max-w-[90%] md:max-w-[80%] lg:max-w-[95%] mx-auto lg:mx-0">
           Learning the Quran online has become a convenient and effective way for Muslims to connect with the words of Allah while living far from traditional Islamic centers. With flexible schedules, expert Quran tutors, and interactive platforms, students can study from the comfort of their homes without compromising on quality. Online Quran classes cater to all ages, from beginners to advanced learners, offering lessons in Tajweed, Tafseer, and memorization. This approach not only saves travel time but also allows learners to progress at their own pace, ensuring a deeper understanding of the Quran and its teachings.
          </p>
          <p className="text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] max-w-[90%] md:max-w-[80%] lg:max-w-[95%] mx-auto lg:mx-0">
           For Muslims, online Quran learning bridges the gap between busy lifestyles and spiritual growth. Whether you are a child starting your first lesson or an adult seeking to improve recitation, virtual classes provide personalized guidance to help you stay connected with your faith and build a strong foundation in the Quran.

          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mt-4 justify-center lg:justify-start">
            <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46]">
              Get Enrolled Now
            </button>
            <button className="text-sm sm:text-base md:text-lg font-poppins text-[#098A46] py-2.5 px-6 sm:px-8 bg-transparent border cursor-pointer border-[#098A46] hover:text-white hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46]">
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
