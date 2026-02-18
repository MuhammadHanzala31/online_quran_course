
import SectionLayout from '@/app/components/SectionLayout'
import form from '@/../public/single-c-1.png'
import sec2 from '@/../public/single-c-2.png'
import React from 'react'
import Image from 'next/image'
import FaqsSection from '@/app/sections/homepage/FaqsSection'
import RequestFormSection from '@/app/sections/homepage/RequestFormSection'

import { Metadata } from 'next'
import BestAcademey from '@/app/sections/single-course/BestAcademey'
import StepsSection from '@/app/sections/homepage/StepsSection'
import AboutCourse from '@/app/sections/single-course/AboutCourse'
import WhyCourse from '@/app/components/single-course/WhyCourse'
import SliderTestimonial from '@/app/sections/homepage/SliderTestimonial'


export const metadata: Metadata = {
    title: "Course Details",
};

export default async function Page({ params }:
    { params: Promise<{ slug: string }> 

}) {

    const { slug } = await params;


    return (
        <main>
            <section className='single-banner py-16'>
                <SectionLayout>
                    <div className='flex lg:flex-row flex-col items-center gap-5 justify-between'>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-white font-bold font-jakarta text-[64px] '>Lorem Ipsum is simply</h1>
                            <p className='text-white font-normal text-[16px] font-jakarta'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  </p>
                            <div className='flex gap-4 items-center'>
                                <div className='flex gap-3 items-center'>
                                    <div className='w-[82px] h-[72px] bg-[#FFB706] rounded-md flex justify-center items-center text-black font-poppins font-bold text-[36px]'>6</div>
                                    <div className='w-[82px] h-[72px] bg-[#FFB706] rounded-md flex justify-center items-center text-black font-poppins font-bold text-[36px]'>6</div>
                                </div>

                                <span className='text-white text-lg font-bold'> :</span>

                                <div className='flex gap-3 items-center'>
                                    <div className='w-[82px] h-[72px] bg-[#FFB706] rounded-md flex justify-center items-center text-black font-poppins font-bold text-[36px]'>6</div>
                                    <div className='w-[82px] h-[72px] bg-[#FFB706] rounded-md flex justify-center items-center text-black font-poppins font-bold text-[36px]'>6</div>
                                </div>
                                <span className='text-white text-lg font-bold'> :</span>


                                <div className='flex gap-3 items-center'>
                                    <div className='w-[82px] h-[72px] bg-[#FFB706] rounded-md flex justify-center items-center text-black font-poppins font-bold text-[36px]'>6</div>
                                    <div className='w-[82px] h-[72px] bg-[#FFB706] rounded-md flex justify-center items-center text-black font-poppins font-bold text-[36px]'>6</div>
                                </div>

                            </div>
                        </div>
                        <div className='w-1/2 justify-center flex'>
                            <Image src={form} alt='sorry' />
                        </div>
                    </div>
                </SectionLayout>
            </section>
            <SectionLayout>
                <div className='flex flex-row justify-between items-center'>
                    <div className='w-1/2'>
                        <Image src={sec2} alt='sec2' />
                    </div>
                    <div className='flex flex-col gap-6 w-[45%] justify-end'>
                        <h1 className='text-black font-medium font-poppins text-[36px] '>Lorem Ipsum is simply</h1>
                        <p className='text-black font-normal text-[16px] font-poppins'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy. </p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy. </p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy. </p>

                    </div>
                </div>
            </SectionLayout>
            <BestAcademey/>
            <StepsSection/>
            <AboutCourse/>
            <WhyCourse/>
            <SliderTestimonial/>
            <FaqsSection/>
        </main>
    )
}
