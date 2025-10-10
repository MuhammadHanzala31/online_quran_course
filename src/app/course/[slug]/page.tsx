import CourseModule from '@/app/components/CourseModule'
import RegistrationForm from '@/app/components/RegisterForm'
import SectionLayout from '@/app/components/SectionLayout'
import Images from '@/../public/course-card.png'
import section3 from '@/../public/second_sec-1.png'
import React from 'react'
import Image from 'next/image'
import FaqsSection from '@/app/sections/homepage/FaqsSection'
import RequestFormSection from '@/app/sections/homepage/RequestFormSection'
import Aboutus from '@/app/sections/homepage/Aboutus'
import OurMission from '@/app/sections/homepage/OurMission'
import WhyChoose from '@/app/sections/homepage/WhyChoose'
import FreeCourseCard from '@/app/components/homepage/FreeCourseCard'
import StepsSection from '@/app/sections/homepage/StepsSection'
import Teachers from '@/app/sections/homepage/Teachers'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Course Details",
};

type Props = {
    params: { slug: string };
};

export default function Page({ params }: Props) {

    const { slug } = params;


    return (
        <div>
            <div className='contact-hero lg:py-[40px] py-10'>
                <SectionLayout>
                    <div className='flex lg:flex-row flex-col justify-between items-center '>
                        <div className='flex flex-col lg:w-1/2 w-full gap-6'>
                            <h1 className='text-white  w-full  font-poppins text-5xl font-medium'>{slug}</h1>
                            <p className=' font-poppins text-white text-[16px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, deleniti architecto adipisci vitae iusto laudantium fuga sit ipsa molestias voluptatem repudiandae, voluptates odio excepturi accusantium quam rerum. Quod aperiam debitis assumenda, ut, vitae cupiditate accusamus quibusdam, atque quisquam eos illo animi sed labore saepe cumque possimus. Qui maiores odit animi.</p>
                            <p className=' font-poppins text-white text-[16px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, deleniti architecto adipisci vitae iusto laudantium fuga sit ipsa molestias voluptatem repudiandae, voluptates odio excepturi accusantium quam rerum. Quod aperiam debitis assumenda, ut, vitae cupiditate accusamus quibusdam, atque quisquam eos illo animi sed labore saepe cumque possimus. Qui maiores odit animi.</p>
                            <p className=' font-poppins text-white text-[16px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, deleniti architecto adipisci vitae iusto laudantium fuga sit ipsa molestias voluptatem repudiandae, voluptates odio excepturi accusantium quam rerum. Quod aperiam debitis assumenda, ut, vitae cupiditate accusamus quibusdam, atque quisquam eos illo animi sed labore saepe cumque possimus. Qui maiores odit animi.</p>
                        </div>
                        <div className='lg:w-1/2 w-full flex justify-end'>
                            <RegistrationForm />
                        </div>
                    </div>
                </SectionLayout>
            </div>
            <SectionLayout>
                <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
                    <section>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            Basics of Hadith: A Beginner&apos;s Guide to Understanding the Prophetic Sunnah
                        </h1>
                        <p className="text-sm text-gray-600">
                            <strong>LEVELS: 4</strong> | <strong>DURATION: 55 Hours</strong>
                        </p>
                        <ul className="list-disc ml-6 mt-4 text-gray-700 text-sm space-y-1">
                            <li>Memorize 49 hadiths.</li>
                            <li>Learn the meanings of individual words.</li>
                            <li>Understand the general meaning of the hadith.</li>
                            <li>Identify the narrators of the hadith among the Companions.</li>
                            <li>Practical applications for behaving according to the ethics of the hadith.</li>
                        </ul>
                    </section>
                    <div className="space-y-6">
                        <CourseModule
                            id="section1"
                            level="Level 1"
                            title="Prophetic Hadiths on Islamic Ethics and Morals"
                            description="Memorize 12 hadiths emphasizing the Prophetic guidance in ethics and morals. Includes topics like food etiquette, avoiding bad behavior, fostering love for others, prayer, patience, and peace."
                            image={Images.src}
                        />
                        <CourseModule
                            id="section2"
                            level="Level 2"
                            title="Light of Guidance: Hadiths on the Pillars of Islam & Honesty"
                            description="Memorize 12 hadiths on pillars of Islam and honesty. Includes companionship, orphan care, honesty in work, rights of a Muslim, and more."
                            image={Images.src}
                        />
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Why Choose Riwaq al-Quran?
                        </h2>
                        <p className="text-gray-600">
                            Choose Riwaq al-Quran for an exceptional online learning experience.
                            Our courses offer a variety of unique features designed to enhance
                            your Quranic education and make your learning journey engaging,
                            consistent, and effective.
                        </p>
                        <div className="relative w-64 h-64">
                            <Image src={section3} alt='sorry' />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute top-0 right-0">
                            <button className="bg-[#6237c8] text-white px-5 py-2 rounded shadow hover:bg-[#4f29a6] transition">
                                Explore Courses
                            </button>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 mt-12">
                            <div className="border rounded-lg p-5 bg-white shadow hover:shadow-md transition">
                                <h3 className="font-semibold mb-2">Highly Qualified Teachers</h3>
                                <p className="text-sm text-gray-600">
                                    Our highly qualified and certified teachers hold Ijazah and are
                                    skilled in making Quran learning engaging, effective, and
                                    enjoyable.
                                </p>
                            </div>
                            <div className="border rounded-lg p-5 bg-white shadow hover:shadow-md transition">
                                <h3 className="font-semibold mb-2">Free Trial Classes</h3>
                                <p className="text-sm text-gray-600">
                                    Experience our classes risk-free! Try a free session and see how
                                    our expert tutors can transform your Quran learning experience.
                                </p>
                            </div>
                            <div className="border rounded-lg p-5 bg-white shadow hover:shadow-md transition">
                                <h3 className="font-semibold mb-2">24/7 Available Support</h3>
                                <p className="text-sm text-gray-600">
                                    Riwaq al-Quran offers 24/7 student support to ensure your
                                    questions and concerns are always addressed promptly and
                                    effectively.
                                </p>
                            </div>
                            <div className="border rounded-lg p-5 bg-white shadow hover:shadow-md transition">
                                <h3 className="font-semibold mb-2">Completion Certificates</h3>
                                <p className="text-sm text-gray-600">
                                    Get a certificate upon course completion to acknowledge your
                                    achievement and dedication to Quranic learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionLayout>
            <StepsSection />
            <div className="bg-[#F6F6F6]">
                <SectionLayout>
                    <h4 className='text-4xl font-medium font-poppins text-black py-9 text-center mx-auto  max-w-[614px]'>Featured <span className='text-[#098A46]'> Courses</span></h4>
                    <div className='grid grid-cols-3 space-x-2 space-y-2' data-aos="zoom-in-up">
                        <FreeCourseCard />
                        <FreeCourseCard />
                        <FreeCourseCard />
                        <FreeCourseCard />
                        <FreeCourseCard />
                    </div>
                </SectionLayout>
            </div>
            <SectionLayout>
                <h4 className='text-4xl font-medium font-poppins text-black py-9 text-center mx-auto  max-w-[614px]'>Free Online Quran Classes  <span className='text-[#098A46]'> By OQC Academy</span></h4>
                <div className='grid grid-cols-3 space-x-2 space-y-2' data-aos="zoom-in-up">
                    <FreeCourseCard />
                    <FreeCourseCard />
                    <FreeCourseCard />
                    <FreeCourseCard />
                    <FreeCourseCard />
                </div>
            </SectionLayout>
            <div className="bg-[#F6F6F6]">
                <SectionLayout>
                    <h4 className='text-4xl font-medium font-poppins text-black py-9 text-center mx-auto  max-w-[614px]'>What The Adults Will Learn In The <span className='text-[#098A46]'>Online Quran Classes </span></h4>
                    <div className='grid grid-cols-3 space-x-2 space-y-2' data-aos="zoom-in-up">
                        <FreeCourseCard />
                        <FreeCourseCard />
                        <FreeCourseCard />
                        <FreeCourseCard />
                        <FreeCourseCard />
                    </div>
                </SectionLayout>
            </div>
            <WhyChoose />
            <Teachers />
            <OurMission />
            <Aboutus />
            <RequestFormSection />
            <FaqsSection />
        </div>
    )
}
