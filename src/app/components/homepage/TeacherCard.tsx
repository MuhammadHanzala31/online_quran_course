import Image from 'next/image'
import React from 'react'
import teacherCard from '@/../public/teacher-card.png'

export default function TeacherCard({ order, className, name1, designation1, name2, designation2 }: { order?: string, className?: string, name1?: string, designation1?: string, name2?: string, designation2?: string }) {
    return (
        <div className='flex lg:flex-row flex-col gap-9'>
        <div className={`flex flex-col gap-4 items-center ${className}`}>
            <Image src={teacherCard} alt='teacher' className='upAndDown' />
            <div className={`${order ? order : 'order-2'} text-center`}>
                <h4 className='font-poppins text-[22px] font-medium text-black'>{name1}</h4>
                <p className='font-poppins text-[12px] font-normal text-black'>{designation1}</p>
            </div>
        </div>
        <div className={`flex flex-col gap-4 items-center mt-14 ${className}`}>
            <div className={`text-center`}>
                <h4 className='font-poppins text-[22px] font-medium text-black'>{name2}</h4>
                <p className='font-poppins text-[12px] font-normal text-black'>{designation2}</p>
            </div>
            <Image src={teacherCard} alt='teacher' className='downAndUp' />
        </div>
        </div>
    )
}
