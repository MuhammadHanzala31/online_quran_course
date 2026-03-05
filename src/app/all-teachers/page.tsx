import React from 'react'
import SectionLayout from '../components/SectionLayout'
import Image from 'next/image'
import banner from '@/../public/all-teacher-1.png'
import sec2 from '@/../public/all-t-2.png'
import at4 from '@/../public/at-4.png'
import blank from '@/../public/blank.png'
import mt from '@/../public/mt.png'
import blank2 from '@/../public/blank_2.png'
import TeachersMainCard from '../components/TeachersMainCard'
import TeachersAccordians from '../components/TeachersAccordians'
import RequestFormSection from '../sections/homepage/RequestFormSection'

export default function page() {
    return (
        <>
            <div className='all-teacher'>
                <div className='max-w-[1330px] w-full mx-auto lg:px-4 px-8 lg:my-[30px] my-7 lg:py-5 py-4 '>
                    <div className='flex lg:flex-row flex-col items-center'>
                        <div className='flex flex-col gap-3 lg:w-1/2 w-full'>
                            <h2 className='text-[64px] font-jakarta font-bold text-black'>Expert Online Quran Teachers</h2>
                            <p className='text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] '>At OQC Academy, we believe exceptional teachers make all the difference. Our certified, highly experienced male and female instructors provide personalized guidance, foster a deep understanding of the Quran, and inspire students of all ages to achieve their spiritual learning goals with confidence and joy.</p>
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
                        <h6 className='text-[32px] font-poppins font-medium text-[black]'>We Have The Best Online Quran Tutors</h6>
                        <p className='text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] '>We maintain an exceptional standard of instruction. All OQC Academy tutors are certified scholars who specialize in Tajweed, Hifz, and Tafsir. They are trained to deliver engaging, patient, and personalized one-on-one lessons to students of all ages.</p>
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className='text-center'>
                    <h6 className='text-[32px] font-poppins font-medium text-[black] my-5'>Meet Our Male /Female Teachers </h6>
                </div>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                    <div className='mt relative lg:w-[40%] w-full rounded-[24px] p-6 max-h-[700px] flex-col gap-6 shadow-[-18px_20px_5px_#7AC043]'>

                        <div className='absolute bottom-4 left-4'>
                            <h6 className='text-[white] font-semibold text-2xl font-poppins'>Meet Our Certified Male Teachers</h6>
                            <p className='text-[14px] font-poppins font-normal text-[white]'>Our Male Tutors Are Highly Experienced Scholars Providing Structured, Respectful, and Focused Instruction Online. </p>
                            <p className='text-[14px] font-poppins font-normal text-[white]'>All OQC Academy male tutors are certified scholars specializing in advanced Tajweed and Hifz, providing respectful, one-on-one instruction tailored for comprehensive mastery and deep spiritual growth.</p>
                        </div>
                    </div>
                    <div className='fmt relative lg:w-[40%] w-full rounded-[24px] p-6 max-h-[700px] flex-col gap-6 shadow-[-18px_20px_5px_#7AC043]'>

                        <div className='absolute bottom-4 left-4'>
                            <h6 className='text-[white] font-semibold text-2xl font-poppins'>Meet Our Certified Female Teachers</h6>
                            <p className='text-[14px] font-poppins font-normal text-[white]'>Our Female Tutors Are Highly Qualified Scholars Providing Private, Supportive, and Respectful Instruction Online. </p>
                            <p className='text-[14px] font-poppins font-normal text-[white]'>All OQC Academy female tutors are certified scholars specializing in Tajweed, Hifz, and Fiqh for women, providing private, one-on-one instruction tailored for comprehensive mastery and spiritual growth in a comfortable setting.</p>
                        </div>
                    </div>

                </div>
            </SectionLayout>
            <SectionLayout>
                <div className='text-center'>
                    <h6 className='text-[32px] font-poppins font-medium text-[black] my-5 max-w-[686px] mx-auto'>Discover Excellence with Online Quran Teachers</h6>
                </div>
                <div className='flex lg:flex-row flex-col gap-8 justify-center '>
                    <div className='bg-[#D9D9D9] p-6 flex-col justify-center gap-2 rounded-2xl'>
                        <h6 className='text-2xl font-semibold font-poppins text-[#000] text-center py-8'>Personalized Attention</h6>
                        <p className='text-[#1B1B1B] text-[16px] font-poppins font-normal text-center'>Every student receives one-on-one guidance tailored to their unique learning style and pace. This ensures focused instruction and rapid, measurable progress in all aspects of Quranic recitation and study</p>
                    </div>
                    <div className='bg-[#D9D9D9] p-6 flex-col justify-center gap-2 rounded-2xl'>
                        <h6 className='text-2xl font-semibold font-poppins text-[#000] text-center py-8'>Certified Scholarship</h6>
                        <p className='text-[#1B1B1B] text-[16px] font-poppins font-normal text-center'>Our entire faculty consists of certified male and female scholars holding specialized Ijazas in Tajweed and Hifz. This guarantees instruction of the highest authenticity and quality for every single lesson.</p>
                    </div>
                    <div className='bg-[#D9D9D9] p-6 flex-col justify-center gap-2 rounded-2xl'>
                        <h6 className='text-2xl font-semibold font-poppins text-[#000] text-center py-8'>Flexible Pacing</h6>
                        <p className='text-[#1B1B1B] text-[16px] font-poppins font-normal text-center'>We adapt the learning speed and curriculum to fit your busy life, whether you are a working professional or a beginner student. This maximizes retention and seamlessly fits into your existing schedule.</p>
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className='text-center'>
                    <h6 className='text-[32px] font-poppins font-medium text-[black] my-5'> What Sets Our Quran Teachers Apart?</h6>
                    <p className='text-[#535353] ] text-[16px] font-poppins font-normal mb-4'>Reasons Why You Should Choose OQC Academy's Tutors.</p>

                </div>
                <div className='flex lg:flex-row flex-col gap-[52px] items-center justify-center'>
                    <ul className='flex-col gap-3 w-1/3 list-disc'>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'><strong>Specialized Instruction : </strong>Our female tutors hold expertise not just in Tajweed, but also in Fiqh (Islamic Jurisprudence) matters specific to women, ensuring comprehensive and relevant education</li>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'><strong>Advanced Certification :  </strong>Every female teacher possesses advanced Ijazas (certified authorizations) in recitation and memorization, guaranteeing the highest standard of Quranic knowledge delivery.</li>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'><strong>Patience and Support :  </strong>Our tutors are trained in empathetic and patient teaching methodologies, recognizing the challenges of balancing spiritual studies with modern commitments.</li>
                    </ul>
                    <div className='w-1/3'>
                        <Image src={at4} alt='sorry' />
                    </div>
                    <ul className='flex-col gap-3 w-1/3 list-disc'>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'><strong>Privacy and Comfort : </strong> They provide a secure, non-judgmental, one-on-one virtual setting, allowing female students to learn and discuss sensitive topics comfortably and privately</li>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'><strong>Flexible Scheduling : </strong>They offer scheduling tailored specifically to accommodate the varying demands of a woman's day, making consistent Quran learning genuinely accessible.</li>
                        <li className='text-[#1B1B1B] text-[16px] font-poppins font-normal mb-4'><strong>In-Depth Knowledge: </strong>Beyond simple reading, they encourage deep intellectual and spiritual engagement with the text, promoting a lifelong connection with the Quran's wisdom.</li>
                    </ul>
                </div>
            </SectionLayout>
            <RequestFormSection />

        </>
    )
}
