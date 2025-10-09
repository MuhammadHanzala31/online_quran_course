import Image from 'next/image'
import React from 'react'
import CardImage from '@/../public/expert-team-card.png'

export default function ExpertTeamCard() {
  return (
    <div className='relative max-w-[374px]  w-full'>
        <Image src={CardImage} alt='ccard-team' className='w-full'/>
        <div className='flex justify-between px-4 absolute bottom-4 w-full'>
            <div className='flex flex-col gap'>
                <h5 className='text-xl text-white font-poppins font-medium'>Meet Our Expert Team</h5>
                <p className='text-[16px] text-white font-poppins font-normal'>created an eco-friendly </p>
            </div>
            <div className='bg-white rounded-full  h-[36px] w-[36px] flex justify-center items-center cursor-pointer hover:scale-[1.2] transition-all'>
                <i className="ri-arrow-right-up-long-line text-xl"></i>
            </div>
        </div>
    </div>
  )
}
