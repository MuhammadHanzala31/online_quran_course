// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-[white] shadow-lg">
//       <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold">
//             MyBrand
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             <Link href="/" className="hover:text-[#FFB706] text-[#098A46]">Home</Link>
//             <Link href="/about-us" className="hover:text-[#FFB706] text-[#098A46]">About</Link>
//             <Link href="/uk" className="hover:text-[#FFB706] text-[#098A46]">uk</Link>
//             <Link href="/usa" className="hover:text-[#FFB706] text-[#098A46]">usa</Link>
//             <Link href="/contact-us" className="hover:text-[#FFB706] text-[#098A46]">Contact</Link>
//             <Link href="/blogs" className="hover:text-[#FFB706] text-[#098A46]">blogs</Link>
//             <Link href="/kids" className="hover:text-[#FFB706] text-[#098A46]">kids</Link>
//             <Link href="/all-courses" className="hover:text-[#FFB706] text-[#098A46]">all courses</Link>
//             <Link href="/all-teachers" className="hover:text-[#FFB706] text-[#098A46]">all Teachers</Link>
//             <Link href="/male-and-female" className="hover:text-[#FFB706] text-[#098A46]">Male & female Teachers</Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden focus:outline-none"
//           >
//             {open ? (
//               <XMarkIcon className="h-6 w-6" />
//             ) : (
//               <Bars3Icon className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {open && (
//         <div className="md:hidden bg-[#7AC043] px-4 py-3 space-y-2">
//           <Link href="/" className="block text-white hover:text-[#FFB706] text-[#098A46]">Home</Link>
//           <Link href="/about-us" className="block text-white hover:text-[#FFB706] text-[#098A46]">About</Link>
//           <Link href="/blogs" className="block text-white hover:text-[#FFB706] text-[#098A46]">blogs</Link>
//           <Link href="/contact-us" className="block text-white hover:text-[#FFB706] text-[#098A46]">Contact</Link>
//         </div>
//       )}
//     </nav>
//   );
// }


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
  ];

  const usaOptions = [
    { label: "Tarteel", href: "/usa/newyork" },
    { label: "California", href: "/usa/california" },
    { label: "Texas", href: "/usa/texas" },
    { label: "Florida", href: "/usa/florida" },
    { label: "Illinois", href: "/usa/illinois" },
  ];

  return (
    <header>
      <div className="bg-[#098A46] py-3">
        <div className="flex justify-between items-center max-w-[1330px] mx-auto">
          <div className="flex gap-2 items-center">
            <p className="text-lg font-medium font-poppins flex gap-1 items-center mb-2 text-white"><span className="text-[#FFB706] flex items-center gap-0.5"><i className="ri-phone-fill text-2xl"></i> USA </span> +17738002886</p>
            <p className="text-lg font-medium font-poppins flex gap-1 items-center mb-2 text-white"><span className="text-[#FFB706] flex items-center gap-0.5"><i className="ri-phone-fill text-2xl"></i> UK </span> +442081231281</p>
            <p className="text-lg font-medium font-poppins flex gap-1 items-center mb-2 text-white"><i className="ri-mail-line text-2xl text-[#FFB706]"></i> info@onlinequrancourse.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <Link href={'/'} className="h-8 w-8 flex justify-center items-center rounded-full bg-transparent border border-[#FFB706]"><i className="ri-facebook-fill text-[#FFB706] text-xl"></i></Link>
            <Link href={'/'} className="h-8 w-8 flex justify-center items-center rounded-full bg-transparent border border-[#FFB706]"><i className="ri-twitter-x-line text-[#FFB706] text-xl"></i></Link>
            <Link href={'/'} className="h-8 w-8 flex justify-center items-center rounded-full bg-transparent border border-[#FFB706]"><i className="ri-instagram-fill text-[#FFB706] text-xl"></i></Link>
          </div>
        </div>
      </div>
      <nav className="bg-[white] shadow-lg h-[130px]">
        <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="relative">
              <Image src={Logo} alt="sorry" height={130} className="relative" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-[#FFB706] text-[#098A46] font-medium font-poppins text-[18px]">Home</Link>
              <Link href="/about-us" className="hover:text-[#FFB706] text-[#098A46] font-medium font-poppins text-[18px]">About</Link>

              {/* UK Mega Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setOpenMegaMenu("uk")}
                onMouseLeave={() => setOpenMegaMenu(null)}
              >
                <button className="hover:text-[#FFB706] text-[#098A46] font-medium font-poppins text-[18px] cursor-pointerx`">Courses</button>
                {openMegaMenu === "uk" && (
                  <div className="absolute left-0 mt-0 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                    {ukOptions.map((option) => (
                      <Link
                        key={option.href}
                        href={option.href}
                        className="block px-4 py-2 text-[#098A46] hover:text-[#FFB706] hover:bg-gray-100 whitespace-nowrap"
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* USA Mega Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setOpenMegaMenu("usa")}
                onMouseLeave={() => setOpenMegaMenu(null)}
              >
                <button className="hover:text-[#FFB706] text-[#098A46] font-medium font-poppins text-[18px] cursor-pointerx`">usa</button>
                {openMegaMenu === "usa" && (
                  <div className="absolute left-0 mt-0 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                    {usaOptions.map((option) => (
                      <Link
                        key={option.href}
                        href={option.href}
                        className="block px-4 py-2 text-[#098A46] hover:text-[#FFB706] hover:bg-gray-100 whitespace-nowrap"
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/contact-us" className="hover:text-[#FFB706] text-[#098A46] font-medium font-poppins text-[18px]">Contact</Link>
              <Link href="/blogs" className="hover:text-[#FFB706] text-[#098A46] font-medium font-poppins text-[18px]">blogs</Link>
              <Link href="/all-teachers" className="hover:text-[#FFB706] text-[#098A46] font-medium font-poppins text-[18px]">all Teachers</Link>

            </div>

            <div className="hidden md:flex space-x-2">
              <button className=" font-medium text-[17px] font-poppins  border-[#098A46] cursor-pointer text-white py-2.5 px-6 sm:px-8 hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46] bg-[#098A46]">Registration</button>
              <button className="font-medium text-[17px] font-poppins  text-[#098A46] py-2.5 px-6 sm:px-8 bg-transparent border cursor-pointer border-[#098A46] hover:text-white hover:bg-[#7AC043] transition-all hover:shadow-[3px_4px_4px_#098A46]">contact us</button>
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
