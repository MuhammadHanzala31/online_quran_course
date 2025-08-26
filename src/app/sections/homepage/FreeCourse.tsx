import React from 'react'
import SectionLayout from '../../components/SectionLayout'
import FreeCourseCard from '@/app/components/homepage/FreeCourseCard'

export default function FreeCourse() {
  return (
    <SectionLayout>
      <div className='mb-[50px] flex flex-col gap-4 mx-auto text-center justify-center' >
        <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[614px]'>Bonus Free Courses with Your Featured Course Enrollment</p>
        <h5 className='text-4xl font-poppins font-medium max-w-[614px] mx-auto'>Free Online Quran Classes <span className='text-[#098A46]'>By OQC Academy</span></h5>
      </div>
      <div className='grid grid-cols-3 space-x-2 space-y-2' data-aos="zoom-in-up">
        <FreeCourseCard/>
        <FreeCourseCard/>
        <FreeCourseCard/>
        <FreeCourseCard/>
        <FreeCourseCard/>
      </div>
    </SectionLayout>
  )
}
