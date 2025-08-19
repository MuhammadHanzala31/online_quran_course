import StepsCard from '@/app/components/homepage/StepsCard'
import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'
import Step1 from '@/../public/step1.png'
import Step2 from '@/../public/step-2.png'
import Step3 from '@/../public/step-3.png'


export default function StepsSection() {

    const stepsCardData = [
        {
            _id: 11,
            para: 'Fill the contact form or call at our numbers.',
            image: Step1
        },
        {
            _id: 12,
            para: 'Take free trial class at your desired time.',
            image: Step2
        },
        {
            _id: 13,
            para: 'Pay if you like & start learning the full course.',
            image: Step3
        },
    ]




    return (
        <SectionLayout >
            <div className='mb-[50px] flex flex-col gap-6 text-center' >
                <h5 className='text-4xl font-poppins font-medium'><span className='text-[#098A46]'>3</span> Easy Steps To <span className='text-[#098A46]'> Learn Quran Online!</span></h5>
                <p className='text-[#535353] text-[16px] font-poppins font-medium'>Start Online Quran Learning In USA</p>
            </div>
            <div className='flex justify-center lg:flex-row flex-col lg:gap-0 gap-4' data-aos="zoom-in-down">
                {
                    stepsCardData && stepsCardData.map(card => (
                        <StepsCard {...card} key={card._id} />
                    ))
                }
            </div>
        </SectionLayout>
    )
}
