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
    title: "Online Tajweed Course Details",
};

export default async function Page({ params }:
    {
        params: Promise<{ slug: string }>
    }) {
    const { slug } = await params;

    // Features for "Why Take This Course" section
    const features = [
        {
            title: "Correct Pronunciation",
            content:
                "Master articulation points (Makharij) and letter characteristics (Sifaat) for perfect recitation.",
        },
        {
            title: "Beautiful & Fluent Recitation",
            content:
                "Develop smooth, melodious, and confident reading skills.",
        },
        {
            title: "Practical Tajweed Application",
            content:
                "Apply all Tajweed rules during continuous recitation.",
        },
        {
            title: "Personalized Guidance",
            content:
                "Receive one-on-one instruction tailored to your level and progress.",
        },
    ];

    return (
        <main>
            <section className='single-banner py-0'>
                <div className='max-w-7xl w-full mx-auto lg:px-4 px-8 lg:py-5 py-4  '>
                    <div className='flex lg:flex-row flex-col items-center gap-5 justify-between'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Perfect Your Quran Recitation</h1>
                            <h1 className='text-white font-bold font-jakarta text-[54px] '>Online Tajweed Course</h1>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Our Promise To Uphold The Trust Placed</h1>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Welcome to OQC Institute, where our Online Tajweed Course is designed to help students of all ages recite the Holy Quran with precision, beauty, and confidence. This course is perfect for learners who have basic Quran reading skills and want to advance their recitation through proper application of Tajweed rules.</p>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Students will learn the correct articulation of letters (Makharij), characteristics of sounds (Sifaat), elongation rules (Madd), Qalqalah, nasal sounds (Ghunnah), and other essential principles of Tajweed. Our certified tutors create a supportive, interactive environment where learners can practice, receive feedback, and improve steadily.</p>
                            <p className='text-white font-normal text-[18px] font-jakarta'>We are committed to nurturing students who recite the Quran beautifully, correctly, and with deep respect for its sacred text.</p>
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
                        <h2 className='text-black font-medium font-poppins text-[36px] '>Best Online Quran Academy For Tajweed</h2>
                        <p className='text-black font-normal text-[16px] font-poppins'>OQC Institute is your premier destination for mastering the art of Tajweed online. Our Tajweed course goes beyond basic reading, focusing on precise rules, rhythm, and melodious recitation.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Students gain in-depth knowledge of Tajweed rules while practicing continuous recitation. Our tutors ensure every student develops strong fluency, correct pronunciation, and proper application of all recitation principles.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Our certified male and female tutors specialize in guiding children, adults, and new Muslims, using structured, one-on-one sessions enhanced by modern digital tools. With personalized feedback and interactive exercises, students can progress confidently toward flawless Quranic recitation.</p>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex justify-start flex-col text-start my-3'>
                    <h3 className='text-black font-poppins text-[36px] font-medium'>A Structured Journey to Perfect Quran Recitation</h3>
                    <p className='text-black font-normal text-[16px] font-poppins'>This course is carefully designed to improve both the technical and aesthetic aspects of Quran recitation.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    {/* Section 1 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc2} alt='Foundation of Tajweed' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Foundation of Tajweed</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Makharij & Sifaat: </span> Master articulation points and characteristics of all Arabic letters.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Pronunciation Accuracy: </span> Practice correct sounds and letter distinctions to avoid errors.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Review of Basic Reading: </span> Consolidate prior knowledge of letters, Harakat, and basic words.</p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc3} alt='Intermediate Tajweed Rules' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Intermediate Tajweed Rules</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Madd Rules: </span> Apply short and long vowel elongation correctly.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Qalqalah & Ghunnah: </span> Implement echoing and nasal sounds accurately.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Stopping & Pausing (Waqf & Ibtidaa): </span> Learn correct rules for stopping, pausing, and restarting recitation.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Shaddah & Sukoon: </span> Practice doubled letters and silent letters in context.</p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc4} alt='Advanced Tajweed & Fluency' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Advanced Tajweed & Fluency</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Continuous Recitation Practice: </span> Read longer passages applying all Tajweed rules.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Short Surah & Ayah Practice: </span> Perfect recitation of commonly used and short Surahs.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Application of Advanced Rules: </span> Implement Idgham, Iqlab, and Ikhfa accurately.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Building Confidence: </span> Receive constructive feedback to enhance pronunciation and fluency.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <StepsSection />

            <SectionLayout>
                <div className='lg:w-1/2 w-full flex flex-col gap-4 mb-6'>
                    <h1 className='text-black font-medium font-poppins text-[36px] '>More About Online Tajweed Course</h1>
                    <p className='text-black font-normal text-[16px] font-poppins'>This course is carefully designed to help learners recite the Quran flawlessly, with proper rules and melodious rhythm.</p>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-1/2'>
                        <Image src={more} alt='Online Tajweed Course Illustration' />
                    </div>
                    <div className='w-1/2 grid grid-cols-2 space-x-3.5 space-y-3.5'>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Master Tajweed Rules</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Students learn all essential rules including Madd, Qalqalah, Ghunnah, Idgham, Iqlab, Ikhfa, and stopping/pausing rules.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Fluency & Accuracy</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Focus on continuous, smooth recitation while applying rules correctly.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Certified Expert Instruction</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>One-on-one online lessons with certified tutors ensure mistakes are corrected and skills are reinforced.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Flexible & Self-Paced Learning</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Students can progress at their own pace and revisit challenging areas anytime through recorded sessions.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-[45%] flex flex-col gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Why Take This Course</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'>This course is ideal for anyone looking to improve Quranic recitation, whether child, adult, or new Muslim.</p>
                        </div>
                        <Faq faqs={features} />
                    </div>
                    <div className='w-1/2'>
                        <Image src={why} alt='Why Take Tajweed Course' />
                    </div>
                </div>
            </SectionLayout>

            <SliderTestimonial />
            <FaqsSection />
        </main>
    )
}