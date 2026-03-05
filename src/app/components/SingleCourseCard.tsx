import Image from 'next/image'
import React from 'react'
import Single from '@/../public/single-card.png'
import Link from 'next/link'

export default function SingleCourseCard({className, description, name} : {className? : string, description : string, name : string}) {
  return (
    <Link href={'/course/lorem'} className='flex flex-col shadow-lg'>
      <Image 
      src={Single}
      alt='sorry'
      />
      <div className='bg-[#F0F0F0] p-6 mx-auto flex flex-col jusitfy-center gap-6 text-center'>
        <h5 className='text-2xl font-poppins font-semibold'>{name}</h5>
        <p className='text-[15px] text-black font-normal font-poppins'>{description}</p>
        <div className='flex gap-1 items-center justify-center'>
            <button className='bg-[#098A46] p-2 px-4 rounded-full text-white font-poppins text-[14px] font-normal'>Read More</button>
            <button className='bg-white border border-black p-2 px-4 rounded-full text-black font-poppins text-[14px] font-normal'>Register</button>
        </div>
      </div>
    </Link>
  )
}
