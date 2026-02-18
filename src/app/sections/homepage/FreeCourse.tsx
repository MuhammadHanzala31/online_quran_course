import React from 'react'
import SectionLayout from '../../components/SectionLayout'
import FreeCourseCard from '@/app/components/homepage/FreeCourseCard'
import feature1 from '@/../public/featured-1.png'
import feature2 from '@/../public/featured-2.png'
import feature3 from '@/../public/featured-3.png'
import feature4 from '@/../public/featured-4.png'
import feature5 from '@/../public/featured-5.png'

export default function FreeCourse() {


 interface IslamicCourse {
  id: number;
  title: string;
  description: string;
  image: any;
}

 const islamicCourses: IslamicCourse[] = [
  {
    id: 1,
    title: "Basic Beliefs and Six Kalimas",
    description:
      "Learn the basic Islamic course including prayers, daily duas, memorization of surahs, and all essential Islamic principles necessary for every Muslim.",
    image: feature1,
  },
  {
    id: 2,
    title: "40 Masnoon Duas and Short Ahadith",
    description:
      "This course teaches the most commonly recited Masnoon Duas and short Ahadith, helping students apply Sunnah practices in their daily lives.",
    image: feature2,
  },
  {
    id: 3,
    title: "Short Surah & Salah",
    description:
      "Designed to teach students how to perform Salah correctly along with the memorization and recitation of short Surahs for daily prayers.",
    image: feature3,
  },
  {
    id: 4,
    title: "All Basic Islamic Fundamentals",
    description:
      "This course covers all fundamental Islamic beliefs and practices, providing students with a strong foundation in faith and daily worship.",
    image: feature4,
  },
  {
    id: 5,
    title: "Etiquette Wudhu and Ghusl",
    description:
      "Learn the Islamic purification methods of Wudhu and Ghusl with proper etiquette and step-by-step guidance according to authentic teachings.",
    image: feature5,
  },
];



  return (
    <SectionLayout>
      <div className='mb-[50px] flex flex-col gap-4 mx-auto text-center justify-center' >
        <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[614px]'>Bonus Free Courses with Your Featured Course Enrollment</p>
        <h5 className='text-4xl font-poppins font-medium max-w-[614px] mx-auto'>Free Online Quran Classes <span className='text-[#098A46]'>By OQC Academy</span></h5>
      </div>
      <div className='grid grid-cols-3 space-x-2 space-y-2' data-aos="zoom-in-up">
        {
          islamicCourses.map( course => (<FreeCourseCard key={course.id} title={course.title} description={course.description} image={course.image} />))
        }
      </div>
    </SectionLayout>
  )
}
