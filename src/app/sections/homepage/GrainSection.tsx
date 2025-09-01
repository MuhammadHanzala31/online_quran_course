import GrainCard from '@/app/components/homepage/GrainCard'
import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'

export default function GrainSection() {
    return (
        <SectionLayout>
            <div className='mb-[50px] flex flex-col gap-6 mx-auto text-center justify-center' >
                <h5 className='text-4xl font-poppins font-medium max-w-[614px] mx-auto'> Gains From Learning  <span className='text-[#098A46]'>Quran Online in USA</span></h5>
                <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[614px]'>Learning the Quran online in the USA offers flexibility, personalized attention, and access to qualified tutors. Students can progress at their own pace, strengthen their recitation, deepen understanding, and apply Islamic teachings in everyday life.</p>
            </div>
            <div className='grid grid-cols-3 mt-4 space-x-[47px] space-y-2'>
                <GrainCard/>
                <GrainCard/>
                <GrainCard/>
            </div>
            <div className='grid grid-cols-3 mt-4 space-x-[47px] space-y-2'>
                <GrainCard/>
                <GrainCard/>
                <GrainCard/>
            </div>
            <div className='grid grid-cols-3 mt-4 space-x-[47px] space-y-2'>
                <GrainCard/>
                <GrainCard/>
                <GrainCard/>
            </div>
        </SectionLayout>
    )
}
