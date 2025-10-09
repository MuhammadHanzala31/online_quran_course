import React from 'react'
import quote from '@/../public/quote.png'
import testi from '@/../public/test-image.png'
import Image from 'next/image'

export default function TestimonialCard() {
    return (
        <div className='hover:bg-[#FFB706] p-6 pt-2 relative bg-[#F7F7F7] transition-all' >
            <Image src={quote} alt='quote' />
            <div className='mt-4 flex flex-col gap-2 mb-6'>
                <h3 className='text-[22px] font-semibold font-poppins'>Lorem Ipsum.</h3>
                <span className='text-[#000000] font-normal font-poppins text-[14px]'>Lorem Ipsum.</span>
            </div>
            <div className='flex flex-col gap-5'>
                <span className='text-black font-poppins font-normal text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                <div className='flex flex-row gap-2.5 items-center'>
                    <i className="ri-star-fill text-xl text-black"></i>
                    <i className="ri-star-fill text-xl text-black"></i>
                    <i className="ri-star-fill text-xl text-black"></i>
                    <i className="ri-star-fill text-xl text-black"></i>
                    <i className="ri-star-fill text-xl text-black"></i>
                </div>
            </div>
            <div className='absolute border-8 -right-5 -top-5 border-white'>
                <Image src={testi} alt='testi' />
            </div>
        </div>
    )
}
