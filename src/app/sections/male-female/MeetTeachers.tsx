import MeetTeacherCard from '@/app/components/male-female/MeetTeacherCard'
import SectionLayout from '@/app/components/SectionLayout'
import Image from 'next/image'
import React from 'react'

export default function MeetTeachers() {
    return <SectionLayout>
        <div className='flex justify-start text-start mb-5'>
            <h3 className='text-black font-poppins text-[36px] font-medium'>Meet Our Teachers</h3>
        </div>
        <div className='flex flex-col gap-3'>
            <MeetTeacherCard/>
            <MeetTeacherCard/>
        </div>
    </SectionLayout>
}
