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

export default function page() {
    return (
        <>
            <div className='single-teacher'>
                <div className='max-w-[1400px] w-full mx-auto lg:px-4 px-8 lg:my-[0px] my-7 lg:py-10 py-4 '>
                    <div className='flex lg:flex-row flex-col items-center'>
                        <div className='flex flex-col gap-3 lg:w-[40%] w-full'>
                            <h2 className='text-[54px] font-jakarta font-bold text-black tracking-tight'>Female Quran Teachers at OQC Institute</h2>
                            <p className='text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] '>Discover OQC Institute’s dedicated <strong> Female Quran Teachers </strong>, committed to spreading Quranic knowledge through effective and interactive online learning. Our female instructors are highly skilled in Tajweed, Tarteel, and Quran recitation, offering personalized lessons that help students build a strong and meaningful connection with the Holy Quran from anywhere in the world.</p>
                        </div>
                        <div className='lg:w-1/2 w-full flex justify-center'>
                            <Image src={banner} alt='sorry' />
                        </div>
                    </div>

                </div>
            </div>
            <MeetTeachers />
            <Discover />
            <SectionLayout>
                <div className='text-center'>
                    <h6 className='text-[32px] font-poppins font-medium text-[black] my-5'> What Sets Our Quran Teachers Apart?</h6>
                    <p className='text-[#535353] ] text-[16px] font-poppins font-normal mb-4'>What distinguishes OQC Institute’s <strong> Female Quran Teachers  </strong> is their dedication to each learner’s spiritual and academic success. They blend traditional Islamic scholarship with modern online teaching techniques, making every session productive, meaningful, and customized to individual learning styles.</p>

                </div>
                <div className='flex lg:flex-row flex-col gap-[52px] items-center justify-center'>
                    <ul className='flex-col gap-3 w-1/3 list-disc'>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'><strong>Academic Excellence: </strong>Graduates of reputable Islamic universities and institutes, recognized for their in-depth Quranic and Islamic knowledge.</li>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'><strong>Virtual Expertise: </strong>Professionally trained in online teaching methodologies with strong communication skills and effective digital classroom management.</li>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'><strong>Multilingual Fluency: </strong>Fluent in Arabic, English, Urdu, and other languages to ensure clear communication and understanding for diverse students worldwide.</li>
                    </ul>
                    <div className='w-1/3'>
                        <Image src={single4} alt='sorry' />
                    </div>
                    <ul className='flex-col gap-3 w-1/3 list-disc'>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'><strong>Individualized Attention: </strong>One-on-one classes that allow teachers to adapt lessons according to each student’s progress, comfort, and learning objectives.</li>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'><strong>Encouraging Environment: </strong>A positive, respectful, and motivating atmosphere where students feel supported in their Quranic studies.</li>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'><strong>Comprehensive Curriculum Knowledge: </strong> Experienced in teaching a wide range of Quranic courses — including Noorani Qaida, Tajweed, Hifz, and Tafseer — providing a complete and well-rounded Islamic education experience.</li>
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
