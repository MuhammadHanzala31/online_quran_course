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

export default function page() {
    return (
        <>
            <div className='usa-hero overflow-hidden'>
                <SectionLayout>
                    <div className='flex lg:flex-row flex-col items-center w-full'>
                        <div className='lg:w-1/2 w-full'>
                            <div className='flex flex-col gap-9 w-[90%]'>
                                <h2 className='lg:text-6xl text-[32px] font-jakarta font-bold text-black'>Learn <span className='text-[#098A46]'>Quran Online </span>  in  <span className='text-[#098A46]' >USA</span></h2>

                                <p className="text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] ">
                                    Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
                                </p>
                                <div className='flex gap-4 items-center'>
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
                    <div className='lg:w-1/2 w-full flex flex-col gap-6'>
                        <h6 className='font-poppins text-2xl font-semibold text-[#535353]'>Guiding You on Your Quranic Journey</h6>
                        <h3 className='text-4xl font-poppins font-medium leading-[115%]'>OQC Academy – Trusted  <span className='text-[#098A46]'> Online Quran Academy In USA </span></h3>
                        <p className='text-[16px] font-poppins font-medium text-[#535353]'>
                            At OQC Academy, we are committed to helping students of all ages and backgrounds connect deeply with the Holy Quran. As a trusted online Quran academy in the USA, we combine experienced teachers, flexible schedules, and interactive lessons to make Quran learning accessible and engaging. Whether you’re starting from the basics or advancing your Tajweed, our goal is to guide you with care, patience, and dedication.
                        </p>
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
            <div className="bg-[#F6F6F6]">
                <SectionLayout>
                    <h4 className='text-4xl font-medium font-poppins text-black py-9 text-center mx-auto  max-w-[614px]'>Featured <span className='text-[#098A46]'> Courses</span></h4>
                    <div className='grid grid-cols-3 space-x-2 space-y-2' data-aos="zoom-in-up">
                        <FreeCourseCard />
                        <FreeCourseCard />
                        <FreeCourseCard />
                        <FreeCourseCard />
                        <FreeCourseCard />
                    </div>
                </SectionLayout>
            </div>
            <SectionLayout>
                <h4 className='text-4xl font-medium font-poppins text-black py-9 text-center mx-auto  max-w-[614px]'>Free Online Quran Classes  <span className='text-[#098A46]'> By OQC Academy</span></h4>
                <div className='grid grid-cols-3 space-x-2 space-y-2' data-aos="zoom-in-up">
                    <FreeCourseCard />
                    <FreeCourseCard />
                    <FreeCourseCard />
                    <FreeCourseCard />
                    <FreeCourseCard />
                </div>
            </SectionLayout>
            <div className="bg-[#F6F6F6]">
                <SectionLayout>
                    <h4 className='text-4xl font-medium font-poppins text-black py-9 text-center mx-auto  max-w-[614px]'>What The Adults Will Learn In The <span className='text-[#098A46]'>Online Quran Classes </span></h4>
                    <div className='grid grid-cols-3 space-x-2 space-y-2' data-aos="zoom-in-up">
                        <FreeCourseCard />
                        <FreeCourseCard />
                        <FreeCourseCard />
                        <FreeCourseCard />
                        <FreeCourseCard />
                    </div>
                </SectionLayout>
            </div>
            <WhyChoose/>
            <Teachers/>
            <OurMission/>
            <Aboutus/>
            <RequestFormSection/>
            <FaqsSection/>
        </>
    )
}
