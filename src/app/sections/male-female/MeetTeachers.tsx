import MeetTeacherCard from '@/app/components/male-female/MeetTeacherCard'
import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'
import single1 from '@/../public/single-t-2.png'
import single2 from '@/../public/single-t-3.png'

export default function MeetTeachers() {


    const cards = [
        {
            _id : 1,
            text : 'At OQC Institute, our expert female tutors combine deep Islamic knowledge with compassionate teaching. They are more than just instructors — they are role models who inspire students to develop a lasting relationship with the Holy Quran.',
            image : single1
        },
        {
            _id : 1,
            text : 'Each teacher has years of experience in online Quran instruction and is fluent in multiple languages to help students learn with ease and confidence. From beginners taking their first steps in Quran recitation to advanced learners studying Tafseer or memorization, our female teachers adapt their approach to suit every student’s needs',
            image : single2
        },
    ]
    return <SectionLayout>
        <div className='flex justify-start text-start mb-5'>
            <h3 className='text-black font-poppins text-[36px] font-medium'>Meet Our Teachers</h3>
        </div>
        <div className='flex flex-col gap-3'>
            {
                cards.map( card => (
                    <MeetTeacherCard key={card._id} image={card.image} text={card.text}/>
                ))
            }
            
        </div>
    </SectionLayout>
}
