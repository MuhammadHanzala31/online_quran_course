import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'

export default function FaqsSection() {
    return (
        <SectionLayout>
            <div className='bg-[#F7F7F7] lg:p-[117px] pb-[40px] flex items-center lg:flex-row flex-col'>
                <div className='lg:w-1/2 w-full flex flex-col gap-4'>
                    <p className='text-[#535353] text-[16px] font-poppins font-medium max-w-[614px]'>FAQ’s</p>
                    <h5 className='text-4xl font-poppins font-medium max-w-[614px] '> Frequently Asked Question</h5>
                    <p className='text-[#535353] text-[16px] font-poppins font-medium max-w-[453px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className='text-[16px] font-poppins font-normal border border-[#098A46] cursor-pointer mt-14 text-white py-2.5 px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] w-fit'>Apply Now</button>
                </div>
            </div>
        </SectionLayout>
    )
}
