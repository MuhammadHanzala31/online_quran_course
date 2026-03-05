
import SectionLayout from '@/app/components/SectionLayout'
import form from '@/../public/single-c-1.png'
import sec2 from '@/../public/single-c-2.png'
import sc2 from '@/../public/sc-2.png'
import sc3 from '@/../public/sc-3.png'
import sc4 from '@/../public/sc-4.png'
import why from '@/../public/why.jpg'
import more from '@/../public/more.jpg'
import React from 'react'
import Image from 'next/image'
import FaqsSection from '@/app/sections/homepage/FaqsSection'
import RequestFormSection from '@/app/sections/homepage/RequestFormSection'

import { Metadata } from 'next'
import BestAcademey from '@/app/sections/single-course/BestAcademey'
import StepsSection from '@/app/sections/homepage/StepsSection'
import AboutCourse from '@/app/sections/single-course/AboutCourse'
import WhyCourse from '@/app/components/single-course/WhyCourse'
import SliderTestimonial from '@/app/sections/homepage/SliderTestimonial'
import blank from '@/../public/Rectangle 295.png'
import Faq from '@/app/components/single-course/Faq'
import RequestForm from '@/app/components/homepage/RequestForm'



export const metadata: Metadata = {
    title: "Course Details",
};

export default async function Page({ params }:
    {
        params: Promise<{ slug: string }>

    }) {

    const { slug } = await params;

    const features = [
        {
            title: "Accurate Pronunciation",
            content:
                "Master Makharij and letter sounds to avoid common recitation mistakes.",
        },
        {
            title: "Reading Confidence",
            content:
                "Progress from single letters to complete words with fluency and clarity.",
        },
        {
            title: "Early Tajweed Awareness",
            content:
                "Develop correct recitation habits from day one.",
        },
        {
            title: "Personalized Learning",
            content:
                "Benefit from one-on-one sessions tailored to your learning pace and needs.",
        },
    ];


    return (
        <main>
            <section className='single-banner py-0'>
                <div className='max-w-7xl w-full mx-auto lg:px-4 px-8 lg:py-5 py-4  '>
                    <div className='flex lg:flex-row flex-col items-center gap-5 justify-between'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>A Strong Foundation in Quran Reading</h1>
                            <h1 className='text-white font-bold font-jakarta text-[54px] '>Basic Alphabets (Qaida) Course </h1>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Our Promise To Uphold The Trust Placed</h1>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Welcome to OQC Institute, where our Basic Alphabets (Qaida) Course provides the essential foundation for accurate Quran reading. This comprehensive course is designed for beginners of all ages who want to start their Quranic journey from the very basics. Students learn Arabic letters, correct pronunciation (Makharij), joining letters, vowel signs (Harakat), Sukoon, Madd, and other fundamental Tajweed rules through structured and easy-to-follow lessons.</p>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Our certified tutors ensure a supportive and engaging environment where every learner builds confidence step by step. We are committed to helping students develop a strong base that prepares them for fluent and accurate Quran recitation.</p>

                        </div>
                        <div className='w-1/2 justify-end flex'>
                            <div className='bg-white p-2 w-[80%] rounded-md'>
                                <div className='flex flex-col gap-2 py-4 px-2 w-full'>
                                    <h4 className='text-[#098A46] font-sans text-2xl font-semibold text-center mb-4'>Course Registration Form</h4>
                                    <input className='p-3 bg-[#F7F7F7]/41 border-1  border-[#098A46] rounded-md placeholder:text-[#7AC043] text-white text-[16px] font-normal font-poppins ' placeholder='Your Name' type='text' />
                                    <input className='p-3 bg-[#F7F7F7]/41 border-1  border-[#098A46] rounded-md placeholder:text-[#7AC043] text-white text-[16px] font-normal font-poppins ' placeholder='Your Email' type='text' />
                                    <input className='p-3 bg-[#F7F7F7]/41 border-1  border-[#098A46] rounded-md placeholder:text-[#7AC043] text-white text-[16px] font-normal font-poppins ' placeholder='Your Phone' type='text' />
                                    <input className='p-3 bg-[#F7F7F7]/41 border-1  border-[#098A46] rounded-md placeholder:text-[#7AC043] text-white text-[16px] font-normal font-poppins ' placeholder='Your Message' type='text' />
                                    <button className='text-[16px] font-poppins font-normal border text-[white] bg-[#098A46] cursor-pointer py-2 px-4 rounded-4xl  transition-all'>Send Request</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionLayout>
                <div className='flex flex-row justify-between items-center'>
                    <div className='w-1/2'>
                        <Image src={sec2} alt='sec2' />
                    </div>
                    <div className='flex flex-col gap-6 w-[45%] justify-end'>
                        <h2 className='text-black font-medium font-poppins text-[36px] '>Best Quran Academy For Basic Qaida Course</h2>
                        <p className='text-black font-normal text-[16px] font-poppins'>OQC Institute is your trusted destination for mastering the fundamentals of Quran reading. Our Basic Alphabets (Qaida) Course goes beyond simple letter recognition — it builds strong pronunciation skills and introduces essential Tajweed rules from the beginning.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>We believe that correct recitation starts with a solid foundation. That is why our course is carefully structured to help students understand each letter’s sound, articulation point, and usage before progressing to words and short verses. This method ensures clarity, confidence, and long-term accuracy in recitation. </p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy. </p>

                    </div>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className='flex justify-start flex-col text-start my-3'>
                    <h3 className='text-black font-poppins text-[36px] font-medium'>A Step-by-Step Journey to Accurate Quran Reading </h3>
                    <p className='text-black font-normal text-[16px] font-poppins'>This foundational course is designed to gradually build each student’s reading ability with clarity and confidence. Our syllabus progresses systematically from recognizing individual letters to reading complete Quranic words with proper Tajweed application.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative  border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc2} alt='sec2' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '> Arabic Alphabet Recognition</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'> Arabic Letters Identification: </span> Learn all 29 Arabic letters with correct pronunciation.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'> Makharij (Articulation Points): </span> Master the correct origin of each letter’s sound.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'> Letter Shapes: </span> Recognize letters in isolated, initial, medial, and final forms.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'> Sound Clarity Practice: </span> Repetition exercises to ensure strong pronunciation accuracy.</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative  border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc3} alt='sec2' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '> Harakat & Basic Tajweed Rules</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'> Short Vowels (Harakat):</span> Fatha, Kasra, Damma practice</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'> Tanween :</span> Understanding double vowel sounds</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'> Sukoon & Jazm : </span>  Reading letters without vowel sounds.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'> Madd (Prolongation): </span>  Introduction to basic elongation rules</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Joining Letters:</span> Reading simple words fluently</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative  border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc4} alt='sec2' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '> Advanced Qaida Practice</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'> Word Formation:</span>  Reading longer Arabic words confidently.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'> Shaddah (Tashdeed): </span> Understanding double vowel sounds</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'> Basic Tajweed Application: </span> Applying learned rules while reading.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'> Madd (Prolongation): </span>  Introduction to basic elongation rules</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Short Surah Practice: </span>Gradual transition toward reading small Quranic verses.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>
            <StepsSection />
            <SectionLayout>
                <div className='lg:w-1/2 w-full flex flex-col gap-4 mb-6'>
                    <h1 className='text-black font-medium font-poppins text-[36px] '>More About this course</h1>
                    <p className='text-black font-normal text-[16px] font-poppins'>This course is carefully designed to provide beginners with a clear, structured, and practical approach to Quran reading foundations.</p>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-1/2'>
                        <Image src={more} alt='sorry' />
                    </div>
                    <div className='w-1/2 grid grid-cols-2 space-x-3.5 space-y-3.5'>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Complete Alphabet Mastery</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Students achieve full recognition and pronunciation mastery of all Arabic letters with proper articulation points.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Strong Tajweed Foundation</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'> Essential Tajweed rules are introduced gradually, ensuring correct recitation habits from the very beginning.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Certified Expert Instruction</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'> Our certified tutors provide one-on-one lessons, ensuring focused attention and steady progress.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Flexible & Self-Paced Learning</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'> Delivered entirely online, allowing students to progress comfortably according to their learning speed and availability.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className='lg:w-[45%] w-full flex flex-col gap-4'>

                </div>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-[45%] flex flex-col gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Why Take This Course</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy.</p>
                        </div>
                        <Faq faqs={features} />
                    </div>
                    <div className='w-1/2'>
                        <Image src={why} alt='sorry' />
                    </div>
                </div>
            </SectionLayout>
            <SliderTestimonial />
            <FaqsSection />
        </main>
    )
}
