import Image from 'next/image'
import React from 'react'
import Single from '@/../public/single-card.png'
import Link from 'next/link'

export default function SingleCourseCard({ className, description, name }: { className?: string, description: string, name: string }) {
  return (
    <Link href={`course/${name}`} className='flex flex-col shadow-lg relative h-[455px]'>
      <Image
        src={Single}
        alt='sorry'
      />
      <div className='bg-[#F0F0F0] pt-1.5 p-6 mx-auto flex flex-col jusitfy-center gap-2 text-center h-full'>
        <div className='bg-[white] p-1 px-2 text-black flex gap-2 shadow-lg font-poppins text-sm  font-medium w-fit'>
          <i className="ri-time-line"></i>
          <span>25 weeks</span>
        </div>
        <h5 className='text-2xl font-poppins font-semibold'>{name}</h5>
        <p className='text-[15px] text-black font-normal font-poppins'>{description}</p>
        <div className='mt-4 flex items-baseline gap-2 justify-center absolute bottom-4 left-10'>
          <Link href={`/registration`} className='bg-[#FFB706] px-2 py-1 rounded text-black font-poppins text-sm font-medium cursor-pointer'>Registeration</Link>
          <Link href={`/course/${name}`} className='bg-[#098A46] px-2 py-1 rounded text-white font-poppins text-sm font-medium cursor-pointer'>Learn more</Link>
        </div>
      </div>
    </Link>
  )
}
