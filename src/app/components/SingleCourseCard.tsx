import Image from 'next/image'
import React from 'react'
import Single from '@/../public/single-card.png'
import Link from 'next/link'

export default function SingleCourseCard() {
  return (
    <Link href={'/course/lorem'} className='flex flex-col shadow-lg'>
      <Image 
      src={Single}
      alt='sorry'
      />
      <div className='bg-[#F0F0F0] p-6 mx-auto flex flex-col jusitfy-center gap-6 text-center rounded-b-lg'>
        <h5 className='text-2xl font-poppins font-semibold'>Lorem Ipsum is simply</h5>
        <p className='text-[15px] text-black font-normal font-poppins'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply</p>
        <div className='flex justify-between items-center'>
            <button className='bg-[#098A46] p-2 rounded-md text-white font-poppins text-[14px] font-normal'>Learn more</button>
            <button className='bg-white border border-black p-2 rounded-md text-black font-poppins text-[14px] font-normal'>Learn more</button>
        </div>
      </div>
    </Link>
  )
}
