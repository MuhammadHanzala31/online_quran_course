import Image from 'next/image'
import React from 'react'
import cardImage from '@/../public/blog-card.png'

export default function BlogCard({ flexDirection, image, title, date, author, expert }: { flexDirection?: string, image?: string, title?: string, author?: string, expert?: string, date?: string }) {
  return (
    <div className={`flex flex-col gap-4 items-center ${flexDirection ? flexDirection : 'lg:flex-row'}`}>
      <Image src={image ? image : cardImage} alt='sorry' />
      <div className='flex flex-col gap-3.5'>
        <div className='flex gap-6'>
          <h6 className='text-black font-semibold text-[12px] font-poppins'>{author}</h6>
          <h6 className='text-black font-semibold text-[12px] font-poppins'>{date}</h6>
        </div>
        {/* <h3 className='text-[#098A46] text-[24px] font-medium font-poppins' dangerouslySetInnerHTML={{
          __html : title
        }}></h3> */}
        <p className='text-[#535353] font-poppins text-[16px] w-[90%]'>{expert}</p>
      </div>
    </div>
  )
}
