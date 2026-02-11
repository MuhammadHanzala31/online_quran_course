import SectionLayout from '@/app/components/SectionLayout'
import Image from 'next/image'
import React from 'react'
import blank from '@/../public/single-t-7.png'

export default function Discover() {
    return <SectionLayout>
        <div className='text-center mx-auto max-w-[686px]'>
            <h6 className='text-[32px] font-poppins font-medium text-[black] my-5'>Discover Excellence with Our Female Quran Teachers Online </h6>
        </div>
        <div className='flex -gap-5 lg:flex-row flex-col items-center'>
            <div className='w-1/2 flex justify-center'>
                <Image src={blank} alt='sorry' />
            </div>
            <div className='w-1/2 flex flex-col gap-4 pr-6'>
                <h6 className='text-black font-semibold font-poppins text-[24px]'>Best Academy</h6>
                <p className='text-[#1B1B1B] font-poppins text-[16px] font-normal'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem</p>
            </div>
        </div>
    </SectionLayout>
}
