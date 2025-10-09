import React from 'react'
import SectionLayout from '../components/SectionLayout'
import Image from 'next/image'
import allPage from '@/../public/all-hero.png'
import SingleCourseCard from '../components/SingleCourseCard'
import FaqsSection from '../sections/homepage/FaqsSection'
import RequestFormSection from '../sections/homepage/RequestFormSection'
import Aboutus from '../sections/homepage/Aboutus'
import OurMission from '../sections/homepage/OurMission'
import WhyChoose from '../sections/homepage/WhyChoose'
import FreeCourseCard from '../components/homepage/FreeCourseCard'
import StepsSection from '../sections/homepage/StepsSection'
import Teachers from '../sections/homepage/Teachers'

export default function page() {
  return (
    <div>
      <SectionLayout>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-0">
              {/* LEFT CONTENT */}
              <div
                className="lg:w-1/2 w-full flex flex-col gap-4 text-center lg:text-left"
                data-aos="fade-up-right"
              >
                <h5 className="text-sm sm:text-base md:text-lg font-poppins font-normal text-shadow-black">
                  Lorem Ipsum is simply dummy text of the printing
                </h5>
      
                <h1 className="text-shadow-black font-jakarta text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-bold leading-[140%] relative inline-block">
                Lorem Ipsum is simply dummy text of the
                </h1>
      
                <p className="text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto lg:mx-0">
                  Lorem Ipsum is simply dummy text of the printing Ipsum is
                  simply dummy text of the printing Lorem Ipsum is simply dummy text
                  of the printingadadadadadadada
                </p>
      
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mt-4 justify-center lg:justify-start">
                  <button className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46] rounded-md">
                    Get Enrolled Now
                  </button>
                </div>
              </div>
      
              {/* RIGHT IMAGE */}
              <div
                className="lg:w-1/2 w-full flex items-center justify-center lg:justify-end gap-4"
                data-aos="fade-up-left"
              >
              <Image
              src={allPage}
              alt='sorry'
              />
              </div>
            </div>
      </SectionLayout>
      <SectionLayout>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-3 space-y-3'>
            <SingleCourseCard/>
            <SingleCourseCard/>
            <SingleCourseCard/>
            <SingleCourseCard/>
            <SingleCourseCard/>
        </div>
      </SectionLayout>
       <StepsSection />
                  <div className="bg-[#F6F6F6]">
                      <SectionLayout>
                          <h4 className='text-4xl font-medium font-poppins text-black py-9 text-center mx-auto  max-w-[614px]'>Featured <span className='text-[#098A46]'> Courses</span></h4>
                          <div className='grid grid-cols-3 space-x-2 space-y-2' data-aos="zoom-in-up">
                              <FreeCourseCard />
                              <FreeCourseCard />
                              <FreeCourseCard />
                              <FreeCourseCard />
                              <FreeCourseCard />
                          </div>
                      </SectionLayout>
                  </div>
                  <SectionLayout>
                      <h4 className='text-4xl font-medium font-poppins text-black py-9 text-center mx-auto  max-w-[614px]'>Free Online Quran Classes  <span className='text-[#098A46]'> By OQC Academy</span></h4>
                      <div className='grid grid-cols-3 space-x-2 space-y-2' data-aos="zoom-in-up">
                          <FreeCourseCard />
                          <FreeCourseCard />
                          <FreeCourseCard />
                          <FreeCourseCard />
                          <FreeCourseCard />
                      </div>
                  </SectionLayout>
                  <div className="bg-[#F6F6F6]">
                      <SectionLayout>
                          <h4 className='text-4xl font-medium font-poppins text-black py-9 text-center mx-auto  max-w-[614px]'>What The Adults Will Learn In The <span className='text-[#098A46]'>Online Quran Classes </span></h4>
                          <div className='grid grid-cols-3 space-x-2 space-y-2' data-aos="zoom-in-up">
                              <FreeCourseCard />
                              <FreeCourseCard />
                              <FreeCourseCard />
                              <FreeCourseCard />
                              <FreeCourseCard />
                          </div>
                      </SectionLayout>
                  </div>
                  <WhyChoose />
                  <Teachers />
                  <OurMission />
                  <Aboutus />
                  <RequestFormSection />
                  <FaqsSection />
    </div>
  )
}
