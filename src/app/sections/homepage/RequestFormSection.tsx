import RequestForm from '@/app/components/homepage/RequestForm'
import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'

export default function RequestFormSection() {
    return (
        <SectionLayout className='bg-[#098A46] r-form'>
            <div className='flex lg:flex-row flex-col justify-between items-center max-w-[1153px] mx-auto'>
                <div className='lg:w-1/2 w-full flex flex-col gap-4'>
                    <p className='text-[#FFFFFF] text-[16px] font-poppins font-medium max-w-[614px]'>Personalized Online Quran Education in USA</p>
                    <h5 className='text-4xl text-[#FFFFFF] font-poppins font-medium max-w-[614px] '> Start Your Journey with OQC Academy Today!</h5>
                    <p className='text-[#FFFFFF] text-[16px] font-poppins font-medium max-w-[453px]'>OQC Academy offers customized Quran lessons tailored to your pace, goals, and comfort. With expert tutors, flexible timings, and engaging methods, we ensure a supportive learning environment for students across the USA, anytime and anywhere.</p>
                    <button className='text-[16px] font-poppins font-normal border text-[#098A46] cursor-pointer bg-white py-2.5 px-8 transition-all hover:shadow-[3px_4px_4px_#098A46] w-fit'>Apply Now</button>
                </div>
                <div className='lg:w-1/2 w-full flex flex-col gap-4'>
                 <RequestForm/>
                </div>
            </div>
        </SectionLayout>
    )
}
