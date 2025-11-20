import SectionLayout from '@/app/components/SectionLayout'
import Image from 'next/image'
import React from 'react'
import blank from '@/../public/Rectangle 295.png'
import AboutCard from '@/app/components/single-course/AboutCard'

export default function AboutCourse() {
    return <SectionLayout>
        <div className='lg:w-1/2 w-full flex flex-col gap-4 mb-6'>
            <h1 className='text-black font-medium font-poppins text-[36px] '>More About this course</h1>
            <p className='text-black font-normal text-[16px] font-poppins'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy.</p>
        </div>
        <div className='flex lg:flex-row flex-col items-center justify-between'>
            <div className='w-1/2'>
                <Image src={blank} alt='sorry' />
            </div>
            <div className='w-1/2 grid grid-cols-2 space-x-3.5 space-y-3.5'>
              <AboutCard/>
              <AboutCard/>
              <AboutCard/>
              <AboutCard/>
            </div>
        </div>
    </SectionLayout>
}
