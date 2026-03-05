import React from 'react'
import SectionLayout from '../components/SectionLayout'
import kid1 from '@/../public/women (1).png'
import kid2 from '@/../public/women-2.png'
import kids from '@/../public/wome.png'
import Image from 'next/image'
import FaqsSection from '../sections/homepage/FaqsSection'
import RequestFormSection from '../sections/homepage/RequestFormSection'
import Aboutus from '../sections/homepage/Aboutus'
import OurMission from '../sections/homepage/OurMission'
import WhyChoose from '../sections/homepage/WhyChoose'
import Teachers from '../sections/homepage/Teachers'
import FreeCourseCard from '../components/homepage/FreeCourseCard'
import StepsSection from '../sections/homepage/StepsSection'
import girl from '@/../public/girl.png'
import BookForm from '../sections/homepage/BookForm'
import FeaturedCourse from '../sections/homepage/FeaturedCourse'
import FreeCourse from '../sections/homepage/FreeCourse'
import GrainSection from '../sections/homepage/GrainSection'


export default function page() {
    return (
        <>
            <SectionLayout>
                <div className='flex lg:flex-row flex-col gap-6'>
                    <div className='flex flex-col gap-2.5 self-start lg:w-1/2 w-full'>
                        <h6 className='text=black text-2xl font-semibold font-poppins'>Nurturing Faith and Knowledge in a Comfortable Setting</h6>
                        <h2 className='text-[64px] font-jakarta font-bold text-black'>Online <span className='text-[#098A46]'> Quran Classes</span>  For Womens</h2>
                        <h6 className='text=black text-2xl font-semibold font-poppins'>Our Promise To Uphold The Trust Placed.</h6>
                        <p className='text-[#535353] font-poppins font-normal text-[16px]'>Welcome to OQC Academy, where we provide a flexible, private, and specialized environment for women to deepen their connection with the Quran. Our certified female tutors use structured, effective teaching methods to ensure every student masters proper recitation and achieves a deeper understanding of the Holy Book's Tafsir and principles. We are committed to nurturing your spiritual growth with the highest standards of education and trust.</p>
                        <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white w-fit py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46]">
                            Get Enrolled Now
                        </button>
                    </div>
                    <div className='lg:w-1/2 w-full text-center flex justify-center'>
                        <Image src={kid1} alt='sorry'  />
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className='flex lg:flex-row flex-col gap-6'>
                    <div className='lg:w-1/2 w-full text-center flex justify-center'>
                        <Image src={kid2} alt='sorry' height={450} />
                    </div>
                    <div className='lg:w-1/2 w-full flex flex-col text-start gap-6' data-aos="zoom-in-left">
                        <h5 className='text-[16px] font-poppins font-medium text-shadow-black'>Making Sacred Learning Accessible and Focused for Female Learners.</h5>
                        <h3 className='text-4xl font-poppins font-medium leading-[115%]'>Best Online <span className='text-[#098A46]'> Online Quran Course</span> For Womens</h3>
                        <p className='text-[16px] font-poppins font-medium text-[#535353]'>
                           It is a long-established fact that female students require flexibility, privacy, and dedicated female instruction. OQC Academy provides a structured, one-on-one online learning experience, focusing on making every class highly efficient. Our expert female tutors use women-friendly curricula and engaging discussions to help you master Tajweed, Hifz, and Tafsir in a convenient, supportive virtual environment.

                        </p>
                        <ul className='text-lg text-black font-poppins font-normal list-disc pl-6'>
                            <li className='mb-1'>Interactive Lessons</li>
                            <li className='mb-1'>Certified & Expert Tutors </li>
                            <li className='mb-1'>Patience-First Approach</li>
                            <li className='mb-1'>Fun Learning Environment</li>
                        </ul>
                    </div>

                </div>
            </SectionLayout>
            <StepsSection />
            <BookForm />
            <FeaturedCourse />
            <div className="bg-[#F6F6F6]">
                <FreeCourse />
            </div>
            <GrainSection />
            <WhyChoose />
            <Teachers />
            <OurMission />
            <Aboutus />
            <RequestFormSection />
            <FaqsSection />
        </>
    )
}
