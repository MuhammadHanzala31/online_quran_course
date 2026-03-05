

"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from '@/../public/logo/Online Quran Logo Final.png'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);

  const ukOptions = [
    { label: "Quran in Uk", href: "/uk" },
    { label: "Quran in USA", href: "/usa" },
    { label: "Quran for kids", href: "/kids" },
    { label: "Quran for Adults", href: "/adults" },
    { label: "Quran for Women", href: "/women" },
  ];

  const teachers = [
    { label: "All Teachers", href: "/all-teachers" },
    { label: "female Teachers", href: "/female-teacher" },
    { label: "Male Teachers", href: "/female-teacher" },
  ];
  const courses = [
    { label: "Quran Memorization", href: "/course/quran-memorization" },
    { label: "Quran Recitation", href: "/course/quran-recitation" },
    { label: "Quran Translation", href: "/course/quran-translation" },
    { label: "Online Tarteel", href: "/course/online-tarteel" },
    { label: "Online Tajweed", href: "/course/online-tajweed" },
    { label: "Islamic Fiqh", href: "/course/islamic-fiqh" },
    { label: "Basics Of Islam", href: "/course/basic-islamic" },
    { label: "Basic Alphabets", href: "/course/basic-alphabets" },
    { label: "Tafseer Ul Quran", href: "/course/tafseer-ul-quran" },
  ];

  


  return (
    <header>
      <div className="bg-[#098A46] py-3 ">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex gap-2 items-center">
            <Link href={'tel:+442081231281'} className="text-lg font-medium font-poppins flex gap-1 items-center mb-2 text-white"><span className="text-[#FFB706] flex items-center gap-0.5"><i className="ri-phone-fill text-2xl"></i> USA </span> +17738002886</Link>
            <Link href={'tel:+17738002886'}  className="text-lg font-medium font-poppins flex gap-1 items-center mb-2 text-white"><span className="text-[#FFB706] flex items-center gap-0.5"><i className="ri-phone-fill text-2xl"></i> UK </span> +442081231281</Link>
            <Link  href={'mailto:info@onlinequrancourse.com'} className="text-lg font-medium font-poppins flex gap-1 items-center mb-2 text-white"><i className="ri-mail-line text-2xl text-[#FFB706]"></i> info@onlinequrancourse.com</Link>
          </div>
          <div className="flex gap-2 items-center">
            <Link href={'/'} className="h-8 w-8 flex justify-center items-center rounded-none bg-transparent border border-[#FFB706]"><i className="ri-facebook-fill text-[#FFB706] text-xl"></i></Link>
            <Link href={'/'} className="h-8 w-8 flex justify-center items-center rounded-none bg-transparent border border-[#FFB706]"><i className="ri-twitter-x-line text-[#FFB706] text-xl"></i></Link>
            <Link href={'/'} className="h-8 w-8 flex justify-center items-center rounded-none bg-transparent border border-[#FFB706]"><i className="ri-instagram-fill text-[#FFB706] text-xl"></i></Link>
          </div>
        </div>
      </div>
      <nav className="bg-[white] shadow-lg h-[130px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="relative">
              <Image src={Logo} alt="sorry" height={130} className="relative" />
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-[#FFB706] text-[#098A46] font-medium font-poppins text-[18px]">Home</Link>
              <div
                className="relative group"
                onMouseEnter={() => setOpenMegaMenu("courses")}
                onMouseLeave={() => setOpenMegaMenu(null)}
              >
                <button className="hover:text-[#FFB706] text-[#098A46] font-medium font-poppins text-[18px] cursor-pointer">Courses</button>
                {openMegaMenu === "courses" && (
                  <div className="absolute left-0 mt-0 bg-white shadow-lg border border-[#098a4565] z-50">
                    {courses.map((option, idx) => (
                      <Link
                        key={idx}
                        href={option.href}
                        className="block px-4 py-2 font-jakarta text-lg text-[#098A46] hover:text-[#FFB706] hover:bg-gray-100 whitespace-nowrap"
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/about-us" className="hover:text-[#FFB706] text-[#098A46] font-medium font-poppins text-[18px]">About</Link>
              <div
                className="relative group"
                onMouseEnter={() => setOpenMegaMenu("uk")}
                onMouseLeave={() => setOpenMegaMenu(null)}
              >
                <button className="hover:text-[#FFB706] text-[#098A46] font-medium font-poppins text-[18px] cursor-pointerx`">Online Learning</button>
                {openMegaMenu === "uk" && (
                  <div className="absolute left-0 mt-0 bg-white  shadow-lg  border border-gray-200 z-50">
                    {ukOptions.map((option) => (
                      <Link
                        key={option.href}
                        href={option.href}
                        className="block px-4 py-2 font-jakarta text-[#098A46] hover:text-[#FFB706] hover:bg-gray-100 whitespace-nowrap"
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>


              {/* USA Mega Menu */}

              <Link href="/blogs" className="hover:text-[#FFB706] text-[#098A46] font-medium font-poppins text-[18px]">Blogs</Link>

                    <div
                className="relative group"
                onMouseEnter={() => setOpenMegaMenu("teachers")}
                onMouseLeave={() => setOpenMegaMenu(null)}
              >
                <button className="hover:text-[#FFB706] text-[#098A46] font-medium font-poppins text-[18px] cursor-pointerx`">Teachers</button>
                {openMegaMenu === "teachers" && (
                  <div className="absolute left-0 mt-0 bg-white  shadow-lg  border border-gray-200 z-50">
                    {teachers.map((option, idx) => (
                      <Link
                        key={idx}
                        href={option.href}
                        className="block px-4 py-2 font-jakarta text-[#098A46] hover:text-[#FFB706] hover:bg-gray-100 whitespace-nowrap"
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:flex space-x-2">
              <Link href={'/registration'} className=" font-medium text-[17px] font-poppins  border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46]">Registration</Link>
              <Link href={'/contact-us'} className="font-medium text-[17px] font-poppins  text-[#098A46] py-2.5 px-6 sm:px-8 bg-transparent border cursor-pointer border-[#098A46] hover:text-white hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46]">contact us</Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden focus:outline-none"
            >
              {open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-[#7AC043] px-4 py-3 space-y-2">
            <Link href="/" className="block text-white hover:text-[#FFB706] text-[#098A46]">Home</Link>
            <Link href="/about-us" className="block text-white hover:text-[#FFB706] text-[#098A46]">About</Link>
            <Link href="/blogs" className="block text-white hover:text-[#FFB706] text-[#098A46]">blogs</Link>
            <Link href="/contact-us" className="block text-white hover:text-[#FFB706] text-[#098A46]">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
