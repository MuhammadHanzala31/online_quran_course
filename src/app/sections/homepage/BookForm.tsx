import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'

export default function BookForm() {
  return (
    <SectionLayout>
      <div data-aos="zoom-in-down" className='px-6 py-7 border-3 border-[#098A46] flex lg:flex-row flex-col gap-4'>
        <input placeholder='Enter your name *' required className='w-1/5 py-5 px-4 shadow-md border-3 rounded-xs border-gray-300 placeholder:text-[#098A46] placeholder:font-poppins placeholder:text-[14px] placeholder:font-medium' />
        <input placeholder='Enter your email *' required className='w-1/5 py-5 px-4 shadow-md border-3 rounded-xs border-gray-300 placeholder:text-[#098A46] placeholder:font-poppins placeholder:text-[14px] placeholder:font-medium' />
        <div className='relative w-1/5'>
          <span className='bg-[#E6E6E6] px-2 py-[5.5px] flex justify-center items-center text-[#098A46] absolute left-3 top-5 text-[14px] font-poppins font-semibold shadow-lg'>+1</span>
          <input placeholder='Phone number' required className='w-full py-5 px-4 pl-14 shadow-md border-3 rounded-xs border-gray-300 placeholder:text-[#098A46] placeholder:font-poppins placeholder:text-[14px] placeholder:font-medium' />
        </div>
        <input placeholder='Enter your age *' required className='w-1/5 py-5 px-4 shadow-md border-3 rounded-xs border-gray-300 placeholder:text-[#098A46] placeholder:font-poppins placeholder:text-[14px] placeholder:font-medium' />
        <button className='w-1/5 py-[19px] transition-all bg-[#098A46] hover:bg-[#7AC043] text-white font-semibold text-xl font-poppins rounded-xs cursor-pointer'>Book Now</button>
      </div>
    </SectionLayout>
  )
}