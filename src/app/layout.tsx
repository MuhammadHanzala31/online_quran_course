import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Script from "next/script";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

// Poppins
const poppins = Poppins({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700"], // jo chahiye wo select karo
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Online Quran Course",
  description: "developed by zia khalid",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Online Quran Course",
    "alternateName": "OQC Academy",
    "url": "https://onlinequrancourse.com/",
    "logo": "https://onlinequrancourse.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOnline%20Quran%20Logo%20Final.8bc36ea6.png&w=128&q=75",
    "sameAs": [
      "https://www.facebook.com/onlinequrancourse/",
      "https://x.com/OnlineQC/",
      "https://www.instagram.com/onlinequrancourse"
    ]
  }


  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://onlinequrancourse.com/#website",
    "url": "https://onlinequrancourse.com/",
    "name": "Online Quran Course",
    "alternateName": "OQC Academy",
    "description":
      "Online Quran Course offers one-on-one Quran classes for kids and adults with experienced male and female Quran teachers. Learn Quran reading, Tajweed, Quran memorization, Tafseer, and Islamic studies online from anywhere in the world.",
    "inLanguage": "en",
    "publisher": {
      "@type": "Organization",
      "name": "Online Quran Course",
      "url": "https://onlinequrancourse.com/"
    },
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Home",
        "url": "https://onlinequrancourse.com/"
      },
      {
        "@type": "CollectionPage",
        "name": "All Courses",
        "url": "https://onlinequrancourse.com/all-courses"
      },
      {
        "@type": "AboutPage",
        "name": "About Us",
        "url": "https://onlinequrancourse.com/about-us"
      },
      {
        "@type": "Blog",
        "name": "Blogs",
        "url": "https://onlinequrancourse.com/blogs"
      },
      {
        "@type": "CollectionPage",
        "name": "All Teachers",
        "url": "https://onlinequrancourse.com/all-teachers"
      },
      {
        "@type": "ContactPage",
        "name": "Contact Us",
        "url": "https://onlinequrancourse.com/contact-us"
      }
    ]
  };



  return (
    <html lang="en">
      <head>
      {/* this is a comment from zia you can put search console code below this comment  */} 
      
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} ${poppins.variable} antialiased`}
      >
        <Script
            id="website-schema"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteSchema),
            }}
          />
          <Script
            id="organization-schema"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />
        <Navbar />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
