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


export default function CoursesGrainSection() {

    interface QuranLearningBenefit {
        id: number;
        title: string;
        description: string;
        image?: any;
    }

    
    const quranLearningBenefits: QuranLearningBenefit[] = [
        {
            id: 1,
            title: "1-on-1 Classes",
            description:
                "Personalized Quran sessions with dedicated teachers for every student.",
            image: Grain1,
        },
        {
            id: 2,
            title: "Female Quran Teachers",
            description:
                "Qualified female tutors available for our sisters and daughters.",
            image: Grain2,
        },
        {
            id: 3,
            title: "Adjustable Timings",
            description:
                "Set your class schedule according to your convenience.",
            image: Grain3,
        },
        {
            id: 4,
            title: "No Language Barrier",
            description:
                "We teach in Arabic, English, Urdu, and other commonly spoken languages.",
            image: Grain4,
        },
        {
            id: 5,
            title: "Anywhere, Any Device",
            description:
                "Join classes on your phone, tablet, or computer — anytime, anywhere.",
            image: Grain5,
        },
        {
            id: 6,
            title: "Course Certificate",
            description:
                "Receive an official certificate from OQC Institute upon course completion.",
            image: Grain6,
        },
        {
            id: 7,
            title: "Free Trial Classes",
            description:
                "Experience our teaching style before enrollment with a free demo.",
            image: Grain7,
        },
        {
            id: 8,
            title: "24/7 Helpdesk",
            description:
                "Dedicated support team available anytime for students and parents.",
            image: Grain8,
        },
    ];

    return (
        <SectionLayout>
            <div className='mb-[50px] flex flex-col gap-6 mx-auto text-center justify-center' >
                <h5 className='text-4xl font-poppins font-medium max-w-[614px] mx-auto'> Gains From Learning  <span className='text-[#098A46]'>Quran Online in USA</span></h5>
                <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[614px]'>Learning the Quran online in the USA offers flexibility, personalized attention, and access to qualified tutors. Students can progress at their own pace, strengthen their recitation, deepen understanding, and apply Islamic teachings in everyday life.</p>
            </div>
            <div className='grid grid-cols-3 mt-4 justify-center space-x-[47px] space-y-2'>
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
