import WhYChooseCard from '@/app/components/homepage/WhYChooseCard'
import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'
import choice1 from '@/../public/choice-1.png'
import choice2 from '@/../public/choice-2.png'
import choice3 from '@/../public/choice-3.png'
import choice4 from '@/../public/choice-4.png'
import choice5 from '@/../public/choice-5.png'
import choice6 from '@/../public/choice-6.png'

export default function WhyChoose() {
    interface QuranFeature {
        id: number;
        title: string;
        description: string;
        image: any;
    }

    const quranFeatures: QuranFeature[] = [
        {
            id: 1,
            title: "Expert Tutors",
            description:
                "Learn from highly qualified and experienced Quran teachers who specialize in Tajweed, Tafseer, and Islamic studies.",
            image: choice1,
        },
        {
            id: 2,
            title: "Flexible Timings",
            description:
                "Enjoy convenient scheduling options tailored to your lifestyle, making Quran learning accessible anytime, anywhere.",
            image: choice2,
        },
        {
            id: 3,
            title: "Interactive Lessons",
            description:
                "Engage with live sessions that encourage active participation, questions, and in-depth understanding of each concept.",
            image: choice3,
        },
        {
            id: 4,
            title: "Affordable Plans",
            description:
                "Benefit from competitive pricing without compromising on quality, making Quran education affordable for everyone.",
            image: choice4,
        },
        {
            id: 5,
            title: "Personal Attention",
            description:
                "Receive one-on-one guidance to ensure personalized learning and steady progress in your Quranic journey.",
            image: choice5,
        },
        {
            id: 6,
            title: "Comprehensive Curriculum",
            description:
                "Study a well-structured syllabus covering recitation, memorization, translation, and deeper understanding of the Quran.",
            image: choice6,
        },
    ];




    return (
        <SectionLayout>
            <div className='mb-[50px] flex flex-col gap-6 mx-auto text-center justify-center' >
                <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[614px]'>Why Choose OQC Academy?</p>
                <h5 className='text-4xl font-poppins font-medium max-w-[614px] mx-auto'>Your Best Choice for  <span className='text-[#098A46]'> Online Quran Classes in USA</span></h5>
                <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[992px]'>Choose OQC Academy for expert-led, flexible online Quran learning for your convenience. Our interactive platform ensures engaging lessons by certified instructors and a diverse curriculum that meets flexible scheduling. Discover how convenient and effective Quran learning can be!</p>
            </div>
            <div className='grid grid-cols-3 space-x-2.5 space-y-16 lg:mt-[123px]'>
                {quranFeatures.map(choice => (<WhYChooseCard description={choice.description} title={choice.title} image={choice.image} key={choice.id} />))}
            </div>
        </SectionLayout>
    )
}
