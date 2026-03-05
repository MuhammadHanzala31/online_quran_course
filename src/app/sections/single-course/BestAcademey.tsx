import SectionLayout from '@/app/components/SectionLayout'
import BestAcademyDiv from '@/app/components/single-course/BestAcademyDiv'
import React from 'react'

export default function BestAcademey() {
    return <SectionLayout>
        <div className='flex justify-start text-start my-3'>
            <h3 className='text-black font-poppins text-[36px] font-medium'>A Step-by-Step Journey to Accurate Quran Reading </h3>
            <p className='text-black font-normal text-[16px] font-poppins'>This foundational course is designed to gradually build each student’s reading ability with clarity and confidence. Our syllabus progresses systematically from recognizing individual letters to reading complete Quranic words with proper Tajweed application.</p>
        </div>
        <div className='flex flex-col gap-3'>
            <BestAcademyDiv />
            <BestAcademyDiv />
            <BestAcademyDiv />
        </div>
    </SectionLayout>

}
