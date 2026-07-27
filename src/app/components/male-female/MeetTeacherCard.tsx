import Image from 'next/image'
import React from 'react'
import blank from '@/../public/Rectangle 317.png'

export default function MeetTeacherCard({image, text, heading} : {image : any, text : string, heading? : string}) {
    return <div className='flex lg:flex-row flex-col justify-between items-center'>
        <div className='w-1/2'>
            <Image src={image} alt='sorry' className='h-[300px] w-[90%] object-fit'/>
        </div>
        <div className='w-1/2 flex flex-col gap-5'>
            <h6 className='text-black font-semibold font-poppins text-[24px]'>{heading}</h6>
            <p className='text-[#1B1B1B] font-poppins text-[16px] font-normal'>{text}</p>
        </div>
    </div>
}
