import React from 'react'
import Img from '@/../public/why-choose-1.png'
import Image from 'next/image'

export default function WhYChooseCard() {
  return (
    <div className='bg-[#F2F2F2] py-7.5 px-5 relative pt-[83px] flex flex-col gap-4 text-center justify-center items-center max-h-[230px] group choose-card transition-all hover:bg-gradient-to-bl hover:bg-[#7AC043] to-[#098A46]'>
      <Image src={Img} alt='img1' className='absolute -top-14 mx-auto text-center' />
      <h5 className='text-[24px] font-semibold font-poppins text-black group-hover:text-white'>Expert Tutors</h5>
      <p className='text-[#535353] text-[14px] font-normal font-poppins group-hover:text-white'>Learn from highly qualified and experienced Quran teachers who specialize in Tajweed, Tafseer, and Islamic studies.</p>
    </div>
  )
}
