import Image from 'next/image'
import React from 'react'
import Step1 from '@/../public/step1.png'
import { Url } from 'url'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export default function StepsCard({ image, para }: { image: string | StaticImport, para: string }) {
    return (
        <div className="lg:w-1/3 relative w-full">
            <Image src={image} alt='step' />
            <span className='bg-[#098A46] h-3 w-3 rounded-full absolute lg:right-[26px] right-7 top-20'></span>
            <p className=' text-[#535353] text-[16px] font-poppins font-medium w-[70%] mx-auto flex justify-center lg:left-[20%] left-[18%] absolute top-[60%] '>{para}</p>
        </div>


    )
}
