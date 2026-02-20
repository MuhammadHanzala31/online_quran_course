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
                {/* <h6 className='text-black font-semibold font-poppins text-[24px]'>Best Academy</h6> */}
                <p className='text-[#1B1B1B] font-poppins text-[16px] font-normal'>At OQC Institute, we strive to make Quranic education accessible and comfortable for everyone by offering live one-on-one sessions with our highly qualified female Quran teachers online. Each of our educators is a certified Hafiza or Islamic scholar, trained in teaching Tajweed, Tafseer, and essential Islamic studies with clarity and precision</p>
                <p className='text-[#1B1B1B] font-poppins text-[16px] font-normal'>Our female tutors combine strong religious understanding with professional teaching expertise to deliver impactful virtual lessons. By using modern digital tools and interactive methods, they ensure classes are organized, engaging, and easy to follow for students of all ages.</p>
                <p className='text-[#1B1B1B] font-poppins text-[16px] font-normal'>Whether teaching young girls beginning their Quranic journey or assisting women who wish to strengthen their recitation and Islamic knowledge, our female Quran teachers provide a supportive, respectful, and motivating learning environment tailored to every student’s needs.</p>
            </div>
        </div>
    </SectionLayout>
}
