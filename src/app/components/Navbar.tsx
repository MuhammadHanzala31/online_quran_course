"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#098A46] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            MyBrand
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-[#FFB706]">Home</Link>
            <Link href="/about-us" className="hover:text-[#FFB706]">About</Link>
            <Link href="/uk" className="hover:text-[#FFB706]">uk</Link>
            <Link href="/usa" className="hover:text-[#FFB706]">usa</Link>
            <Link href="/contact-us" className="hover:text-[#FFB706]">Contact</Link>
            <Link href="/blogs" className="hover:text-[#FFB706]">blogs</Link>
            <Link href="/kids" className="hover:text-[#FFB706]">kids</Link>
          </div>

          {/* Mobile Menu Button */}
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
          <Link href="/" className="block text-white hover:text-[#FFB706]">Home</Link>
          <Link href="/about-us" className="block text-white hover:text-[#FFB706]">About</Link>
          <Link href="/blogs" className="block text-white hover:text-[#FFB706]">blogs</Link>
          <Link href="/contact-us" className="block text-white hover:text-[#FFB706]">Contact</Link>
        </div>
      )}
    </nav>
  );
}
