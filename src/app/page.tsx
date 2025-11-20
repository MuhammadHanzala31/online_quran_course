


import Hero from "./sections/homepage/Hero";
import TrustSection from "./sections/homepage/TrustSection";
import StepsSection from "./sections/homepage/StepsSection";
import BookForm from "./sections/homepage/BookForm";
import FeaturedCourse from "./sections/homepage/FeaturedCourse";
import FreeCourse from "./sections/homepage/FreeCourse";
import GrainSection from "./sections/homepage/GrainSection";
import WhyChoose from "./sections/homepage/WhyChoose";
import Teachers from "./sections/homepage/Teachers";
import AdvancedLmsSectin from "./sections/homepage/AdvancedLmsSectin";
import Aboutus from "./sections/homepage/Aboutus";
import OurMission from "./sections/homepage/OurMission";
import RequestFormSection from "./sections/homepage/RequestFormSection";
import FaqsSection from "./sections/homepage/FaqsSection";
import SliderTestimonial from "./sections/homepage/SliderTestimonial";

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
       <GrainSection/>
       <WhyChoose/>
       <Teachers/>
       <AdvancedLmsSectin/>
       <SliderTestimonial/>
       <Aboutus/>
       <OurMission/>
       <RequestFormSection/>
       <FaqsSection/>
      </>
  );
}
