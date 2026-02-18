import TeacherBlock from '@/app/components/homepage/TeacherBlock'
import TeacherCard from '@/app/components/homepage/TeacherCard'
import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'

export default function Teachers() {
    return (
        <SectionLayout>
            <div className='mb-[50px] flex flex-col gap-6 mx-auto text-center justify-center' >
                <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[614px]'>Certified & Experienced Quran Tutors</p>
                <h5 className='text-4xl font-poppins font-medium max-w-[614px] mx-auto'>Learn from Expert <span className='text-[#098A46]'>Male & Female</span> Teachers</h5>
                <p className='text-[#535353] text-[16px] font-poppins max-w-[992px] mx-auto'>Learn from Expert Male & Female Teachers <br />
                    Our academy offers skilled male and female Quran tutors, ensuring every student learns comfortably, confidently, and effectively according to their preferences, with personalized guidance for all ages and learning levels.</p>
            </div>
            <div className='flex lg:flex-row flex-col mx-auto max-w-[992px] gap-4'>
                <TeacherBlock />
                <TeacherBlock title='Female Tutors' description='Compassionate, qualified teachers offering respectful and supportive Quran learning for female learners.' bgColor='bg-[#098A46]' textColor='text-white'/>
            </div>
            <div className='flex lg:flex-row flex-col gap-13 mt-[100px]'>
                <TeacherCard/>
                <TeacherCard/>
            </div>
        </SectionLayout>
    )
}
