import Image from 'next/image'
import React from 'react'
import cardImage from '@/../public/blog-card.png'

export default function RecentBlogsCard() {
    return (
        <div className='flex lg:flex-row flex-col gap-4 items-center'>
            <Image src={cardImage} alt='sorry' width={157} />
            <div className='flex flex-col gap-3.5'>
                <div className='flex gap-6'>
                    <h6 className='text-black font-semibold text-[12px] font-poppins'>admin</h6>
                    <h6 className='text-black font-semibold text-[12px] font-poppins'>January 3, 2023</h6>
                </div>
                <h3 className='text-black text-[16px] font-medium font-poppins'>Prophethood and the last Prophet SWS</h3>
            
            </div>
        </div>
    )
}
