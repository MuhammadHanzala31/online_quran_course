import Image from "next/image";
import Hero from "./sections/homepage/Hero";
import TrustSection from "./sections/homepage/TrustSection";
import StepsSection from "./sections/homepage/StepsSection";
import BookForm from "./sections/homepage/BookForm";
import FeaturedCourse from "./sections/homepage/FeaturedCourse";
import FreeCourse from "./sections/homepage/FreeCourse";

export default function Home() {
  return (
      <>
       <Hero/>
       <TrustSection/>
       <StepsSection/>
       <BookForm/>
       <FeaturedCourse/>
       <div className="bg-[#F6F6F6]">
        <FreeCourse/>
       </div>
      </>
  );
}
