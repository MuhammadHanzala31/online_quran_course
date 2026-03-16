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
import StepsSection from '../sections/homepage/StepsSection'
import Teachers from '../sections/homepage/Teachers'
import BookForm from '../sections/homepage/BookForm'
import FeaturedCourse from '../sections/homepage/FeaturedCourse'
import FreeCourse from '../sections/homepage/FreeCourse'
import GrainSection from '../sections/homepage/GrainSection'
import Link from 'next/link'
import CoursesGrainSection from '../components/CoursesGrainSection'
import CourseWhyChoose from '../sections/CourseWhyChose'

export default function page() {

  const courses = [
    {
      _id: 1,
      name: "The Basics Of Islam Course",
      description: "This course includes prayers, dua, memorization of surahs, and all necessary Islamic principles."
    },
    {
      _id: 2,
      name: "Basic Alphabets Course (Qaida)",
      description: "This basic course focuses on teaching the Arabic alphabet along with essential tajweed rules."
    },
    {
      _id: 3,
      name: "Quran Reading Course",
      description: "This course is designed to improve the skills of reading the holy Quran by combining words."
    },
    {
      _id: 4,
      name: "Tajweed Course",
      description: "This Quran Reading Course is designed for those who know basic Arabic reading and want to learn Quranic Arabic."
    },
    {
      _id: 5,
      name: "Tarteel Course",
      description: "This course is designed to improve fluency in reciting the holy Quran with rhythm."
    },
    {
      _id: 6,
      name: "Quran Memorization Course",
      description: "Quran Memorization Course is designed to make the memorization process efficient and effective."
    },
    {
      _id: 7,
      name: "Quran Translation Course",
      description: "The Quran Translation Course is designed to understand the Holy Quran and benefit from the words of Almighty Allah."
    },
    {
      _id: 8,
      name: "Tafseer ul Quran Course",
      description: "This course involves a detailed explanation and interpretation of its verses, delving into various topics beyond mere translation."
    },
    {
      _id: 9,
      name: "Islamic Fiqh Course",
      description: "This course is designed to understand Islamic jurisprudence, emphasizing the importance of adhering to divine orders."
    }
  ];


  return (
    <div>
      <SectionLayout>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-0">
          {/* LEFT CONTENT */}
          <div
            className="lg:w-1/2 w-full flex flex-col gap text-center lg:text-left"
            data-aos="fade-up-right"
          >
            <h1 className="text-shadow-black font-jakarta text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-bold leading-[140%] relative inline-block">
              Online <span className='text-[#098A46]'>Quran</span> Courses
            </h1>
            <h5 className="text-sm sm:text-base md:text-lg font-poppins font-normal text-shadow-black">
              Start Your Spiritual Journey with OQC Institute’s Online Quran Courses
            </h5>


            <p className="text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] max-w-[90%] md:max-w-[80%] lg:max-w-[95%] mx-auto lg:mx-0">
              Begin your path to Quranic knowledge with OQC Institute’s Online Quran Courses, carefully designed to bring authentic Islamic education to your home. Whether you’re starting from the basics or advancing your Quranic understanding, our comprehensive curriculum covers everything — from learning the Arabic alphabet to mastering Tajweed, Tafseer, and Fiqh.
            </p>

            <p className="text-sm sm:text-base md:text-lg mt-3 font-poppins font-normal text-[#535353] max-w-[90%] md:max-w-[80%] lg:max-w-[95%] mx-auto lg:mx-0">
              With flexible class timings, personalized one-on-one lessons, and expert teachers, learning the Quran online has never been this accessible and engaging. Thousands of students around the world have already deepened their connection with the Quran through our structured, easy-to-follow courses. Start your journey today with complete confidence — backed by our 100% money-back guarantee for your satisfaction.            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mt-4 justify-center lg:justify-start">
              <Link href={'/registration'} className="text-sm sm:text-base md:text-lg font-poppins border border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46]">
                Get Enrolled Now
              </Link>
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
          {courses && courses.map(course => (<SingleCourseCard key={course._id} name={course.name} description={course.description} />))}

        </div>
      </SectionLayout>
      <StepsSection />
      <BookForm />
      {/* <FeaturedCourse /> */}
      <div className="bg-[#F6F6F6]">
        <FreeCourse />
      </div>
      <CoursesGrainSection />
      <CourseWhyChoose />
      <Teachers />
      <OurMission />
      <Aboutus />
      <RequestFormSection />
      <FaqsSection />
    </div>
  )
}
