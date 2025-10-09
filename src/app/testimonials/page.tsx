import React from 'react'
import BreadcrumHero from '../components/BreadcrumHero'
import SectionLayout from '../components/SectionLayout'
import TestimonialCard from '../components/TestimonialCard'
import testi from '@/../public/testi.png'
import testiFooter from '@/../public/testi-footer.png'
import Image from 'next/image'

export default function page() {
    return (
        <>
            <BreadcrumHero />
            <SectionLayout>
                <div className='flex lg:flex-row flex-col'>
                    <Image src={testi} alt='testi' />
                    <div className='w-fit'></div>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className='grid grid-cols-1 lg:grid-cols-3 space-x-7 space-y-7'>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </SectionLayout>
            <div className='bg-[#098A46]'>
                <section className='max-w-[1400px] w-full mx-auto lg:px-4 px-8 lg:mt-[50px] mt-7 lg:py-10 py-4'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col gap-6 max-w-[513px] w-full'>
                            <h3 className='text-white font-medium text-4xl font-poppins'> Transform Your IT Today-Speak with Our Experts!</h3>
                            <p className='text-white font-poppins text-[16px] font-normal'>Ready to take your business to the next level with cutting-edge IT solutions? Our team is here to help you transform.</p>
                            <div className='bg-white p-4 relative'>
                                <input className='font-normal font-poppins text-[16px] text-[#272727] placeholder:text-[#272727] placeholder:text-[16px] outline-none' placeholder='Email address' />
                                <button className='py-2.5 px-4.5 bg-[#098A46] text-white font-medium absolute right-2 font-poppins text-[16px] bottom-1.5 cursor-pointer hover:scale-[0.9] transition-all flex gap-2 items-center'>Subscribe <i className="ri-arrow-right-long-line text-lg"></i></button>
                            </div>
                        </div>
                        <Image src={testiFooter} alt='footer' className='relative top-[100px]' />
                    </div>
                </section>
            </div>
        </>
    )
}
