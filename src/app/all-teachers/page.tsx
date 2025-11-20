import React from 'react'
import SectionLayout from '../components/SectionLayout'
import Image from 'next/image'
import banner from '@/../public/all-teacher-1.png'
import sec2 from '@/../public/all-teacher-2.png'
import blank from '@/../public/blank.png'
import blank2 from '@/../public/blank_2.png'
import TeachersMainCard from '../components/TeachersMainCard'
import TeachersAccordians from '../components/TeachersAccordians'
import RequestFormSection from '../sections/homepage/RequestFormSection'

export default function page() {
    return (
        <>
            <div className='all-teacher'>
                <div className='max-w-[1400px] w-full mx-auto lg:px-4 px-8 lg:my-[0px] my-7 lg:py-10 py-4 '>
                    <div className='flex lg:flex-row flex-col items-center'>
                        <div className='flex flex-col gap-3 lg:w-1/2 w-full'>
                            <h2 className='text-[64px] font-jakarta font-bold text-black'>Lorem Ipsum is simply Lorem Ipsum is simply</h2>
                            <p className='text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] '>simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                        <div className='lg:w-1/2 w-full flex justify-end'>
                            <Image src={banner} alt='sorry' />
                        </div>
                    </div>

                </div>
            </div>
            <SectionLayout>
                <div className='flex lg:flex-row flex-col items-center'>
                    <div className='lg:w-1/2 w-full'>
                        <Image src={sec2} alt='sorry' />
                    </div>
                    <div className='flex flex-col gap-3 lg:w-[40%] w-full mx-auto'>
                        <h6 className='text-[32px] font-poppins font-medium text-[black]'>Lorem Ipsum is simply </h6>
                        <p className='text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] '>simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className='text-center'>
                    <h6 className='text-[32px] font-poppins font-medium text-[black] my-5'>Meet Our Male /Female Teachers </h6>
                </div>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                    <TeachersMainCard />
                    <TeachersMainCard />
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className='text-center'>
                    <h6 className='text-[32px] font-poppins font-medium text-[black] my-5 max-w-[686px] mx-auto'>Discover Excellence with Online Quran Teachers</h6>
                </div>
                <div className='flex lg:flex-row flex-col gap-8 justify-center '>
                    <div className='bg-[#D9D9D9] p-6 flex-col justify-center gap-2 rounded-2xl'>
                        <h6 className='text-2xl font-semibold font-poppins text-[#000] text-center py-8'>Best Academy</h6>
                        <p className='text-[#1B1B1B] text-[16px] font-poppins font-normal text-center'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum</p>
                    </div>
                    <div className='bg-[#D9D9D9] p-6 flex-col justify-center gap-2 rounded-2xl'>
                        <h6 className='text-2xl font-semibold font-poppins text-[#000] text-center py-8'>Best Academy</h6>
                        <p className='text-[#1B1B1B] text-[16px] font-poppins font-normal text-center'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum</p>
                    </div>
                    <div className='bg-[#D9D9D9] p-6 flex-col justify-center gap-2 rounded-2xl'>
                        <h6 className='text-2xl font-semibold font-poppins text-[#000] text-center py-8'>Best Academy</h6>
                        <p className='text-[#1B1B1B] text-[16px] font-poppins font-normal text-center'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum</p>
                    </div>
                </div>
            </SectionLayout>
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
                        <Image src={blank} alt='sorry' />
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
                        <Image src={blank2} alt='sorry' />
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
