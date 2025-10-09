import React from 'react'
import contactUs from '@/../public/contact-hero.png'
import SectionLayout from '../components/SectionLayout'
import TestimonialCard from '../components/TestimonialCard'

export default function page() {
  return (
    <>
      <div className='h-[409px] contact-hero flex justify-between items-center'>
        <div className='flex text-center flex-col max-w-[688px] mx-auto w-full gap-6'>
          <h1 className='text-white  w-full text-center font-poppins text-5xl font-medium'>Contact us</h1>
          <p className='text-center font-poppins text-white text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
        </div>
      </div>
      <SectionLayout>
        <div className='flex flex-col gap-6 max-w-[992px] w-full mx-auto'>
          <h4 className='text-[#098A46] font-poppins text-[32px] font-medium text-center'>Our Plan For Individual Courses</h4>
          <p className='font-poppins text-[#535353] text-[16px] font-normal text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
        </div>
        <div className='flex flex-row items-center gap-8 max-w-[992px] w-full mx-auto lg:mt-[81px] mt-8'>
          <div className='flex flex-col gap-3 lg:w-1/2 w-full'>
            <div className='flex items-center gap-2'>
              <div className='relative py-3 px-9 border border-[#0000006e] w-full'>
                <i className="ri-user-line text-[#7AC043] text-lg absolute left-2 top-3"></i>
                <input className='text-[#535353] placeholder:text-[#535353] placeholder:text-[12px] outline-none text-[12px] font-poppins placeholder:font-poppins' placeholder='Please enter your name' />
              </div>
              <div className='relative py-3 px-9 border border-[#0000006e] w-full'>
                <i className="ri-mail-line text-[#7AC043] text-lg absolute left-2 top-3"></i>
                <input className='text-[#535353] placeholder:text-[#535353] placeholder:text-[12px] outline-none text-[12px] font-poppins placeholder:font-poppins' placeholder='Please enter your Email' />
              </div>
            </div>
            <div className='w-full'>
              <div className='relative py-3 px-9 border border-[#0000006e] '>
                <i className="ri-user-line text-[#7AC043] text-lg absolute left-2 top-3"></i>
                <input className='text-[#535353] placeholder:text-[#535353] placeholder:text-[12px] outline-none text-[12px] font-poppins placeholder:font-poppins' placeholder='+92 xxxxxxxxx' />
              </div>
            </div>
            <div className='w-full'>
              <textarea className='py-3 px-3 border border-[#0000006e] resize-none h-[140px] w-full text-[#535353] placeholder:text-[#535353] placeholder:text-[12px] outline-none text-[12px] font-poppins placeholder:font-poppins' placeholder='Enter your Message'>

              </textarea>
            </div>
            <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] w-fit">
              Sign up today
            </button>
          </div>
          <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
            <h2 className='text-black font-poppins text-3xl font-medium'>Verse By Verse Learn Quran With US</h2>
            <p className='font-poppins text-[#535353] text-[16px] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and </p>
            <ul className='mt-2 flex flex-col gap-3'>
              <li className='flex gap-2 items-center'>
                <i className="ri-map-pin-line text-lg text-[#098A46] "></i>
                <p className='font-poppins text-[#535353] text-[16px] font-normal'>Lorem Ipsum is simply dummy text of the printing </p>
              </li>
              <li className='flex gap-2 items-center'>
                <i className="ri-map-pin-line text-lg text-[#098A46] "></i>
                <p className='font-poppins text-[#535353] text-[16px] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </li>
              <li className='flex gap-2 items-center'>
                <i className="ri-phone-line text-lg text-[#098A46] "></i>
                <p className='font-poppins text-[#535353] text-[16px] font-normal'><span className='font-bold'>Uk : </span> +44 2071 931528</p>
              </li>
              <li className='flex gap-2 items-center'>
                <i className="ri-team-fill text-lg text-[#098A46] "></i>
                <p className='font-poppins text-[#535353] text-[16px] font-normal'>Lorem Ipsum is simply</p>
              </li>
            </ul>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <h4 className='text-[#098A46] font-poppins text-[32px] font-medium text-center my-14'>Our Testimonial</h4>
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
    </>
  )
}
