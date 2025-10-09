import React from 'react'

export default function BreadcrumHero() {
    return (
        <div className='flex gap-9 justify-center items-center flex-col bg-[#098A46] py-[120px]'>
            <h3 className='text-white font-medium font-poppins lg:text-5xl text-3xl'>Our Testimonials</h3>
            <div className='flex gap-2 items-center'>
                <i className="ri-home-4-fill text-white"></i>
                <span className='text-lg font-jakarta text-white font-normal'>Home</span>
                <i className="ri-arrow-right-s-line text-white"></i>
                <span className='text-lg font-jakarta text-[#FFB706] font-medium'>Our Testimonials</span>
            </div>
        </div>
    )
}
