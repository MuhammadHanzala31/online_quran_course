import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'
import about from '@/../public/about.png'
import Image from 'next/image'

export default function Aboutus() {
    return (
        <SectionLayout>
            <div className='flex lg:flex-row flex-col items-center justify-between'>
                <Image src={about} alt='about' />
                <div className='flex flex-col gap-6 max-w-[555px]'>
                    <h5 className='text-4xl font-poppins font-medium'>About  <span className='text-[#098A46]'>OQC </span> Academy</h5>
                    <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[614px]'>OQC Academy is a trusted online Quran learning platform in the USA, dedicated to providing high-quality, accessible Islamic education to students of all ages. We offer expert male and female tutors, flexible schedules, and an advanced learning management system to ensure an engaging and personalized experience. Our goal is to make Quranic knowledge easy to learn, understand, and apply in daily life, fostering a deeper connection with Allah’s words for every learner.</p>
                    <button className='text-[16px] font-poppins font-normal border border-[#098A46] cursor-pointer text-white py-2.5 px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] w-fit'>Get Enrolled Now</button>
                </div>
            </div>
        </SectionLayout>
    )
}
