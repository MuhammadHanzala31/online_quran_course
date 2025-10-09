import React from 'react'
import BlogCard from '../components/blogs/BlogCard'
import RecentBlogsCard from '../components/blogs/RecentBlogsCard'
import BlogBanner from '../components/blogs/BlogBanner'

export default function page() {
  return (
    <div>
      <BlogBanner/>
      <div className="flex lg:flex-row flex-col lg:max-w-[1392px] gap-5 w-full lg:px-0 px-9 mx-auto">

        <div className="flex gap-6 flex-col w-full lg:w-[65%] w-full my-5">
          <span className='font-poppins text-2xl text-black font-semibold border-b border-[#B4B4B4] pb-3'>Blogs world</span>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className='flex gap-6 flex-col w-full lg:w-[35%] w-full my-5'>
          <span className='font-poppins text-2xl text-black font-semibold border-b border-[#B4B4B4] pb-3'>Recent post</span>
          <RecentBlogsCard />
          <RecentBlogsCard />
          <RecentBlogsCard />
          <RecentBlogsCard />
          <BlogCard flexDirection='flex-col' />
          <span className='font-poppins text-2xl text-black font-semibold border-b border-[#B4B4B4] pb-3'>Tags</span>
          <div className='grid grid-cols-3 space-x-2 space-y-2'>
            <div className='py-2 border border-[#B4B4B4] text-[#272727] font-poppins font-normal text-[16px] flex justify-center'>lorem ipsum</div>
            <div className='py-2 border border-[#B4B4B4] text-[#272727] font-poppins font-normal text-[16px] flex justify-center'>lorem ipsum</div>
            <div className='py-2 border border-[#B4B4B4] text-[#272727] font-poppins font-normal text-[16px] flex justify-center'>lorem ipsum</div>
            <div className='py-2 border border-[#B4B4B4] text-[#272727] font-poppins font-normal text-[16px] flex justify-center'>lorem ipsum</div>
            <div className='py-2 border border-[#B4B4B4] text-[#272727] font-poppins font-normal text-[16px] flex justify-center'>lorem ipsum</div>
            <div className='py-2 border border-[#B4B4B4] text-[#272727] font-poppins font-normal text-[16px] flex justify-center'>lorem ipsum</div>
          </div>
          <span className='font-poppins text-2xl text-black font-semibold border-b border-[#B4B4B4] pb-3'>Newsletter</span>
          <div className='bg-white shadow-2xl shadow-gray-600 flex flex-col gap-3 p-5'>
            <h5 className='text-[#000000] text-[16px] font-poppins font-medium'>The most important Islamic news and events of the day.</h5>
            <span className='text-[#535353] text-[16px] font-poppins'>Prophethood refers to the belief in a religious</span>
            <div className='border border-[#979797] p-2 flex items-center'>
              <input type="text" placeholder='Your email address' className='text-[#535353] placeholder:text-[#535353] font-poppins text-[16px] placeholder:text-[16px] outline-none w-[80%]' />
              <button className='pl-2 border-l border-[#098A46] text-[16px] font-medium font-poppins text-[#098A46] cursor-pointer'>Sign Up</button>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}
