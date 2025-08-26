"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function SectionLayout({children, className}: {children: React.ReactNode, className?: string}) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])


  return (
    <section className={`max-w-[1400px] w-full mx-auto lg:px-4 px-8 lg:my-[50px] my-7 lg:py-10 py-4 ${className}`}>
      {children}
    </section>
  )
}


