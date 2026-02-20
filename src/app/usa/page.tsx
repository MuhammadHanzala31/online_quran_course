import React from 'react'
import SectionLayout from '../components/SectionLayout'
import Image from 'next/image'
import boy from '@/../public/uk-hero.png'
import girl from '@/../public/girl.png'
import StepsSection from '../sections/homepage/StepsSection'
import FreeCourseCard from '../components/homepage/FreeCourseCard'
import WhyChoose from '../sections/homepage/WhyChoose'
import Teachers from '../sections/homepage/Teachers'
import Aboutus from '../sections/homepage/Aboutus'
import RequestFormSection from '../sections/homepage/RequestFormSection'
import FaqsSection from '../sections/homepage/FaqsSection'
import OurMission from '../sections/homepage/OurMission'
import BookForm from '../sections/homepage/BookForm'
import FeaturedCourse from '../sections/homepage/FeaturedCourse'
import FreeCourse from '../sections/homepage/FreeCourse'
import GrainSection from '../sections/homepage/GrainSection'

export default function page() {
    return (
        <>
            <div className='usa-hero overflow-hidden'>
                <SectionLayout>
                    <div className='flex lg:flex-row flex-col items-center w-full'>
                        <div className='lg:w-1/2 w-full'>
                            <div className='flex flex-col gap-2 w-[90%]'>
                                <h2 className='lg:text-6xl text-[32px] font-jakarta font-bold text-black'>Learn <span className='text-[#098A46]'>Quran Online </span>  in  <span className='text-[#098A46]' >USA</span></h2>

                                <p className="text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] ">
                                    Online Quran learning in the USA has become a convenient and effective way for Muslims to stay connected with the words of Allah while living far from nearby mosques or Islamic centers. With flexible schedules, qualified American-based Quran tutors, and interactive virtual platforms, students can study from home without compromising on quality. Our online Quran classes serve children and adults across the United States, from beginners to advanced learners, offering Tajweed, Tafseer, and memorization. This method saves travel time and lets learners progress at a comfortable pace, gaining a deeper understanding of the noble Quran
                                </p>
                                <p className="text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] ">
                                    For Muslims in America, online Quran classes bridge the gap between demanding schedules and spiritual growth. Whether your child is starting their first lesson or you are an adult hoping to refine recitation, our U.S.-based academy offers personalized guidance to stay connected with your faith and build a strong Quran foundation.
                                </p>
                                <div className='flex mt-6 gap-4 items-center'>
                                    <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46]  opacity-70 w-fit">
                                        Get Enrolled Now
                                    </button>
                                    <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#535353] cursor-pointer text-[#272727] py-2.5 px-6 sm:px-8 transition-all hover:shadow-[3px_4px_4px_#098A46] bg-transparent opacity-70 w-fit">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-1/2 w-full flex justify-end'>
                            <Image src={boy} alt='boy' className='relative top-[50px]' />
                        </div>
                    </div>
                </SectionLayout>
            </div>
            <SectionLayout>
                <div className='flex lg:flex-row flex-col'>
                    <div className='lg:w-1/2 w-full'>
                        <Image src={girl} alt='girl' />
                    </div>
                    <div className='lg:w-1/2 w-full flex flex-col text-start gap-6' data-aos="zoom-in-left">
                        <h5 className='text-[16px] font-poppins font-medium text-shadow-black'>Guiding You on Your Quranic Journey</h5>
                        <h3 className='text-4xl font-poppins font-medium leading-[115%]'>OQC Academy – Trusted  <span className='text-[#098A46]'> Online Quran Academy</span> In USA</h3>
                        <p className='text-[16px] font-poppins font-medium text-[#535353]'>
                            At OQC Academy, we are committed to helping students of all ages and backgrounds connect deeply with the Holy Quran. As a trusted online Quran academy in the USA, we combine experienced teachers, flexible schedules, and interactive lessons to make Quran learning accessible and engaging. Whether you’re starting from the basics or advancing your Tajweed, our goal is to guide you with care, patience, and dedication.
                        </p>
                        <ul className='text-lg text-black font-poppins font-normal list-disc pl-6'>
                            <li className='mb-1'>Experienced and certified Quran tutors</li>
                            <li className='mb-1'>Flexible scheduling to suit your lifestyle  </li>
                            <li className='mb-1'>One-on-one and group learning options</li>
                            <li className='mb-1'>Interactive, engaging, and result-driven lessons</li>
                        </ul>
                        <div className='flex items-center gap-5'>
                            <div className='flex flex-col gap-2 px-3 border-r-2 border-[#272727b2]'>
                                <h5 className='text-[#098A46] font-medium font-poppins text-4xl'>500 +</h5>
                                <span className='text-[#535353] text-[16px] font-poppins font-normal'>Students</span>
                            </div>
                            <div className='flex flex-col gap-2 px-3 border-r-2 border-[#272727b2]'>
                                <h5 className='text-[#098A46] font-medium font-poppins text-4xl'>36 +</h5>
                                <span className='text-[#535353] text-[16px] font-poppins font-normal'>Active Courses</span>
                            </div>
                            <div className='flex flex-col gap-2 px-3'>
                                <h5 className='text-[#098A46] font-medium font-poppins text-4xl'>12 +</h5>
                                <span className='text-[#535353] text-[16px] font-poppins font-normal'>Free Courses</span>
                            </div>
                        </div>
                        <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46]  w-fit">
                            Learn More
                        </button>
                    </div>
                </div>
            </SectionLayout>
            <StepsSection />
            <BookForm />
            <FeaturedCourse />
            <div className="bg-[#F6F6F6]">
                <FreeCourse />
            </div>
            <GrainSection />

            <WhyChoose />
            <Teachers />
            <OurMission />
            <Aboutus />
            <RequestFormSection />
            <FaqsSection />
        </>
    )
}
