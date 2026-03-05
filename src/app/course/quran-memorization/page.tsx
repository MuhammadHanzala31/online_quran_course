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
    title: "Quran Memorization Course Details",
};

export default async function Page({ params }:
    {
        params: Promise<{ slug: string }>
    }) {
    const { slug } = await params;

    // Features for "Why Take This Course" section
    const features = [
        {
            title: "Accurate Quranic Memorization",
            content:
                "Memorize the Quran systematically with correct pronunciation and rhythm.",
        },
        {
            title: "Enhanced Recitation Skills",
            content:
                "Apply Tajweed and Tarteel rules to recite beautifully while memorizing.",
        },
        {
            title: "Retention & Consistency",
            content:
                "Learn revision techniques to retain memorized portions permanently.",
        },
        {
            title: "Personalized Guidance",
            content:
                "Receive focused, one-on-one instruction to address weaknesses and reinforce strengths for steady progress.",
        },
    ];

    return (
        <main>
            <section className='single-banner py-0'>
                <div className='max-w-7xl w-full mx-auto lg:px-4 px-8 lg:py-5 py-4  '>
                    <div className='flex lg:flex-row flex-col items-center gap-5 justify-between'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Build a Lifelong Connection With the Quran</h1>
                            <h1 className='text-white font-bold font-jakarta text-[54px] '>Quran Memorization Course</h1>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Our Promise To Uphold The Trust Placed</h1>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Welcome to OQC Institute, where our Quran Memorization Course is designed to help students memorize the Holy Quran with accuracy, fluency, and understanding. This course is perfect for learners of all ages, whether children, adults, or new Muslims, who wish to preserve the Quran in their hearts while developing proper pronunciation and Tajweed skills.</p>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Our certified tutors provide step-by-step guidance for memorizing verses efficiently, focusing on retention techniques, repetition, and correct articulation. Students are encouraged to recite daily under the supervision of experienced instructors, ensuring both precision and confidence in their memorization journey.</p>
                            <p className='text-white font-normal text-[18px] font-jakarta'>We are committed to nurturing students who can confidently recite, memorize, and live by the teachings of the Quran.</p>
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
                        <h2 className='text-black font-medium font-poppins text-[36px] '>Best Online Quran Academy For Memorization</h2>
                        <p className='text-black font-normal text-[16px] font-poppins'>OQC Institute is your premier destination for Quran Hifz (memorization). Our structured curriculum is tailored to help students memorize the Quran systematically while maintaining proper Tajweed and understanding the meaning of the verses.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Students not only memorize the Quran but also develop fluency, rhythm, and confidence in recitation. Our tutors provide individualized attention to ensure every student progresses steadily while instilling a deep connection with the Quranic text.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Certified male and female tutors teach both children and adults using interactive online methods that make memorization effective, engaging, and spiritually rewarding.</p>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex justify-start flex-col text-start my-3'>
                    <h3 className='text-black font-poppins text-[36px] font-medium'>A Comprehensive Journey to Memorize the Quran</h3>
                    <p className='text-black font-normal text-[16px] font-poppins'>This course is structured to provide students with a holistic approach to Quran memorization, combining accuracy, understanding, and consistency.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    {/* Section 1 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc2} alt='Memorization Fundamentals' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Memorization Fundamentals</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Letter Pronunciation & Tajweed Basics: </span> Learn correct articulation points (Makharij) and essential Tajweed rules.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Short Surah Memorization: </span> Begin with small chapters to develop confidence and proper technique.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Daily Practice Techniques: </span> Establish routines and repetition strategies for long-term retention.</p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc3} alt='Intermediate Memorization Skills' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Intermediate Memorization Skills</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Longer Surah Memorization: </span> Progress to medium-length chapters with guidance on chunking and repetition.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Tajweed Application: </span> Incorporate proper pronunciation, elongation (Madd), and stops (Waqf).</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Revision Strategies: </span> Learn systematic review methods to retain previously memorized portions effectively.</p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc4} alt='Advanced Memorization & Recitation' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Advanced Memorization & Recitation</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Full Juz Memorization: </span> Memorize complete sections with focus on continuity and fluency.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Retention & Revision Techniques: </span> Strengthen memorized portions for lifelong retention.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Integration of Tajweed & Tarteel: </span> Recite smoothly with proper rhythm, tone, and emphasis.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>One-on-One Feedback: </span> Tutors provide detailed corrections and personalized guidance to ensure accuracy.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <StepsSection />

            <SectionLayout>
                <div className='lg:w-1/2 w-full flex flex-col gap-4 mb-6'>
                    <h1 className='text-black font-medium font-poppins text-[36px] '>More About Quran Memorization Course</h1>
                    <p className='text-black font-normal text-[16px] font-poppins'>This course is meticulously designed for students of all ages who wish to memorize the Quran accurately and confidently.</p>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-1/2'>
                        <Image src={more} alt='Quran Memorization Course Illustration' />
                    </div>
                    <div className='w-1/2 grid grid-cols-2 space-x-3.5 space-y-3.5'>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Master Memorization Techniques</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Learn systematic methods for memorizing verses efficiently while minimizing errors.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Fluency & Tajweed</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Focus on correct pronunciation, rhythm, and pauses, ensuring every verse is memorized and recited properly.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Certified Expert Instruction</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Receive one-on-one guidance from experienced tutors who specialize in Quran Hifz for children and adults.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Flexible & Self-Paced Learning</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Students can progress at their own pace, revisit difficult verses, and track their memorization progress online.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-[45%] flex flex-col gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Why Take This Course</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'>This course is ideal for anyone wishing to memorize the Quran with accuracy, fluency, and spiritual understanding.</p>
                        </div>
                        <Faq faqs={features} />
                    </div>
                    <div className='w-1/2'>
                        <Image src={why} alt='Why Take Memorization Course' />
                    </div>
                </div>
            </SectionLayout>

            <SliderTestimonial />
            <FaqsSection />
        </main>
    )
}