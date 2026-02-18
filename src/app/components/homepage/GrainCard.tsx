import React from 'react'
import card1 from '@/../public/grain-card-1.png'
import Image from 'next/image'
export default function GrainCard({image, text, description} : {image? : any, text? : string, description? : string}) {
  return (
    <div className='relative p-7 pl-12 bg-[#F6F6F6] border-l-4 border-[#098A46] shadow-xl skew-x-[-9deg]'>
        <div className='absolute top-[35%] -left-10'>
            <Image src={image} alt='grain' />
        </div>
      <div className='flex flex-col gap-3'>
        <h5 className='text-[24px] font-semibold font-poppins text-black'>{text}</h5>
        <p className='text-[#535353] text-[14px] font-normal font-poppins w-[80%]'>{description}</p>
      </div>
    </div>
  )
}
