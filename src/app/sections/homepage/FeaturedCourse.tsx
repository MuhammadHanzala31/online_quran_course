"use client"


import CourseCard from '@/app/components/homepage/CourseCard'
import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'
import FIcon1 from '@/../public/f-icon-1.png'
import FIcon2 from '@/../public/f-icon-2.png'
import FIcon3 from '@/../public/f-icon-3.png'
import FIcon4 from '@/../public/f-icon-4.png'
import Image from 'next/image'
import Slider from "react-slick";





export default function FeaturedCourse() {

    const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };




    return (
        <div className='relative'>
            <SectionLayout className='relative z-2' >
                <div className='mb-[50px] flex flex-col gap-6 mx-auto text-center justify-center' >
                    <h5 className='text-4xl font-poppins font-medium'><span className='text-[#098A46]'>Featured Online Quran Courses </span>  By OQC Academy</h5>
                    <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[614px]'>At OQC Academy, our online Quran classes feature a thoroughly designed curriculum tailored for learners of all ages and levels. Explore our Featured Courses with engaging lessons, personalized guidance, and flexible tuition for learners of all ages and levels.</p>
                </div>
                <div className='slider-container' data-aos="zoom-in-up">
                    <Slider {...settings}>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    </Slider>
                </div>
                <div className='mt-[32px] flex gap-2 lg:w-2/3 w-full pr-2 '>
                    <div className='py-6 px-9 border-2 lg:w-1/4 w-1/2 border-white flex flex-col justify-center items-center gap-3'>
                        <Image src={FIcon1} alt='f-icon1'/>
                        <h3 className='text-4xl text-white font-semibold font-poppins'>20k+</h3>
                        <span className='text-white text-[14px] font-poppins font-medium'>Satisfied Student</span>
                    </div>
                    <div className='py-6 px-9 border-2 lg:w-1/4 w-1/2 border-white flex flex-col justify-center items-center gap-3'>
                        <Image src={FIcon2} alt='f-icon1'/>
                        <h3 className='text-4xl text-white font-semibold font-poppins'>240+</h3>
                        <span className='text-white text-[14px] font-poppins font-medium'>Class Completed</span>
                    </div>
                    <div className='py-6 px-9 border-2 lg:w-1/4 w-1/2 border-white flex flex-col justify-center items-center gap-3'>
                        <Image src={FIcon3} alt='f-icon1'/>
                        <h3 className='text-4xl text-white font-semibold font-poppins'>1200+</h3>
                        <span className='text-white text-[14px] font-poppins font-medium'>Active Students</span>
                    </div>
                    <div className='py-6 px-9 border-2 lg:w-1/4 w-1/2 border-white flex flex-col justify-center items-center gap-3'>
                        <Image src={FIcon4} alt='f-icon1'/>
                        <h3 className='text-4xl text-white font-semibold font-poppins'>400+</h3>
                        <span className='text-white text-[14px] font-poppins font-medium'>Experts Instructors</span>
                    </div>
                </div>
            </SectionLayout>
            <div data-aos="zoom-in-left" className='bg-[#098A46] lg:pt-[280px] pt-[400px] pb-9 lg:w-2/3 w-full -left-3 absolute bottom-0 z-0 rounded-2xl ' >
            </div>
        </div>
    )
}

