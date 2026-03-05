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
    title: "Tafseer ul Quran Course Details",
};

export default async function Page({ params }:
    {
        params: Promise<{ slug: string }>
    }) {
    const { slug } = await params;

    // Features for "Why Take This Course" section
    const features = [
        {
            title: "Accurate Understanding of Verses",
            content:
                "Master contextual and thematic meanings with in-depth explanation.",
        },
        {
            title: "Critical Reflection",
            content:
                "Learn to analyze classical and contemporary Tafseer to understand the Quran’s guidance.",
        },
        {
            title: "Practical Application",
            content:
                "Apply the Quranic lessons in daily life, ethical choices, and personal development.",
        },
        {
            title: "Personalized Guidance",
            content:
                "One-on-one instruction ensures clarity, comprehension, and confident application.",
        },
    ];

    return (
        <main>
            <section className='single-banner py-0'>
                <div className='w-full mx-auto lg:px-4 px-8 lg:py-5 py-4'>
                    <div className='flex lg:flex-row flex-col items-center gap-5 justify-between'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Deepen Your Understanding of the Divine Message</h1>
                            <h1 className='text-white font-bold font-jakarta text-[54px] '>Tafseer ul Quran Course</h1>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Our Promise To Uphold The Trust Placed</h1>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Welcome to OQC Institute, where our Tafseer ul Quran Course allows students to explore the Quran with detailed explanations and contextual understanding. This course is ideal for learners of all ages who wish to gain insight into the meanings, wisdom, and guidance behind every verse.</p>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Our certified tutors provide in-depth lessons that explain the context of revelation (Asbab al-Nuzul), linguistic nuances, and practical application of Quranic guidance. Students develop the skills to comprehend, reflect, and implement the teachings of the Quran in their daily lives.</p>
                            <p className='text-white font-normal text-[18px] font-jakarta'>We are committed to cultivating informed and reflective individuals capable of understanding and conveying the Quran’s wisdom with confidence.</p>
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
                        <h2 className='text-black font-medium font-poppins text-[36px] '>Best Online Quran Academy For Tafseer Studies</h2>
                        <p className='text-black font-normal text-[16px] font-poppins'>OQC Institute is your trusted platform for learning Tafseer, offering a structured curriculum that moves beyond surface-level reading. Our course teaches students the meaning of the Quranic text while linking verses to practical life lessons, moral guidance, and historical context.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Our approach ensures students not only understand individual verses but also grasp overarching themes and messages. Tutors provide personalized guidance to help learners critically analyze the text and reflect on its application.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Certified male and female scholars instruct both adults and children using engaging online methods that make learning Tafseer practical, relevant, and spiritually rewarding.</p>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex justify-start flex-col text-start my-3'>
                    <h3 className='text-black font-poppins text-[36px] font-medium'>A Comprehensive Journey to Understand and Reflect on the Quran</h3>
                    <p className='text-black font-normal text-[16px] font-poppins'>This course provides a detailed and structured study of the Quran, combining explanation, interpretation, and real-world application.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    {/* Section 1 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc2} alt='Introduction to Tafseer' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Introduction to Tafseer & Quranic Understanding</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Principles of Tafseer: </span> Learn key methodologies, including linguistic, thematic, and contextual approaches.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Verse-by-Verse Study: </span> Understand meanings of selected verses with emphasis on word choice, grammar, and rhetorical style.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Practical Reflection: </span> Learn how to implement Quranic guidance in daily life and ethical decision-making.</p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc3} alt='Contextual and Thematic Tafseer' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Contextual and Thematic Tafseer</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Asbab al-Nuzul (Revelation Context): </span> Study the historical and situational context behind each verse.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Theme Analysis: </span> Explore recurring themes, moral lessons, and divine commands across chapters.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Discussion & Interpretation: </span> Translate understanding into meaningful discussion and reflection exercises.</p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc4} alt='Advanced Tafseer & Application' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Advanced Tafseer & Application</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Full Surah Tafseer: </span> Analyze complete Surahs for meaning, theme, and guidance.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Critical Reflection: </span> Compare classical and modern Tafseer interpretations to develop deeper insight.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Interactive Sessions: </span> Engage with tutors to clarify concepts, answer questions, and reinforce practical application.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <StepsSection />

            <SectionLayout>
                <div className='lg:w-1/2 w-full flex flex-col gap-4 mb-6'>
                    <h1 className='text-black font-medium font-poppins text-[36px] '>More About Tafseer ul Quran Course</h1>
                    <p className='text-black font-normal text-[16px] font-poppins'>This course equips learners with the knowledge and understanding required to fully comprehend the Quran’s message.</p>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-1/2'>
                        <Image src={more} alt='Tafseer ul Quran Course Illustration' />
                    </div>
                    <div className='w-1/2 grid grid-cols-2 space-x-3.5 space-y-3.5'>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>In-Depth Verse Understanding</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Learn word meanings, context, and implications for personal and spiritual growth.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Practical Implementation</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Reflect on Quranic guidance in decision-making, worship, and ethical conduct.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Certified Expert Instruction</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Receive one-on-one guidance from scholars specialized in Tafseer.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Flexible & Self-Paced Learning</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Progress at your own speed while revisiting complex concepts and verses as needed.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-[45%] flex flex-col gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Why Take This Course</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'>This course is ideal for learners seeking a profound understanding of the Quran beyond recitation.</p>
                        </div>
                        <Faq faqs={features} />
                    </div>
                    <div className='w-1/2'>
                        <Image src={why} alt='Why Take Tafseer Course' />
                    </div>
                </div>
            </SectionLayout>

            <SliderTestimonial />
            <FaqsSection />
        </main>
    )
}
