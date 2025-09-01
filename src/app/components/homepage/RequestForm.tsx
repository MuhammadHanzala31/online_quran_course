import React from 'react'

export default function RequestForm() {
    return (
        <div className='flex flex-col gap-4 w-full'>
            <input className='p-5 bg-[#F7F7F7] placeholder:text-black text-[16px] font-normal font-poppins ' placeholder='Your Name *' type='text' />
            <input className='p-5 bg-[#F7F7F7] placeholder:text-black text-[16px] font-normal font-poppins ' placeholder='Your Name *' type='text' />
            <input className='p-5 bg-[#F7F7F7] placeholder:text-black text-[16px] font-normal font-poppins ' placeholder='Your Name *' type='text' />
            <input className='p-5 bg-[#F7F7F7] placeholder:text-black text-[16px] font-normal font-poppins ' placeholder='Your Name *' type='text' />
            <button className='text-[16px] font-poppins font-normal border border-[#098A46] cursor-pointer text-white py-2.5 px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46]'>Send Request</button>

        </div>
    )
}
