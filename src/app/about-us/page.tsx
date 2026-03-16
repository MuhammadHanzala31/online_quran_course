import React from 'react'
import SectionLayout from '../components/SectionLayout'
import About1 from '@/../public/about-us-1.png'
import About2 from '@/../public/about-2.png'
import About3 from '@/../public/about-3.png'
import About4 from '@/../public/about-4.png'
import Second1 from '@/../public/second_sec-1.png'
import sec2 from '@/../public/single-c-2.png'


import Image from 'next/image'
import OurMission from '../sections/homepage/OurMission'
import Link from 'next/link'


export default function page() {
    return (
        <>
            <div className='h-[409px] about-hero flex justify-between items-center'>
                <div className='flex text-center flex-col max-w-[688px] mx-auto w-full gap-6'>
                    <h1 className='text-white  w-full text-center font-poppins text-5xl font-medium'>About us</h1>
                    <p className='text-center font-poppins text-white text-[16px]'>Established in 2012, Online Quran Course has developed into a reputable online center dedicated to teaching the Quran and Islamic studies to students around the world.</p>
                </div>
            </div>
            <SectionLayout>
                <div className='flex items-center lg:flex-row flex-col'>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        <h6 className='text-[32px] font-poppins font-medium text-[#098A46]'>Our Legacy</h6>
                        <p className='text-[16px] font-poppins font-normal text-[#535353] w-[90%]'>Established in 2012, Online Quran Course is a trusted online platform dedicated to Quranic and Islamic education. Our mission is to make the teachings of the Holy Quran accessible to everyone, anywhere. With qualified scholars and experienced teachers, we offer structured courses in Quran reading, Tajweed, Tafseer, and Fiqh, helping students grow spiritually and learn Islam with confidence</p>
                        <Link href={'/registration'} className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] w-fit">
                            Get Enrolled Now
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        <Image src={About1} alt='about-us-1' />
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className='flex items-center lg:flex-row flex-col'>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        <Image src={Second1} alt='about-us-1' />
                    </div>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        <h6 className='text-[32px] font-poppins font-medium text-[#098A46]'>A Complete and Flexible Quran Learning Experience </h6>
                        <p className='text-[16px] font-poppins font-normal text-[#535353] w-[90%]'>Online Quran Course offers a structured and easy-to-follow online Quran learning experience designed for students of all levels. Our curriculum focuses on proper Tajweed, word-by-word understanding of Quranic verses, and essential Islamic knowledge. With qualified teachers and one-to-one attention, students learn at their own pace through flexible online classes that fit easily into busy daily routines.</p>
                        <Link href={'/registration'} className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] w-fit">
                            Get Enrolled Now
                        </Link>
                    </div>
                </div>
            </SectionLayout>
            <OurMission />
            <SectionLayout>
                <div className='flex flex-col justify-center gap-3 items-center max-w-[688px] mx-auto text-center'>
                    <h4 className='font-medium text-[32px] font-poppins text-[#272727]'>Online Quran Classroom Features</h4>
                    <p className='text-[#272727] font-poppins font-normal'>Our online Quran classrooms are designed to make learning engaging, simple, and effective. With supportive teachers and a structured approach, students can strengthen their Quran learning skills while building a meaningful connection with the Holy Quran in a respectful and comfortable environment.</p>
                </div>
                <div className='flex items-center lg:flex-row flex-col mt-20'>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-between'>
                        <h6 className='text-[32px] font-poppins font-medium text-black'>Our Worldwide Quran Learning Community</h6>
                        <p className='text-[16px] font-poppins font-normal text-[#535353] w-[80%]'>Online Quran Course proudly serves students from around the world, with a strong presence in the USA, UK, Pakistan, and all over the world. Our online Quran classes are accessible to learners across Europe, North America, Asia, and the Middle East. By removing geographical barriers, we make quality Quranic and Islamic education available to children and adults everywhere, helping students learn the Quran with qualified teachers from the comfort of their homes.</p>
                        <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] w-fit">
                            Get Enrolled Now
                        </button>
                    </div>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        <Image src={About2} alt='about-us-1' />
                    </div>

                </div>
                <div className='flex items-center lg:flex-row flex-col mt-20'>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        <Image src={sec2} alt='about-us-1' />
                    </div>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-between'>
                        <h6 className='text-[32px] font-poppins font-medium text-black'>Expertise and Excellence in Online Learning</h6>
                        <p className='text-[16px] font-poppins font-normal text-[#535353] w-[80%]'>At Online Quran Course, we prioritize high-quality online education by providing experienced and qualified teachers who know how to engage students effectively. Our focus is to create an interactive learning environment that helps students understand the Quran and Islamic teachings while growing in knowledge, faith, and personal development.</p>
                        <Link href={'/registration'}  className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] w-fit">
                            Get Enrolled Now
                        </Link>
                    </div>
                </div>
                <div className='flex items-center lg:flex-row flex-col mt-20'>

                    <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-between'>
                        <h6 className='text-[32px] font-poppins font-medium text-black w-[80%]'>Learning the Quran with Faith and Guidance</h6>
                        <p className='text-[16px] font-poppins font-normal text-[#535353] w-[80%]'>Online Quran Course provides meaningful online Quran learning while encouraging strong Islamic values and personal growth.</p>
                        <div className='flex gap-3.5 items-center p-2 shadow-xl shadow-gray-400 w-[90%]'>
                            <Image src={About4} alt='about-4' />
                            <div className='flex gap-3 flex-col'>
                                <p className='text-[16px] font-poppins font-normal text-[#535353] w-[80%]'>Learn the Quran with qualified male and female teachers through personalized one-on-one online sessions.</p>
                            </div>
                        </div>
                        <div className='flex gap-3.5 items-center p-2 shadow-xl shadow-gray-400 w-[90%] mt-4'>
                            <Image src={About4} alt='about-4' />
                            <div className='flex gap-3 flex-col'>
                                <p className='text-[16px] font-poppins font-normal text-[#535353] w-[80%]'>We underwent smooth online classes and made the Quran Learning easiest for all.</p>
                            </div>
                        </div>

                        <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] w-fit">
                            See how we can help
                        </button>
                    </div>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        <Image src={About3} alt='about-us-1' />
                    </div>
                </div>
            </SectionLayout>
            {/* <SectionLayout>
                <div className='grid grid-cols-3'>
                    <ExpertTeamCard />
                    <ExpertTeamCard />
                    <ExpertTeamCard />
                </div>
            </SectionLayout> */}
        </>
    )
}
