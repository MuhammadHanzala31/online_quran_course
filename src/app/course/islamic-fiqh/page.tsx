import SectionLayout from '@/app/components/SectionLayout'
import sec2 from '@/../public/single-c-2.png'
import Image from 'next/image'
import FaqsSection from '@/app/sections/homepage/FaqsSection'
import { Metadata } from 'next'
import StepsSection from '@/app/sections/homepage/StepsSection'
import blank from '@/../public/Rectangle 295.png'
import Faq from '@/app/components/single-course/Faq'
import SliderTestimonial from '@/app/sections/homepage/SliderTestimonial'
import why from '@/../public/why.jpg'
import more from '@/../public/more.jpg'
import sc2 from '@/../public/sc-2.png'
import sc3 from '@/../public/sc-3.png'
import sc4 from '@/../public/sc-4.png'


export const metadata: Metadata = {
    title: "Islamic Fiqh Course Details",
};

export default async function Page({ params }:
    {
        params: Promise<{ slug: string }>
    }) {
    const { slug } = await params;

    // Features for "Why Take This Course" section
    const features = [
        {
            title: "Master Worship Laws",
            content:
                "Achieve full proficiency in Salah, Wudu, Ghusl, fasting, Zakat, and Hajj.",
        },
        {
            title: "Family & Social Understanding",
            content:
                "Gain clarity on marriage, divorce, inheritance, and interpersonal ethics.",
        },
        {
            title: "Financial & Business Knowledge",
            content:
                "Understand Islamic finance, transactions, and the prohibition of Riba.",
        },
        {
            title: "Personalized Guidance",
            content:
                "One-on-one instruction ensures accurate understanding and confident application.",
        },
    ];

    return (
        <main>
            <section className='single-banner py-0'>
                <div className='max-w-7xl w-full mx-auto lg:px-4 px-8 lg:py-5 py-4  '>
                    <div className='flex lg:flex-row flex-col items-center gap-5 justify-between'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Master Islamic Jurisprudence and Practical Guidance</h1>
                            <h1 className='text-white font-bold font-jakarta text-[54px] '>Islamic Fiqh Course</h1>
                            <h1 className='text-[#FFB706] font-bold font-jakarta text-[20px] '>Our Promise To Uphold The Trust Placed</h1>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Welcome to OQC Institute, where our Islamic Fiqh Course provides an in-depth understanding of Islamic law and practical rulings for daily life. This course is suitable for learners of all ages who wish to study the principles of Fiqh and apply them confidently in their personal, family, and social affairs.</p>
                            <p className='text-white font-normal text-[18px] font-jakarta'>Our certified tutors create a structured and supportive environment, helping students comprehend key aspects of worship, transactions, and ethical responsibilities according to Islamic jurisprudence.</p>
                            <p className='text-white font-normal text-[18px] font-jakarta'>We are committed to developing knowledgeable Muslims who can practice their faith with confidence and guide others with clarity and precision.</p>
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
                        <h2 className='text-black font-medium font-poppins text-[36px] '>Best Online Quran Academy For Fiqh Studies</h2>
                        <p className='text-black font-normal text-[16px] font-poppins'>OQC Institute is your trusted platform for learning Islamic Fiqh, offering a detailed curriculum that covers both classical rulings and their contemporary applications. Our courses go beyond memorization, focusing on understanding the reasoning behind each ruling and how to implement it in everyday life.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Students gain a comprehensive grasp of worship laws (Ibadat), social and family regulations, financial dealings, and ethical conduct. Our program equips learners to understand, analyze, and apply Sharia in modern contexts.</p>
                        <p className='text-black font-normal text-[16px] font-poppins'>Certified male and female scholars teach both adults and children using interactive online methods that make Fiqh engaging, practical, and applicable.</p>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex justify-start flex-col text-start my-3'>
                    <h3 className='text-black font-poppins text-[36px] font-medium'>A Comprehensive Journey to Mastery of Islamic Law</h3>
                    <p className='text-black font-normal text-[16px] font-poppins'>This course is designed to provide students with structured knowledge of Islamic jurisprudence, progressing from foundational principles to advanced applications.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    {/* Section 1 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc2} alt='Fundamentals' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Fundamentals of Islamic Fiqh</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Principles of Fiqh: </span> Introduction to jurisprudence, sources of law (Quran, Sunnah, Ijma, Qiyas), and methodology.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Worship Rulings (Ibadat): </span> Detailed guidance on Salah, Wudu, Ghusl, fasting (Sawm), Zakat, and Hajj.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Purification & Daily Practice: </span> Learn the proper steps and conditions for ritual purification and daily worship.</p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc3} alt='Family & Transactions' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Family, Social & Financial Fiqh</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Marriage & Divorce: </span> Comprehensive study of Nikah, Talaq, and related family laws.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Inheritance Laws: </span> Understand shares, rights, and proper procedures according to Sharia.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Business & Transactions: </span> Guidelines on trade, contracts, loans, and prohibition of Riba (interest/usury).</p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-1/2 flex gap-3 relative border-l-1 border-green-600 pl-5 py-4'>
                            <span className="absolute -left-2 top-0 h-3 w-3 bg-green-600 rounded-full"></span>
                            <Image src={sc4} alt='Advanced Fiqh' />
                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Advanced Fiqh & Practical Application</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Case Studies: </span> Apply Fiqh principles to contemporary situations.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Ethics & Character: </span> Integrate Sharia guidance into daily decision-making and social conduct.</p>
                            <p className='text-black font-normal text-[16px] font-poppins'><span className='font-bold'>Interactive Discussion: </span> Tutors provide clarification and reinforce critical reasoning for real-life application.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <StepsSection />

            <SectionLayout>
                <div className='lg:w-1/2 w-full flex flex-col gap-4 mb-6'>
                    <h1 className='text-black font-medium font-poppins text-[36px] '>More About Islamic Fiqh Course</h1>
                    <p className='text-black font-normal text-[16px] font-poppins'>This course equips learners with practical knowledge to implement Islamic law confidently.</p>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-1/2'>
                        <Image src={more} alt='Islamic Fiqh Course Illustration' />
                    </div>
                    <div className='w-1/2 grid grid-cols-2 space-x-3.5 space-y-3.5'>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Comprehensive Coverage</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Master the rules of worship, family, social, and financial dealings according to Sharia.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Practical Implementation</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Learn to apply rulings in modern life, personal decisions, and ethical dilemmas.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Certified Expert Instruction</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Receive one-on-one guidance from scholars specializing in Fiqh.</p>
                        </div>
                        <div className='bg-white shadow-2xl px-3.5 py-6 flex flex-col gap-3 justify-start'>
                            <div className='h-[56px] w-[56px] rounded-full bg-[#D9D9D9]'></div>
                            <h5 className='font-poppins text-2xl font-medium text-black'>Flexible & Self-Paced Learning</h5>
                            <p className='text-black text-[13px] font-poppins font-normal'>Access lessons online, review materials anytime, and progress at your own pace.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-[45%] flex flex-col gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-black font-medium font-poppins text-[36px] '>Why Take This Course</h1>
                            <p className='text-black font-normal text-[16px] font-poppins'>This course is designed for learners seeking an authoritative understanding of Islamic law for everyday life.</p>
                        </div>
                        <Faq faqs={features} />
                    </div>
                    <div className='w-1/2'>
                        <Image src={why} alt='Why Take Fiqh Course' />
                    </div>
                </div>
            </SectionLayout>

            <SliderTestimonial />
            <FaqsSection />
        </main>
    )
}