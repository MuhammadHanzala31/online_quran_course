import SectionLayout from '@/app/components/SectionLayout'
import Image from 'next/image'
import React from 'react'
import lms from '@/../public/lms.png'

export default function AdvancedLmsSectin() {
    return (
        <SectionLayout className='bg-[#F2F2F2] p-6'>
            <div className='mb-[64px] flex flex-col gap-4 mx-auto text-center justify-center' >
                <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[614px]'>Online Quran Education In USA Made Easy</p>
                <h5 className='text-4xl font-poppins font-medium max-w-[614px] mx-auto'><span className='text-[#098A46]'>OQC</span> Academy’s Advanced <span className='text-[#098A46]'>LMS</span></h5>
            </div>
            <div className='flex lg:flex-row flex-col justify-between items-center'>
                <div className='lg:w-1/2 w-full flex flex-col gap-6'>
                    <div className='bg-white py-2.5 px-6 text-black font-poppins text-[16px] font-normal w-fit'>
                        All in One for Education
                    </div>
                    <h3 className='text-4xl font-poppins text-black font-medium'>Layout Ready, Build Everything.</h3>
                    <ul className='max-w-[445px] flex flex-col gap-2.5 pl-[20px]'>
                        <li className='text-black font-poppins text-[16px] font-normal flex flex-row gap-2'><span className='w-2.5 mt-2 h-2 rounded-full bg-[#098A46]'></span> <div> <span className='text-[#098A46] font-semibold text-xl'>Easy Access</span> : User-friendly platform for smooth learning experience.  </div></li>
                        <li className='text-black font-poppins text-[16px] font-normal flex flex-row gap-2'><span className='w-2.5 mt-2 h-2 rounded-full bg-[#098A46]'></span> <div> <span className='text-[#098A46] font-semibold text-xl'>Easy Access</span> : User-friendly platform for smooth learning experience.  </div></li>
                        <li className='text-black font-poppins text-[16px] font-normal flex flex-row gap-2'><span className='w-2.5 mt-2 h-2 rounded-full bg-[#098A46]'></span> <div> <span className='text-[#098A46] font-semibold text-xl'>Easy Access</span> : User-friendly platform for smooth learning experience.  </div></li>
                        <li className='text-black font-poppins text-[16px] font-normal flex flex-row gap-2'><span className='w-2.5 mt-2 h-2 rounded-full bg-[#098A46]'></span> <div> <span className='text-[#098A46] font-semibold text-xl'>Easy Access</span> : User-friendly platform for smooth learning experience.  </div></li>
                        <li className='text-black font-poppins text-[16px] font-normal flex flex-row gap-2'><span className='w-2.5 mt-2 h-2 rounded-full bg-[#098A46]'></span> <div> <span className='text-[#098A46] font-semibold text-xl'>Easy Access</span> : User-friendly platform for smooth learning experience.  </div></li>
                        <li className='text-black font-poppins text-[16px] font-normal flex flex-row gap-2'><span className='w-2.5 mt-2 h-2 rounded-full bg-[#098A46]'></span> <div> <span className='text-[#098A46] font-semibold text-xl'>Easy Access</span> : User-friendly platform for smooth learning experience.  </div></li>
                    </ul>
                </div>
                <div className='lg:w-1/2 w-full flex flex-col gap-4'>
                    <Image src={lms} alt='lms'/>
                </div>
            </div>
        </SectionLayout>
    )
}
