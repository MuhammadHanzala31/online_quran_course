import React from 'react'
import contactUs from '@/../public/contact-hero.png'
import SectionLayout from '../components/SectionLayout'
import TestimonialCard from '../components/TestimonialCard'

export default function page() {
    const testimonials = [
    {
      name: "Ayesha Khan",
      country: "United States",
      review:
        "I am truly grateful for this Online Quran Course. The one-to-one live classes make a huge difference because the teacher gives full attention to my child. I’ve seen clear improvement in tajweed and confidence within just a few weeks. Highly recommended for parents who want quality Quran education at home.",
    },
    {
      name: "Muhammad Bilal",
      country: "United States",
      review:
        "This academy provides excellent live Quran classes. The teacher is patient, knowledgeable, and explains everything clearly. I appreciate the flexible timings, especially since I have a busy work schedule. The personal interaction really helps in correcting mistakes immediately.",
    },
    {
      name: "Fatima Zahra",
      country: "United Kingdom",
      review:
        "My experience with this Online Quran Academy has been wonderful. The one-on-one sessions make learning easy and comfortable. The teacher encourages questions and ensures proper pronunciation. I feel more connected to the Quran now than ever before.",
    },
    {
      name: "Ahmed Raza",
      country: "United Kingdom",
      review:
        "I enrolled my two children in this Online Quran Course, and I am very satisfied. The teachers are professional and well-trained. The live interaction keeps my kids engaged throughout the class. Their recitation has improved significantly.",
    },
    {
      name: "Hafsa Noor",
      country: "United States",
      review:
        "Alhamdulillah, this is one of the best online Quran learning platforms I have come across. The individual attention during the live classes helps me understand tajweed rules properly. The teacher is supportive and very respectful.",
    },
    {
      name: "Umar Farooq",
      country: "United Kingdom",
      review:
        "The one-to-one teaching method is the best part of this academy. The teacher focuses completely on the student and corrects every small mistake. The classes are organized, punctual, and spiritually uplifting. I highly recommend this Online Quran Course to anyone who wants to learn seriously.",
    },
  ];
  return (
    <>
      <div className='h-[409px] contact-hero flex justify-between items-center'>
        <div className='flex text-center flex-col max-w-[688px] mx-auto w-full gap-6'>
          <h1 className='text-white  w-full text-center font-poppins text-5xl font-medium'>Contact us</h1>
          <p className='text-center font-poppins text-white text-[16px]'>Have questions about our online Quran classes? The team at Online Quran Course is here to help. Reach out to us anytime to learn more about our courses, schedules, and enrollment. We’re happy to guide you</p>
        </div>
      </div>
      <SectionLayout>
        <div className='flex flex-col gap-6 max-w-[992px] w-full mx-auto'>
          <h4 className='text-[#098A46] font-poppins text-[32px] font-medium text-center'>Personalized Learning Approach For Individuals</h4>
          <p className='font-poppins text-[#535353] text-[16px] font-normal text-center'>At Online Quran Course, we offer personalized one-on-one classes tailored to each student’s pace and level. Whether learning Quran reading, Tajweed, or Tafseer, our expert teachers design lessons to ensure effective understanding, spiritual growth, and a meaningful connection with the Holy Quran.</p>
        </div>
        <div className='flex flex-row items-center gap-8 max-w-[992px] w-full mx-auto lg:mt-[81px] mt-8'>
          <div className='flex flex-col gap-3 lg:w-1/2 w-full'>
            <div className='flex items-center gap-2'>
              <div className='relative py-3 px-9 border border-[#0000006e] w-full'>
                <i className="ri-user-line text-[#7AC043] text-lg absolute left-2 top-3"></i>
                <input className='text-[#535353] placeholder:text-[#535353] placeholder:text-[12px] outline-none text-[12px] font-poppins placeholder:font-poppins' placeholder='Please enter your name' />
              </div>
              <div className='relative py-3 px-9 border border-[#0000006e] w-full'>
                <i className="ri-mail-line text-[#7AC043] text-lg absolute left-2 top-3"></i>
                <input className='text-[#535353] placeholder:text-[#535353] placeholder:text-[12px] outline-none text-[12px] font-poppins placeholder:font-poppins' placeholder='Please enter your Email' />
              </div>
            </div>
            <div className='w-full'>
              <div className='relative py-3 px-9 border border-[#0000006e] '>
                <i className="ri-user-line text-[#7AC043] text-lg absolute left-2 top-3"></i>
                <input className='text-[#535353] placeholder:text-[#535353] placeholder:text-[12px] outline-none text-[12px] font-poppins placeholder:font-poppins' placeholder='+92 xxxxxxxxx' />
              </div>
            </div>
            <div className='w-full'>
              <textarea className='py-3 px-3 border border-[#0000006e] resize-none h-[140px] w-full text-[#535353] placeholder:text-[#535353] placeholder:text-[12px] outline-none text-[12px] font-poppins placeholder:font-poppins' placeholder='Enter your Message'>

              </textarea>
            </div>
            <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] w-fit">
              Sign up today
            </button>
          </div>
          <div className='flex flex-col gap-2 lg:w-1/2 w-full'>
            <h2 className='text-black font-poppins text-3xl font-medium'>Get In Touch with Our Support Team</h2>
            <p className='font-poppins text-[#535353] text-[16px] font-normal'>Connect with the Support Team at Online Quran Course to learn more about our online Quran classes. Our staff is here to assist you with course details, schedules, and enrollment, ensuring a smooth and personalized learning experience for every student.</p>
            <p className='font-poppins text-[#535353] text-[16px] font-normal'>Reach out with any questions or to discuss course options:</p>
            <ul className='mt-2 flex flex-col gap-3'>
              <li className='flex gap-2 items-center'>
                <i className="ri-mail-line text-lg text-[#098A46] "></i>
                <p className='font-poppins text-[#535353] text-[16px] font-normal'>info@onlinequrancourse.com</p>
              </li>
              <li className='flex gap-2 items-center'>
                <i className="ri-phone-line text-lg text-[#098A46] "></i>
                <p className='font-poppins text-[#535353] text-[16px] font-normal'><span className='font-bold'>Uk : </span> +44 2071 931528</p>
              </li>
              <li className='flex gap-2 items-center'>
                <i className="ri-phone-line text-lg text-[#098A46] "></i>
                <p className='font-poppins text-[#535353] text-[16px] font-normal'><span className='font-bold'>USA : </span> +17738002886</p>
              </li>
            </ul>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <h4 className='text-[#098A46] font-poppins text-[32px] font-medium text-center my-14'>Our Testimonial</h4>
        <div className='grid grid-cols-1 lg:grid-cols-3 space-x-7 space-y-7'>
          {
            testimonials?.map(testi => (<TestimonialCard key={testi.name} content={testi.review} city={testi.country} name={testi.name}/>))
          }
        </div>
      </SectionLayout>
    </>
  )
}
