import React from 'react'
import SectionLayout from '../components/SectionLayout'
import Image from 'next/image'
import banner from '@/../public/single-t-1.png'
import MeetTeachers from '../sections/male-female/MeetTeachers'
import Discover from '../sections/male-female/Discover'
import RequestFormSection from '../sections/homepage/RequestFormSection'
import TeachersAccordians from '../components/TeachersAccordians'
import single4 from '@/../public/single-t-4.png'
import single6 from '@/../public/single-t-6.png'

export default function page(){
    return (
        <>
            <div className='single-teacher'>
                <div className='max-w-[1400px] w-full mx-auto lg:px-4 px-8 lg:my-[0px] my-7 lg:py-10 py-4 '>
                    <div className='flex lg:flex-row flex-col items-center'>
                        <div className='flex flex-col gap-3 lg:w-[40%] w-full'>
                            <h2 className='text-[54px] font-jakarta font-bold text-black tracking-tight'>Lorem Ipsum is simply</h2>
                            <p className='text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] '>simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                        <div className='lg:w-1/2 w-full flex justify-center'>
                            <Image src={banner} alt='sorry' />
                        </div>
                    </div>

                </div>
            </div>
            <MeetTeachers/>
            <Discover/>
                        <SectionLayout>
                <div className='text-center'>
                    <h6 className='text-[32px] font-poppins font-medium text-[black] my-5'> What Sets Our Quran Teachers Apart?</h6>
                </div>
                <div className='flex lg:flex-row flex-col gap-[52px] items-center justify-center'>
                    <ul className='flex-col gap-3 w-1/3 list-disc'>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem.</li>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem.</li>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem.</li>
                    </ul>
                    <div className='w-1/3'>
                        <Image src={single4} alt='sorry' />
                    </div>
                    <ul className='flex-col gap-3 w-1/3 list-disc'>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem.</li>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem.</li>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem.</li>
                    </ul>
                </div>
            </SectionLayout>
            <TeachersAccordians />
            <SectionLayout>
                <div className='flex lg:flex-row flex-col gap-7 items-center'>
                    <div className='lg:w-1/2 w-full flex justify-end' >
                        <Image src={single6} alt='sorry' />
                    </div>
                    <div className='lg:w-1/2 w-full flex-col gap-2 mt-4' >
                        <h6 className='text-[32px] font-poppins font-medium text-[black]'>Importance Of Quran Learning & Teaching </h6>
                        <p className='text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] '>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the</p>
                    </div>
                </div>
            </SectionLayout>
            <RequestFormSection />
        </>
    )
}
