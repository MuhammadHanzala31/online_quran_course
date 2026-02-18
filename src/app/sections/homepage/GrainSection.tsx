import GrainCard from '@/app/components/homepage/GrainCard'
import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'
import Grain1 from '@/../public/grain-1.png'
import Grain2 from '@/../public/grain-2.png'
import Grain3 from '@/../public/grain-3.png'
import Grain4 from '@/../public/grain-4.png'
import Grain5 from '@/../public/grain-5.png'
import Grain6 from '@/../public/grain-6.png'
import Grain7 from '@/../public/grain-7.png'
import Grain8 from '@/../public/grain-8.png'
import Grain9 from '@/../public/grain-9.png'


export default function GrainSection() {

    interface QuranLearningBenefit {
        id: number;
        title: string;
        description: string;
        image?: any;
    }

    const quranLearningBenefits: QuranLearningBenefit[] = [
        {
            id: 1,
            title: "Spiritual Growth",
            description:
                "Strengthen your connection with Allah by understanding His words deeply, developing piety, and gaining inner peace through regular Quran study from home.",
            image: Grain1,
        },
        {
            id: 2,
            title: "Tajweed Mastery",
            description:
                "Learn proper Quranic pronunciation with expert guidance, ensuring accurate recitation while preserving the beauty and authenticity of the Holy Quran.",
            image: Grain2,
        },
        {
            id: 3,
            title: "Flexible Learning",
            description:
                "Enjoy personalized class schedules that fit your lifestyle, allowing you to balance Quran learning with work, school, and family responsibilities.",
            image: Grain3,
        },
        {
            id: 4,
            title: "Qualified Teachers",
            description:
                "Benefit from experienced, certified Quran tutors who provide structured, engaging, and effective lessons tailored to your learning pace and needs.",
            image: Grain4,
        },
        {
            id: 5,
            title: "Safe Environment",
            description:
                "Study from home in a comfortable and secure setting, especially beneficial for children and families seeking trustworthy Quran education.",
            image: Grain5,
        },
        {
            id: 6,
            title: "Cultural Relevance",
            description:
                "Learn with instructors who understand Islamic values in the American context, ensuring lessons resonate with your environment and daily challenges.",
            image: Grain6,
        },
        {
            id: 7,
            title: "Affordable Access",
            description:
                "Gain high-quality Quran education at reasonable fees, making spiritual learning accessible to individuals and families across the USA.",
            image: Grain7,
        },
        {
            id: 8,
            title: "Consistent Progress",
            description:
                "Track your learning journey with structured plans, regular assessments, and continuous feedback to achieve steady improvement in recitation and comprehension.",
            image: Grain8,
        },
        {
            id: 9,
            title: "Community Connection",
            description:
                "Join a network of fellow learners, participate in group sessions, and share experiences, fostering a sense of unity and encouragement in your Quran learning journey.",
            image: Grain9,
        },
    ];

    return (
        <SectionLayout>
            <div className='mb-[50px] flex flex-col gap-6 mx-auto text-center justify-center' >
                <h5 className='text-4xl font-poppins font-medium max-w-[614px] mx-auto'> Gains From Learning  <span className='text-[#098A46]'>Quran Online in USA</span></h5>
                <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[614px]'>Learning the Quran online in the USA offers flexibility, personalized attention, and access to qualified tutors. Students can progress at their own pace, strengthen their recitation, deepen understanding, and apply Islamic teachings in everyday life.</p>
            </div>
            <div className='grid grid-cols-3 mt-4 space-x-[47px] space-y-2'>
                {
                    quranLearningBenefits.map( grain => 
                        (<GrainCard 
                            key={grain.id}
                             text={grain.title}
                              description={grain.description} 
                              image={grain.image}/> 
                            ))
                }
            </div>
        </SectionLayout>
    )
}
