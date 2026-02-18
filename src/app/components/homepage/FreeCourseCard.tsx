import Image from 'next/image'
import React from 'react'
import FreeCourseImage from '@/../public/free_card.png'

export interface card{
    image : any,
    title : string,
    description : string,
    url : string
}

export default function FreeCourseCard({image, title, description, url} : card) {
    return (
        <div className='bg-white shadow p-2.5 flex lg:flex-row flex-col gap-2 border border-[#DADADA] justify-center'>
            <Image src={image} alt='card_image' />
            <div className='flex flex-col gap-6'>
                <div className='flex justify-items-start'>
                    <div className='bg-[#F0F0F0] p-1 px-2 text-black flex gap-2 shadow-lg font-poppins text-sm  font-medium'>
                        <i className="ri-presentation-line"></i>
                        <span>Experts</span>
                    </div>
                </div>
                <h4 className='text-black font-semibold font-poppins text-xl'>{title}</h4>
                <p className='text-[#535353] text-sm font-jakarta'>{description}</p>

                <div className='flex justify-between items-center'>
                    <div className='bg-[#7AC043] p-1 px-2 text-white flex gap-2 shadow-lg font-poppins text-sm  font-medium'>
                        <i className="ri-book-open-line"></i>
                        <span>Experts</span>
                    </div>
                    <div className='bg-[#7AC043] p-1 px-2 text-white flex gap-2 shadow-lg font-poppins text-sm  font-medium'>
                        <i className="ri-map-pin-user-fill"></i>
                        <span>Studnets</span>
                    </div>
                </div>
                <div className='mt-4 flex items-baseline gap-2 justify-end'>
                    <button className='bg-[#FFB706] px-2 py-1 rounded text-black font-poppins text-sm font-medium cursor-pointer'>Registeration</button>
                    <button className='bg-[#098A46] px-2 py-1 rounded text-white font-poppins text-sm font-medium cursor-pointer'>Learn more</button>
                </div>
            </div>
        </div>
    )
}
