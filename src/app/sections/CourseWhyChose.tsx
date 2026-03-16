import WhYChooseCard from '@/app/components/homepage/WhYChooseCard'
import SectionLayout from '@/app/components/SectionLayout'
import React from 'react'
import choice1 from '@/../public/choice-1.png'
import choice2 from '@/../public/choice-2.png'
import choice3 from '@/../public/choice-3.png'
import choice4 from '@/../public/choice-4.png'
import choice5 from '@/../public/choice-5.png'
import choice6 from '@/../public/choice-6.png'

export default function CourseWhyChoose() {

    interface QuranFeature {
        id: number;
        title: string;
        description: string;
        image: any;
    }

    const quranFeatures: QuranFeature[] = [
        {
            id: 1,
            title: "Islamic Qualifications",
            description:
                "Every tutor is a Hafiz or Aalim with mastery of the Quran and Tajweed, ensuring authentic and accurate Quranic teaching.",
            image: choice1,
        },
        {
            id: 2,
            title: "Creditable Education",
            description:
                "Our teachers are graduates from leading Islamic universities and recognized institutes with strong academic backgrounds.",
            image: choice2,
        },
        {
            id: 3,
            title: "Teaching Experience",
            description:
                "Each instructor holds Ijaza and has years of experience teaching Quran, Tajweed, and Islamic studies to students worldwide.",
            image: choice3,
        },
        {
            id: 4,
            title: "Training Completed",
            description:
                "All tutors complete OQC Institute’s structured online teaching certification to ensure effective and engaging virtual classes.",
            image: choice4,
        },
        {
            id: 5,
            title: "Quality Control Department",
            description:
                "Every instructor is carefully evaluated and approved through our internal quality assurance process.",
            image: choice5,
        },
        {
            id: 6,
            title: "Professional Conduct",
            description:
                "Our teachers are patient, respectful, and fluent in multiple languages to effectively communicate with students worldwide.",
            image: choice6,
        },
    ];

    return (
        <SectionLayout>
            <div className='mb-[50px] flex flex-col gap-6 mx-auto text-center justify-center'>

                <h5 className='text-4xl font-poppins font-medium max-w-[700px] mx-auto'>
                    Certified Tutors to
                    <span className='text-[#098A46]'> Learn Quran Courses</span>
                </h5>

                <p className='text-[#535353] text-[16px] font-poppins mx-auto font-medium max-w-[992px]'>
                    At OQC Institute, you’ll be guided by a team of certified, experienced, and professional Quran tutors — both male and female — who are committed to making your Quran learning journey fruitful. Each teacher brings deep Islamic knowledge, teaching experience, and a passion for spreading Quranic education.
                </p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-10 lg:mt-[80px]'>
                {
                    quranFeatures.map(choice => (
                        <WhYChooseCard
                            key={choice.id}
                            title={choice.title}
                            description={choice.description}
                            image={choice.image}
                        />
                    ))
                }
            </div>

        </SectionLayout>
    )
}