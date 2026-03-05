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
    title: "Quran Reading (Recitation) Course Details",
};

export default async function Page({ params }:
    {
        params: Promise<{ slug: string }>
    }) {
    const { slug } = await params;

    // Features for "Why Take This Course" section
    const features = [
        {
            title: "Accurate Pronunciation",
            content:
                "Master correct articulation (Makharij) and characteristics of letters (Sifaat).",
        },
        {
            title: "Fluency & Rhythm",
            content:
                "Develop smooth, confident, and melodious recitation (Tarteel).",
        },
        {
            title: "Tajweed Application",
            content:
                "Apply rules such as Madd, Qalqalah, Sukoon, and Ghunnah while reading continuously.",
        },
        {
            title: "Personalized Learning",
            content:
                "Receive focused one-on-one instruction tailored to each student’s pace and needs.",
        },
    ];

    return (
        <main>
            <section className='single-banner py-0'>
                <div className='max-w-7xl w-full mx-auto lg:px-4 px-8 lg:py-5 py-4  '>
                    <div className='flex lg:flex-row flex-col items-center gap-5 justify-between'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Build Fluency in Quran Recitation</h1>
                            <h1 className='text-white font-bold font-jakarta text-[54px] '>Quran Reading (Recitation) Course</h1>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Our Promise To Uphold The Trust Placed</h1>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Welcome to OQC Institute, where our Quran Reading (Recitation) Course is designed to help students of all ages achieve fluency and confidence in reading the Holy Quran. This course is ideal for learners who have completed a Basic Qaida or have some familiarity with Arabic letters and vowel signs. Our program emphasizes correct pronunciation, proper Tajweed rules, rhythm (Tarteel), and smooth recitation to ensure every student reads the Quran accurately and beautifully.</p>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Our certified tutors provide a clear, supportive, and interactive learning environment, guiding each student step by step toward mastery of Quranic recitation.</p>
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
                        <h2 className='text-black font-medium font-poppins text-[36px] '>Best Quran Academy For Quran Reading</h2>
                        <p className='text-black font-normal text-[16px] font-poppins'>OQC Institute is your trusted destination for learning to read the Quran with confidence and precision. Our Quran Reading Course goes beyond simple recitation — it strengthens Tajweed, enhances fluency, and helps students develop a love for reading the Quran correctly.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>We focus on teaching students the correct articulation of letters (Makharij), proper elongation (Madd), rules of Qalqalah, and other Tajweed principles that are essential for accurate recitation. With one-on-one online sessions, learners receive personalized attention and tailored guidance to address individual challenges in recitation.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Our certified male and female tutors are experienced in teaching children, adults, and new Muslims, using modern and engaging online methods. With interactive digital tools and structured lessons, we make Quran reading easy, effective, and spiritually rewarding.</p>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex justify-start flex-col text-start my-3'>
                    <h3 className='text-black font-poppins text-[36px] font-medium'>A Step-by-Step Journey to Quran Mastery</h3>
                    <p className='text-black font-normal text-[16px] font-poppins'>This comprehensive course is designed to improve Quran reading skills progressively, building accuracy, fluency, and understanding.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    {/* Section 1 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc2} alt='Revisiting the Basics' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Revisiting the Basics</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Letter & Vowel Review: </span> Reinforce correct pronunciation of all Arabic letters and vowel signs (Harakat).</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Makharij & Sifaat: </span> Master the articulation points and characteristics of letters.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Joining Letters & Simple Words: </span> Practice reading simple Quranic words with correct sounds.</p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc3} alt='Tajweed Essentials' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Tajweed Essentials</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Madd (Prolongation) Rules: </span> Learn when and how to elongate vowels correctly.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Qalqalah & Ghunnah: </span> Apply echoing sounds and nasal letters accurately.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Stopping & Pausing (Waqf & Ibtidaa): </span> Learn proper rules for stopping and starting recitation.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Sukoon & Shaddah: </span> Practice reading doubled letters and silent letters correctly.</p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc4} alt='Fluency & Tarteel' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Fluency & Tarteel</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Word & Sentence Practice: </span> Read longer words and verses with increasing fluency.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Short Surah Recitation: </span> Practice small Surahs with correct Tajweed.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Application of Tajweed Rules: </span> Apply all learned rules during continuous recitation.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Building Confidence: </span> Engage in guided recitation and receive constructive feedback.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <StepsSection />

            <SectionLayout>
                <div className='lg:w-1/2 w-full flex flex-col gap-4 mb-6'>
                    <h1 className='text-black font-medium font-poppins text-[36px] '>More About Quran Reading (Recitation) Online Course</h1>
                    <p className='text-black font-normal text-[16px] font-poppins'>This course is carefully designed to help learners develop fluency, accuracy, and a deeper connection with the Quran.</p>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-1/2'>
                        <Image src={more} alt='Quran Reading (Recitation) Course Illustration' />
                    </div>
                    <div className='w-1/2 grid grid-cols-2 space-x-3.5 space-y-3.5'>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Master Tajweed</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Students learn all essential Tajweed rules and correct pronunciation from start to finish.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Fluent Recitation</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Build smooth and confident reading skills for both short and longer Quranic passages.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Certified Expert Instruction</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Our one-on-one sessions with certified tutors provide focused guidance to correct mistakes and enhance recitation quality.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Flexible & Self-Paced Learning</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Online lessons allow students to progress at their own pace and revisit challenging areas as needed.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-[45%] flex flex-col gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Why Take This Course</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'>This course is perfect for children, adults, and new Muslims who want to improve Quran reading skills and strengthen their connection with the Holy Quran.</p>
                        </div>
                        <Faq faqs={features} />
                    </div>
                    <div className='w-1/2'>
                        <Image src={why} alt='Why Take Quran Reading Course' />
                    </div>
                </div>
            </SectionLayout>

            <SliderTestimonial />
            <FaqsSection />
        </main>
    )
}