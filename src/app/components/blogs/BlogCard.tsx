import Image from 'next/image'
import React from 'react'
import cardImage from '@/../public/blog-card.png'

export default function BlogCard({flexDirection} : {flexDirection? : string}) {
  return (
    <div className={`flex flex-col gap-4 items-center ${flexDirection? flexDirection : 'lg:flex-row'}`}>
      <Image src={cardImage} alt='sorry'/>
      <div className='flex flex-col gap-3.5'>
        <div className='flex gap-6'>
          <h6 className='text-black font-semibold text-[12px] font-poppins'>admin</h6>
          <h6 className='text-black font-semibold text-[12px] font-poppins'>January 3, 2023</h6>
        </div>
        <h3 className='text-[#098A46] text-[24px] font-medium font-poppins'>Prophethood and the last Prophet SWS</h3>
        <p className='text-[#535353] font-poppins text-[16px] w-[90%]'>Prophethood refers to the belief in a religious tradition that certain individuals were chosen by God to be messengers or prophets who were tasked </p>
      </div>
    </div>
  )
}
