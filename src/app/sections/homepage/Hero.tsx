import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'
import BannerImage from '@/../public/banner-main.png'
import BannerTop from '@/../public/banner-top.png'
import BannerBottom from '@/../public/banner-bottom.png'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';



export default function Hero() {
  return (
   <SectionLayout>
     <div className='flex lg:flex-row flex-col items-center lg:px-0' >
        <div className='lg:w-1/2 w-full flex flex-col gap-4 text-start' data-aos="fade-up-right">
          <h5 className='text-[16px] font-poppins font-normal text-shadow-black'>Lorem Ipsum is simply dummy text of the printing </h5>
          <h1 className='text-shadow-black font-jakarta lg:text-[64px] font-bold leading-[140%]'>Learn Quran  Online <br /> in USA</h1>
          <p className='text-[16px] font-poppins font-normal text-[#535353] lg:w-[70%]'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing  </p>
          <div className='flex gap-4 items-center mt-2'>
            <button className='text-[16px] font-poppins font-normal border border-[#098A46] cursor-pointer text-white py-2.5 px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46]'>Get Enrolled Now</button>
            <button className='text-[16px] font-poppins font-normal text-[#098A46] py-2.5 px-8 bg-transparent border hover:text-white cursor-pointer border-[#098A46] hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46]'>See Courses</button>
          </div>
        </div>
        <div className='lg:w-1/2 w-full flex items-center justify-end' data-aos="fade-up-left">
          <Image src={BannerImage} alt='banner-main' className="upAndDown"
/>    
          <div className='flex gap-4 flex-col'>
             <Image src={BannerTop} alt='banner-top' className="upAndDown"
/>
             <Image src={BannerBottom}  alt='banner-bottom' className="downAndUp"/>
            </div>    
        </div>
     </div>
   </SectionLayout>
  )
}
