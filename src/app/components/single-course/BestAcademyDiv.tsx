import React from 'react'
import sec2 from '@/../public/single-c-3.png'
import Image from 'next/image'

export default function BestAcademyDiv() {
    return (
        <div className='flex flex-row justify-between items-center'>
            <div className='w-1/2 flex gap-3 relative  border-l-1 border-green-600 pl-5 py-4'>
                <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                <Image src={sec2} alt='sec2' />
            </div>
            <div className='flex flex-col gap-6 w-1/2'>
                <h1 className='text-black font-medium font-poppins text-[36px] '>Lorem Ipsum is simply</h1>
                <p className='text-black font-normal text-[16px] font-poppins'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy. </p>
                <p className='text-black font-normal text-[16px] font-poppins'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy. </p>
                <p className='text-black font-normal text-[16px] font-poppins'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy. </p>

            </div>
        </div>
    )
} 
