import React from 'react'
import SectionLayout from '../components/SectionLayout'
import kid1 from '@/../public/kid1.png'
import kid2 from '@/../public/kid2.png'
import kids from '@/../public/kids-about.png'
import Image from 'next/image'
import FaqsSection from '../sections/homepage/FaqsSection'
import RequestFormSection from '../sections/homepage/RequestFormSection'
import Aboutus from '../sections/homepage/Aboutus'
import OurMission from '../sections/homepage/OurMission'
import WhyChoose from '../sections/homepage/WhyChoose'
import Teachers from '../sections/homepage/Teachers'
import FreeCourseCard from '../components/homepage/FreeCourseCard'
import StepsSection from '../sections/homepage/StepsSection'
import girl from '@/../public/girl.png'


export default function page() {
    return (
        <>
            <SectionLayout>
                <div className='flex lg:flex-row flex-col gap-6'>
                    <div className='flex flex-col gap-2.5 self-start lg:w-1/2 w-full'>
                        <h6 className='text=black text-2xl font-semibold font-poppins'>Lorem Ipsum is simply</h6>
                        <h2 className='text-[64px] font-jakarta font-bold text-black'>Online <span className='text-[#098A46]'> Quran Classes</span>  For Kids.</h2>
                        <h6 className='text=black text-2xl font-semibold font-poppins'>Lorem Ipsum is simply</h6>
                        <p className='text-[#535353] font-poppins font-normal text-[16px]'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  </p>
                        <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white w-fit py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46]">
                            Get Enrolled Now
                        </button>
                    </div>
                    <div className='lg:w-1/2 w-full text-center flex justify-end'>
                        <Image src={kid1} alt='sorry' height={450} />
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className='flex lg:flex-row flex-col gap-6'>
                    <div className='lg:w-1/2 w-full text-center flex justify-start'>
                        <Image src={kid2} alt='sorry' height={450} />
                    </div>
                    <div className='flex flex-col gap-4 self-start lg:w-1/2 w-full'>
                        <h3 className='text-4xl font-poppins font-medium  max-w-[336px] w-full'>Best <span className='text-[#098A46]'> Online Quran Classes </span>  For Adults</h3>
                        <p className='text-[#535353] font-poppins font-normal text-[16px] max-w-[571px]'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  </p>
                        <div className='flex gap-4.5 items-center'>
                            <div className='flex items-center gap-2'>
                                <Image src={kids} alt='sorry' />
                                <span className='max-w-[170px] font-semibold text-[22px] font-poppins text-[#535353]'>Lorem Ipsum
                                    is simply</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Image src={kids} alt='sorry' />
                                <span className='max-w-[170px] font-semibold text-[22px] font-poppins text-[#535353]'>Lorem Ipsum
                                    is simply</span>
                            </div>
                        </div>
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
            <WhyChoose />
            <Teachers />
            <OurMission />
            <Aboutus />
            <RequestFormSection />
            <FaqsSection />
        </>
    )
}
