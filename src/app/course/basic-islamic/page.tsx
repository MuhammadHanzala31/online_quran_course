import SectionLayout from '@/app/components/SectionLayout'
import form from '@/../public/single-c-1.png'
import sec2 from '@/../public/single-c-2.png'
import Image from 'next/image'
import FaqsSection from '@/app/sections/homepage/FaqsSection'
import { Metadata } from 'next'
import StepsSection from '@/app/sections/homepage/StepsSection'
import SliderTestimonial from '@/app/sections/homepage/SliderTestimonial'
import blank from '@/../public/Rectangle 295.png'
import Faq from '@/app/components/single-course/Faq'
import why from '@/../public/why.jpg'
import more from '@/../public/more.jpg'
import sc2 from '@/../public/sc-2.png'
import sc3 from '@/../public/sc-3.png'
import sc4 from '@/../public/sc-4.png'

export const metadata: Metadata = {
    title: "Course Details",
};

export default async function Page({ params }:
    {
        params: Promise<{ slug: string }>
    }) {
    const { slug } = await params;

    // Updated features for Islamic Studies Course (used in Why Take This Course section)
    const features = [
        {
            title: "Master Daily Worship",
            content:
                "Achieve full mastery in performing the basic acts of worship, including proper Salah (Prayer), Wudu, Ghusl, and understanding their conditions and importance.",
        },
        {
            title: "Essential Foundations (Aqeedah)",
            content:
                "Establish a solid understanding of Islamic beliefs (Aqeedah), the Six Kalimas, and the necessary etiquette for strengthening daily faith and practice.",
        },
        {
            title: "Practical Dua & Surah",
            content:
                "Memorize the 40 Masnoon Duas and essential short Surahs, enabling immediate practical application in prayer and seeking daily protection.",
        },
        {
            title: "Certified Expert Instruction",
            content:
                "The course is taught one-on-one by our certified scholars who specialize in making complex foundational topics easy to understand and readily memorize for lasting retention.",
        },
    ];

    return (
        <main>
            <section className='single-banner py-0'>
                <div className='max-w-7xl w-full mx-auto lg:px-4 px-8 lg:py-5 py-4  '>
                    <div className='flex lg:flex-row flex-col items-center gap-5 justify-between'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>A Strong Foundation in Faith and Practice</h1>
                            <h1 className='text-white font-bold font-jakarta text-[54px] '>Islamic Studies Course</h1>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Our Promise To Uphold The Trust Placed</h1>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Welcome to OQC Academy, where our Basic Islamic Course provides essential knowledge for every Muslim learner, regardless of age. This comprehensive course covers foundational Islamic beliefs (Aqeedah), the Six Kalimas, proper Wudu and Salah (Prayer), important daily Duas, and memorization of short Surahs. Our certified tutors ensure a clear, supportive environment for mastering these core practices.</p>
                            <p className='text-white font-normal text-[18px] font-jakarta'>We are committed to nurturing strong, knowledgeable individuals who can perform their daily religious duties with confidence.</p>
                        </div>
                        <div className='w-1/2 justify-center flex'>
                            <div className='bg-white p-2 w-[80%] rounded-md'>
                                <div className='flex flex-col gap-2 py-4 px-2 w-full'>
                                    <h4 className='text-[#098A46] font-sans text-2xl font-semibold text-center mb-4'>Course Registration Form</h4>
                                    <input className='p-3 bg-[#F7F7F7]/41 border-1  border-[#098A46] rounded-md placeholder:text-[#7AC043] text-white text-[16px] font-normal font-poppins ' placeholder='Your Name' type='text' />
                                    <input className='p-3 bg-[#F7F7F7]/41 border-1  border-[#098A46] rounded-md placeholder:text-[#7AC043] text-white text-[16px] font-normal font-poppins ' placeholder='Your Email' type='text' />
                                    <input className='p-3 bg-[#F7F7F7]/41 border-1  border-[#098A46] rounded-md placeholder:text-[#7AC043] text-white text-[16px] font-normal font-poppins ' placeholder='Your Phone' type='text' />
                                    <input className='p-3 bg-[#F7F7F7]/41 border-1  border-[#098A46] rounded-md placeholder:text-[#7AC043] text-white text-[16px] font-normal font-poppins ' placeholder='Your Message' type='text' />
                                    <button className='text-[16px] font-poppins font-normal border text-[white] bg-[#098A46] cursor-pointer py-2 px-4 rounded-4xl  transition-all'>Send Request</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionLayout>
                <div className='flex flex-row justify-between items-center'>
                    <div className='w-1/2'>
                        <Image src={sec2} alt='sec2' />
                    </div>
                    <div className='flex flex-col gap-6 w-[45%] justify-end'>
                        <h2 className='text-black font-medium font-poppins text-[36px] '>Best Quran Academy For Islamic Studies Course</h2>
                        <p className='text-black font-normal text-[16px] font-poppins'>OQC Academy is your premier destination for in-depth Islamic Studies, providing a structured curriculum that goes beyond simple recitation. Our courses comprehensively cover essential subjects like Aqeedah (Islamic Creed), Fiqh (Jurisprudence), and Seerah (Prophetic Biography). We ensure students not only gain factual knowledge but also understand the practical application of Islamic principles in their daily lives.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>We believe that true faith is built on deep understanding. Our program is designed to create well-rounded, knowledgeable Muslims capable of defending their faith and confidently explaining fundamental concepts to others. We provide the historical and textual context necessary for spiritual growth.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Our certified male and female scholars specialize in adult and child instruction, utilizing modern, engaging teaching methods to make complex topics accessible and relevant. Join OQC Academy to start your educational journey and achieve mastery in your Islamic studies with personalized, one-on-one guidance.</p>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex justify-start flex-col text-start my-3'>
                    <h3 className='text-black font-poppins text-[36px] font-medium'>A Comprehensive Journey to Mastery of Foundational and Advanced Islamic Knowledge.</h3>
                    <p className='text-black font-normal text-[16px] font-poppins'>This intensive course is designed to provide students with a holistic and deep understanding of the Islamic sciences. Our syllabus moves systematically from fundamental creed to advanced jurisprudence and prophetic biography, ensuring a solid, well-rounded education taught by certified scholars.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    {/* Section 1 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc2} alt='sec2' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Fundamentals of Islamic Creed (Aqeedah & Ibadat)</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Pillars of Faith: </span> Study the six articles of faith, including Oneness of God (Tawheed) and Prophethood (Nubwwah).</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Worship Basics: </span> Detailed instruction on the Pillars of Islam, excluding Hajj and Zakat.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Purification (Taharah): </span> Step-by-step mastery of the method of Ablution (Wudu) and ceremonial Bath (Ghusl).</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Daily Practice: </span> Memorization of the Six Kalimas, essential Masnoon Duas, and short Surahs.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Salah Mastery: </span> Learning the correct way to perform Prayer (Salah), its conditions, and what invalidates it.</p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc3} alt='sec2' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Fiqh (Islamic Jurisprudence)</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Fiqh Fundamentals: </span> Introduction to Islamic jurisprudence (Fiqh) and its methodology.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Ibadat (Worship Rulings): </span> Detailed rulings concerning Fasting (Sawm) during Ramadan, Zakat (obligatory charity), and Hajj (Pilgrimage).</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Family Law: </span> Studying Sharia laws related to marriage (Nikah) and divorce (Talaq).</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Transactions & Ethics: </span> Understanding the Islamic values related to business, financial dealings, transactions, and the prohibition of Riba (usury/interest).</p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc4} alt='sec2' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Seerah & Islamic History</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Prophetic Biography (Seerah): </span> A chronological study of the life of the Prophet Muhammad ﷺ, from his birth in Mecca to the final sermon.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Historical Context: </span> Understanding the events of the Makkan and Madinan periods, including the Battles and key Treaties.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Hadith Studies: </span> Introduction to the sayings and traditions of the Prophet (PBUH) and their application in daily life.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Prophetic Character: </span> Analyzing the exemplary manners and leadership (Adab) of the Prophet and his Companions.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <StepsSection />

            <SectionLayout>
                <div className='lg:w-1/2 w-full flex flex-col gap-4 mb-6'>
                    <h1 className='text-black font-medium font-poppins text-[36px] '>More About Fundamentals of Islam Online Course</h1>
                    <p className='text-black font-normal text-[16px] font-poppins'>This course is meticulously designed to provide every Muslim learner, young or old, with the comprehensive, practical knowledge required for daily life.</p>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-1/2'>
                        <Image src={more} alt='sorry' />
                    </div>
                    <div className='w-1/2 grid grid-cols-2 space-x-3.5 space-y-3.5'>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Complete Foundation in Ibadat</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Students achieve full mastery in performing the basic acts of worship, including proper Salah (Prayer), Wudu, Ghusl, and understanding their conditions and importance.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Practical Application</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>We move beyond theory, focusing on how to integrate core Islamic practices and ethics into modern life and decision-making for stronger character.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Certified Expert Instruction</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>The course is taught one-on-one by our certified scholars who specialize in making complex foundational topics easy to understand and memorize.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Flexible & Self-Paced Learning</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>The entire curriculum is delivered in a flexible online format, allowing students to progress through the essential concepts at their own comfortable speed.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-[45%] flex flex-col gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Why Take This Course</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'>This course is meticulously designed to provide every Muslim learner, regardless of age, with the comprehensive, practical knowledge required for daily life.</p>
                        </div>
                        <Faq faqs={features} />
                    </div>
                    <div className='w-1/2'>
                        <Image src={why} alt='sorry' />
                    </div>
                </div>
            </SectionLayout>

            <SliderTestimonial />
            <FaqsSection />
        </main>
    )
}