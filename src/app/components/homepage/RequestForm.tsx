import React from 'react'

export default function RequestForm() {
    return (
        <div className='flex flex-col gap-4 w-full'>
            <input className='p-5 bg-[#F7F7F7]/41 border-1 border-[#FFFFFF]/60 rounded-md placeholder:text-white text-white text-[16px] font-normal font-poppins ' placeholder='Your Name *' type='text' />
            <input className='p-5 bg-[#F7F7F7]/41 border-1 border-[#FFFFFF]/60 rounded-md placeholder:text-white text-white text-[16px] font-normal font-poppins ' placeholder='Your Name *' type='text' />
            <input className='p-5 bg-[#F7F7F7]/41 border-1 border-[#FFFFFF]/60 rounded-md placeholder:text-white text-white text-[16px] font-normal font-poppins ' placeholder='Your Name *' type='text' />
            <input className='p-5 bg-[#F7F7F7]/41 border-1 border-[#FFFFFF]/60 rounded-md placeholder:text-white text-white text-[16px] font-normal font-poppins ' placeholder='Your Name *' type='text' />
            <button className='text-[16px] font-poppins font-normal border text-[#098A46] cursor-pointer bg-white py-4 rounded-md px-8  transition-all hover:shadow-[3px_4px_4px_#098A46] '>Send Request</button>

        </div>
    )
}
