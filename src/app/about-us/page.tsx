import React from 'react'
import SectionLayout from '../components/SectionLayout'
import About1 from '@/../public/about-us-1.png'
import About2 from '@/../public/about-2.png'
import About3 from '@/../public/about-3.png'
import About4 from '@/../public/about-4.png'
import Image from 'next/image'
import OurMission from '../sections/homepage/OurMission'
import ExpertTeamCard from '../components/ExpertTeamCard'

export default function page() {
    return (
        <>
            <div className='h-[409px] about-hero flex justify-between items-center'>
                <div className='flex text-center flex-col max-w-[688px] mx-auto w-full gap-6'>
                    <h1 className='text-white  w-full text-center font-poppins text-5xl font-medium'>About us</h1>
                    <p className='text-center font-poppins text-white text-[16px]'>Quran Master Online stretches out the leading cause of Quran reading, learning, and memorizing to educate a more extensive scale under its probity.</p>
                </div>
            </div>
            <SectionLayout>
                <div className='flex items-center lg:flex-row flex-col'>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        <h6 className='text-[32px] font-poppins font-medium text-[#098A46]'>Lorem Ipsum is simply </h6>
                        <p className='text-[16px] font-poppins font-normal text-[#535353] w-[90%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] w-fit">
                            Get Enrolled Now
                        </button>
                    </div>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        <Image src={About1} alt='about-us-1' />
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className='flex items-center lg:flex-row flex-col'>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        <Image src={About1} alt='about-us-1' />
                    </div>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        <h6 className='text-[32px] font-poppins font-medium text-[#098A46]'>Lorem Ipsum is simply </h6>
                        <p className='text-[16px] font-poppins font-normal text-[#535353] w-[90%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] w-fit">
                            Get Enrolled Now
                        </button>
                    </div>

                </div>
            </SectionLayout>
            <OurMission />
            <SectionLayout>
                <div className='flex flex-col justify-center gap-3 items-center max-w-[688px] mx-auto text-center'>
                    <h4 className='font-medium text-[32px] font-poppins text-[#272727]'>Online Quran Classroom Feature</h4>
                    <p className='text-[#272727] font-poppins font-normal'>Quran Master Online polishes the learning skills for the individuals who love to intertwine with the Holy Quran learning tactics. We are a subtle way to educate you mannerly.</p>
                </div>
                <div className='flex items-center lg:flex-row flex-col mt-20'>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-between'>
                        <h6 className='text-[32px] font-poppins font-medium text-black'>Interactive UI </h6>
                        <p className='text-[16px] font-poppins font-normal text-[#535353] w-[80%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                        <Image src={About2} alt='about-us-1' />
                    </div>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-between'>
                        <h6 className='text-[32px] font-poppins font-medium text-black'>Interactive UI </h6>
                        <p className='text-[16px] font-poppins font-normal text-[#535353] w-[80%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] w-fit">
                            Get Enrolled Now
                        </button>
                    </div>
                </div>
                <div className='flex items-center lg:flex-row flex-col mt-20'>

                    <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-between'>
                        <h6 className='text-[32px] font-poppins font-medium text-black w-[80%]'>Lorem Ipsum is simply dummy text of the printing and </h6>
                        <p className='text-[16px] font-poppins font-normal text-[#535353] w-[80%]'>We underwent smooth online classes and made the Quran Learning easiest for all. We created an eco-friendly online safest atmosphere to make you comfortable while learning.</p>
                        <div className='flex gap-3.5 items-center p-2 shadow-xl shadow-gray-400 w-[90%]'>
                            <Image src={About4} alt='about-4' />
                            <div className='flex gap-3 flex-col'>
                                <h5 className='font-poppins text-xl font-medium'>Lorem Ipsum is simply dummy</h5>
                                <p className='text-[16px] font-poppins font-normal text-[#535353] w-[80%]'>We underwent smooth online classes and made the Quran Learning easiest for all.</p>
                            </div>
                        </div>
                        <div className='flex gap-3.5 items-center p-2 shadow-xl shadow-gray-400 w-[90%] mt-4'>
                            <Image src={About4} alt='about-4' />
                            <div className='flex gap-3 flex-col'>
                                <h5 className='font-poppins text-xl font-medium'>Lorem Ipsum is simply dummy</h5>
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
            <SectionLayout>
                <div className='grid grid-cols-3'>
                    <ExpertTeamCard />
                    <ExpertTeamCard />
                    <ExpertTeamCard />
                </div>
            </SectionLayout>
        </>
    )
}
