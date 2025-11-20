import SectionLayout from '@/app/components/SectionLayout'
import BestAcademyDiv from '@/app/components/single-course/BestAcademyDiv'
import React from 'react'

export default function BestAcademey() {
    return <SectionLayout>
        <div className='flex justify-start text-start my-3'>
            <h3 className='text-black font-poppins text-[36px] font-medium'>Best Academy for the Courses</h3>
        </div>
        <div className='flex flex-col gap-3'>
            <BestAcademyDiv />
            <BestAcademyDiv />
            <BestAcademyDiv />
        </div>
    </SectionLayout>

}
