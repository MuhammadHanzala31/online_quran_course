import SectionLayout from '@/app/components/SectionLayout'
import form from '@/../public/single-c-1.png'
import sec2 from '@/../public/single-c-2.png'
import React from 'react'
import Image from 'next/image'
import FaqsSection from '@/app/sections/homepage/FaqsSection'
import { Metadata } from 'next'
import StepsSection from '@/app/sections/homepage/StepsSection'
import blank from '@/../public/Rectangle 295.png'
import Faq from '@/app/components/single-course/Faq'
import SliderTestimonial from '@/app/sections/homepage/SliderTestimonial'
import why from '@/../public/why.jpg'
import more from '@/../public/more.jpg'
import sc2 from '@/../public/sc-2.png'
import sc3 from '@/../public/sc-3.png'
import sc4 from '@/../public/sc-4.png'


export const metadata: Metadata = {
    title: "Quran Translation Course Details",
};

export default async function Page({ params }:
    {
        params: Promise<{ slug: string }>
    }) {
    const { slug } = await params;

    // Features for "Why Take This Course" section
    const features = [
        {
            title: "Accurate Translation Skills",
            content:
                "Learn to interpret verses correctly, word by word, with contextual understanding.",
        },
        {
            title: "Tafsir Knowledge",
            content:
                "Understand classical and modern interpretations for comprehensive insight.",
        },
        {
            title: "Practical Reflection",
            content:
                "Apply Quranic guidance meaningfully in everyday life, enhancing spiritual growth.",
        },
        {
            title: "Personalized Guidance",
            content:
                "Benefit from one-on-one instruction tailored to your pace and comprehension level.",
        },
    ];

    return (
        <main>
            <section className='single-banner py-0'>
                <div className='max-w-7xl w-full mx-auto lg:px-4 px-8 lg:py-5 py-4  '>
                    <div className='flex lg:flex-row flex-col items-center gap-5 justify-between'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Unlock the Meaning of the Quran</h1>
                            <h1 className='text-white font-bold font-jakarta text-[54px] '>Quran Translation Course</h1>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Our Promise To Uphold The Trust Placed</h1>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Welcome to OQC Institute, where our Quran Translation Course empowers students to understand the divine message of the Quran in depth. This course is ideal for learners of all ages who want to go beyond mere recitation and connect with the meanings of Allah’s words.</p>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Our certified tutors guide students through verse-by-verse translations, explaining contextual interpretations, word meanings, and practical applications. Students learn to comprehend the Quran’s guidance in daily life while developing confidence in expressing its teachings accurately.</p>
                            <p className='text-white font-normal text-[18px] font-jakarta'>We are committed to nurturing students who can recite, understand, and live by the Quran with clarity and devotion.</p>
                        </div>
                        <div className='w-1/2 justify-center flex'>
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
                        <h2 className='text-black font-medium font-poppins text-[36px] '>Best Online Quran Academy For Understanding the Quran</h2>
                        <p className='text-black font-normal text-[16px] font-poppins'>OQC Institute is your trusted destination for Quran Translation and Tafsir. Our structured curriculum goes beyond memorization to ensure students grasp the wisdom and guidance contained in every verse.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Students gain a clear understanding of the meanings, themes, and lessons of the Quran while developing the ability to reflect and apply its teachings in their personal and spiritual lives. Our tutors provide individualized support to enhance comprehension, critical thinking, and confident discussion of Quranic concepts.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Certified male and female scholars teach both adults and children using interactive online methods that make learning the Quran’s meanings engaging, practical, and spiritually enriching.</p>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex justify-start flex-col text-start my-3'>
                    <h3 className='text-black font-poppins text-[36px] font-medium'>A Comprehensive Journey to Understand the Quran</h3>
                    <p className='text-black font-normal text-[16px] font-poppins'>This course provides students with a structured approach to comprehend the Quranic text deeply, combining translation, explanation, and reflection.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    {/* Section 1 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc2} alt='Foundations of Quranic Understanding' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Foundations of Quranic Understanding</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Introduction to Quranic Language: </span> Learn key Arabic vocabulary and grammatical structures relevant to Quranic translation.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Verse-by-Verse Translation: </span> Study selected Surahs to understand word meanings and context.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Daily Application: </span> Learn practical ways to integrate Quranic guidance into everyday life.</p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc3} alt='Intermediate Tafsir & Context' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Intermediate Tafsir & Context</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Tafsir Study: </span> Explore classical and contemporary interpretations of the Quranic text.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Contextual Understanding: </span> Study Makkan and Madinan verses to understand their circumstances and relevance.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Practical Exercises: </span> Translate short passages and practice explaining their meanings clearly.</p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc4} alt='Advanced Translation & Reflection' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Advanced Translation & Reflection</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Full Surah Analysis: </span> Translate and analyze complete Surahs with attention to linguistic nuance and context.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Thematic Study: </span> Understand recurring themes, moral lessons, and divine commands.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Interactive Discussions: </span> Engage in one-on-one sessions with your tutor to clarify meanings, compare interpretations, and strengthen comprehension.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <StepsSection />

            <SectionLayout>
                <div className='lg:w-1/2 w-full flex flex-col gap-4 mb-6'>
                    <h1 className='text-black font-medium font-poppins text-[36px] '>More About Quran Translation Course</h1>
                    <p className='text-black font-normal text-[16px] font-poppins'>This course is designed to give learners a comprehensive understanding of the Quran’s message and guidance.</p>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-1/2'>
                        <Image src={more} alt='Quran Translation Course Illustration' />
                    </div>
                    <div className='w-1/2 grid grid-cols-2 space-x-3.5 space-y-3.5'>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Deep Understanding of Quranic Words</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Learn the meanings, context, and significance of every verse.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Practical Application</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Integrate Quranic guidance into daily decision-making, worship, and ethical conduct.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Certified Expert Instruction</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Receive one-on-one tutoring from scholars specialized in Tafsir and Quranic translation.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Flexible & Self-Paced Learning</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Progress through lessons at your own pace, revisiting difficult verses and concepts as needed.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-[45%] flex flex-col gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Why Take This Course</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'>This course is ideal for anyone seeking a deep understanding of the Quran beyond recitation.</p>
                        </div>
                        <Faq faqs={features} />
                    </div>
                    <div className='w-1/2'>
                        <Image src={why} alt='Why Take Quran Translation Course' />
                    </div>
                </div>
            </SectionLayout>

            <SliderTestimonial />
            <FaqsSection />
        </main>
    )
}