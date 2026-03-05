import React from 'react'
import SectionLayout from '../components/SectionLayout'
import kid1 from '@/../public/kid1.png'
import kid2 from '@/../public/kid2.png'
import kids from '@/../public/kids-about.png'
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
                        <h6 className='text=black text-2xl font-semibold font-poppins'>Empowering The Next Generation of Muslims.</h6>
                        <h2 className='text-[64px] font-jakarta font-bold text-black'>Online <span className='text-[#098A46]'> Quran Classes</span>  For Kids.</h2>
                        <h6 className='text=black text-2xl font-semibold font-poppins'>Our Promise To Uphold The Trust Placed.</h6>
                        <p className='text-[#535353] font-poppins font-normal text-[16px]'>Welcome to OQC Academy, where we provide a safe, engaging, and personalized environment for your child to connect with the Quran. Our certified, native-speaking tutors use modern, interactive teaching methods to ensure every student not only learns to read and memorize but also understands the values and wisdom within the Holy Book. We are committed to nurturing the next generation of Muslims with the highest standards of education and trust.</p>
                        <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white w-fit py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46]">
                            Get Enrolled Now
                        </button>
                    </div>
                    <div className='lg:w-1/2 w-full text-center flex justify-center'>
                        <Image src={kid1} alt='sorry' height={450} />
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className='flex lg:flex-row flex-col gap-6'>
                    <div className='lg:w-1/2 w-full text-center flex justify-center'>
                        <Image src={kid2} alt='sorry' height={450} />
                    </div>
                    <div className='lg:w-1/2 w-full flex flex-col text-start gap-6' data-aos="zoom-in-left">
                        <h5 className='text-[16px] font-poppins font-medium text-shadow-black'>Making Quran Learning Fun and Engaging for Young Minds</h5>
                        <h3 className='text-4xl font-poppins font-medium leading-[115%]'>Best Online <span className='text-[#098A46]'> Online Quran Course</span> For Kids</h3>
                        <p className='text-[16px] font-poppins font-medium text-[#535353]'>
                            It is a long established fact that children learn best through interactive, positive, and gentle instruction. OQC Academy provides a structured yet fun online learning experience, focusing on making every class enjoyable. Our patient tutors use child-friendly methods and engaging activities to help your child master proper recitation (Tajweed) and basic memorization in a safe, supportive virtual environment.
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
