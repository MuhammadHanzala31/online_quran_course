import React from 'react'
import SectionLayout from '../SectionLayout'
import Faq from './Faq'
import Image from 'next/image'
import blank from '@/../public/Rectangle 295.png'

export default function WhyCourse() {
    return <SectionLayout>
        <div className='lg:w-[45%] w-full flex flex-col gap-4'>

        </div>
        <div className='flex lg:flex-row flex-col items-center justify-between'>
            <div className='w-[45%] flex flex-col gap-5'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-black font-medium font-poppins text-[36px] '>Why Take This Course</h1>
                    <p className='text-black font-normal text-[16px] font-poppins'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy.</p>
                </div>
                <Faq />
            </div>
            <div className='w-1/2'>
                <Image src={blank} alt='sorry' />
            </div>
        </div>
    </SectionLayout>
}
