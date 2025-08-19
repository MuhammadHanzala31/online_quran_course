import SectionLayout from '@/app/components/SectionLayout'
import Image from 'next/image'
import React from 'react'
import Second1 from '@/../public/second_sec-1.png'
import Second2 from '@/../public/second_sec-2.png'


export default function TrustSection() {
    return (
        <SectionLayout>
            <div className='flex lg:flex-row flex-col items-center lg:px-0'>
                <div className='lg:w-1/2 w-full' data-aos="zoom-in-right">
                    <div className='relative'>
                        <Image src={Second1} alt='second-1' />
                        <Image src={Second2} alt='second-2' className='absolute right-5 -bottom-15 rounded-tr-[100px] rounded-bl-[100px] shadow-2xl upAndDown' />
                    </div>
                </div>
                <div className='lg:w-1/2 w-full flex flex-col text-start gap-6'data-aos="zoom-in-left">
                    <h5 className='text-[16px] font-poppins font-medium text-shadow-black'>Guiding You on Your Quranic Journey</h5>
                    <h3 className='text-4xl font-poppins font-medium leading-[115%]'>OQC Academy – Trusted  <span className='text-[#098A46]'> Online Quran Academy In USA </span></h3>
                    <p className='text-[16px] font-poppins font-medium text-[#535353]'>
                        At OQC Academy, we are committed to helping students of all ages and backgrounds connect deeply with the Holy Quran. As a trusted online Quran academy in the USA, we combine experienced teachers, flexible schedules, and interactive lessons to make Quran learning accessible and engaging. Whether you’re starting from the basics or advancing your Tajweed, our goal is to guide you with care, patience, and dedication.
                    </p>
                    <ul className='text-lg text-black font-poppins font-normal list-disc pl-6'>
                        <li className='mb-1'>Experienced and certified Quran tutors</li>
                        <li className='mb-1'>Flexible scheduling to suit your lifestyle  </li>
                        <li className='mb-1'>One-on-one and group learning options</li>
                        <li className='mb-1'>Interactive, engaging, and result-driven lessons</li>
                    </ul>
                </div>
            </div>
        </SectionLayout>
    )
}
