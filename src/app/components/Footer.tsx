import Link from "next/link";
import Logo from '@/../public/logo/Online Quran Logo Final.png'
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-[#222328] text-[white] mt-10">
      <div className="max-w-[1400px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 space-x-8">

        {/* Column 1 */}
        <div>
          <Link href="/" className="relative">
            <Image alt="footer-logo" src={Logo}  height={180} className="relative" />
          </Link>
          <p className="text-lg font-medium font-poppins">

            Building the future with modern web technologies.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-3xl font-bold font-jakarta mb-6 ">Go To</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#FFB706] text-lg font-medium font-poppins">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#FFB706] text-lg font-medium font-poppins">About</Link></li>
            <li><Link href="/all-courses" className="hover:text-[#FFB706] text-lg font-medium font-poppins">All Courses</Link></li>
            <li><Link href="/all-teachers" className="hover:text-[#FFB706] text-lg font-medium font-poppins">All Teachers</Link></li>
            <li><Link href="/contact" className="hover:text-[#FFB706] text-lg font-medium font-poppins">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-3xl font-bold font-jakarta mb-6">Contact</h3>
          <p className="text-lg font-medium font-poppins flex gap-1 items-center mb-2"><i className="ri-mail-line text-2xl text-[#FFB706]"></i> info@onlinequrancourse.com</p>
          <p className="text-lg font-medium font-poppins flex gap-1 items-center mb-2"><span className="text-[#FFB706] flex items-center gap-0.5"><i className="ri-phone-fill text-2xl"></i> UK </span> +442081231281</p>
          <p className="text-lg font-medium font-poppins flex gap-1 items-center mb-2"><span className="text-[#FFB706] flex items-center gap-0.5"><i className="ri-phone-fill text-2xl"></i> USA </span> +17738002886</p>

        </div>
        <div>
          <h3 className="text-3xl font-bold font-jakarta mb-6">Latest Posts</h3>
          <p className="text-lg font-medium font-poppins flex gap-1 items-center mb-2">Hifz Teachers</p>
          <p className="text-lg font-medium font-poppins flex gap-1 items-center mb-2"> Quran Memorization for Men</p>
          <p className="text-lg font-medium font-poppins flex gap-1 items-center mb-2"> Quran Hifz Classes for Sisters</p>
          <p className="text-lg font-medium font-poppins flex gap-1 items-center mb-2"> Online Quran Memorization Courses for Adults</p>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#098A46] text-center py-4 text-lg font-medium font-poppins">
        © {new Date().getFullYear()} Online Quran Course All rights reserved.
      </div>
    </footer>
  );
}
