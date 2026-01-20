"use client"

import React, { useEffect, useState } from 'react'
import image1 from '@/../public/lms-sec-1.png'
import image2  from '@/../public/about-us-1.png'
import Image from 'next/image'

export default function LmsSection() {

   


    const options = [
        {
            _id: 1,
            button: 'Courses Layout.',
            image: image1
        },
        {
            _id: 2,
            button: 'Header layout.',
            image: image2
        },
        { 
            _id: 3,
            button: 'Complete Design Toolkit.',
            image: image1
        },
        {
            _id: 4,
            button: 'Infinitely Flexible.',
            image: image2
        },
    ]


     const [image, setImage] = useState(image1)
    const [activeTab, setActiveTab] = useState(options[0])


    return (
        <section className='bg-[#F7F7F7] py-12 max-w-[1392px] w-full mx-auto px-24'>
            <div className='mb-[50px] flex flex-col gap-6 text-center' >
                <p className='text-[#535353] text-[16px] font-poppins font-medium'>Online Quran Education In USA Made Easy</p>
                <h5 className='text-4xl font-poppins font-medium'>OQC Academy’s Advanced   <span className='text-[#098A46]'> LMS</span></h5>
            </div>
            <div className='flex lg:flex-row flex-col gap-8 justify-between'>
                <div className='flex flex-col gap-4 lg:w-[40%] w-full'>
                    <div className='px-4 py-2 bg-white shadow-lg text-black text-[16px] font-poppins font-medium w-fit'>All in One for Education</div>
                    <h4 className='text-black font-poppins font-bold text-4xl'>Layout Ready, Build Everything.</h4>
                    <div className='flex flex-col gap-4 mt-6'>
                        {
                            options.map((items, idx) => (
                                <button key={items._id} onClick={()=>{
                                    setImage(items.image)
                                    setActiveTab(options[idx])
                                }} className={`flex gap-2 items-center px-4 py-2  shadow-2xl ${activeTab._id === items._id ? 'bg-[#FFB706]' : 'bg-white'}`}>
                                    <i className="ri-book-marked-line text-black text-3xl"></i>
                                    <span className='font-poppins text-3xl font-semibold text-black '>{items.button}</span>
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className='lg:w-[60%] w-full'>
                    <Image src={image} alt='lms-image' className='w-full h-[550px]'/>
                </div>
            </div>
        </section>
    )
}
