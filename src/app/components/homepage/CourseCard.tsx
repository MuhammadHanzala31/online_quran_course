import Image from 'next/image'
import React from 'react'
import CourseCardImage from '../../../../public/course-card.png'
export default function CourseCard({className, description, name} : {className? : string, description : string, name : string}) {
  return (
    <div className='p-2 mx-2 h-[420px] shadow-lg border bg-white border-[#DADADA]'>
      <div className='relative'>
        <div className='absolute bg-white flex gap-2 items-center px-3.5 pt-2.5 shadow left-[23%] '>
            <span className='text-black font-poppins text-[12px] font-normal'>Ratings</span>
            <div className='flex gap items-center text-[#FFB706]'>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
            </div>
        </div>
        <Image src={CourseCardImage} height={207} alt='corusecard'/>
      </div>
      <div className='px-[6px] mt-[12px]'>
        <div className='flex justify-between items-center '>
            <div className='bg-[#F0F0F0] p-1 px-2 text-black flex gap-2 shadow-lg font-poppins text-sm  font-medium'>
                <i className="ri-presentation-line"></i>
                <span>Experts</span>
            </div>
        </div>
         <div className='mt-3.5'>
            <h4 className='text-black font-semibold font-poppins text-xl mb-3'>{name}​</h4>
            <p className='text-[#535353] text-sm font-jakarta'>{description}​</p>
         </div>
         <div className='mt-4 flex items-baseline gap-2 justify-end'>
            <button className='bg-[#FFB706] px-2 py-1 rounded text-black font-poppins text-sm font-medium cursor-pointer'>Registeration</button>
            <button className='bg-[#098A46] px-2 py-1 rounded text-white font-poppins text-sm font-medium cursor-pointer'>Learn more</button>
         </div>
      </div>
    </div>
  )
}
