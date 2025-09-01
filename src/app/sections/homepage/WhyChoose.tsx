import WhYChooseCard from '@/app/components/homepage/WhYChooseCard'
import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'

export default function WhyChoose() {
    return (
        <SectionLayout>
            <div className='mb-[50px] flex flex-col gap-6 mx-auto text-center justify-center' >
                <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[614px]'>Why Choose OQC Academy?</p>
                <h5 className='text-4xl font-poppins font-medium max-w-[614px] mx-auto'>Your Best Choice for  <span className='text-[#098A46]'> Online Quran Classes in USA</span></h5>
                <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[992px]'>Choose OQC Academy for expert-led, flexible online Quran learning for your convenience. Our interactive platform ensures engaging lessons by certified instructors and a diverse curriculum that meets flexible scheduling. Discover how convenient and effective Quran learning can be!</p>
            </div>
            <div className='grid grid-cols-3 space-x-2.5 space-y-16 lg:mt-[123px]'>
                <WhYChooseCard/>
                <WhYChooseCard/>
                <WhYChooseCard/>
                <WhYChooseCard/>
                <WhYChooseCard/>
                <WhYChooseCard/>
            </div>
        </SectionLayout>
    )
}
