import Image from "next/image";
import Hero from "./sections/homepage/Hero";
import TrustSection from "./sections/homepage/TrustSection";
import StepsSection from "./sections/homepage/StepsSection";

export default function Home() {
  return (
      <>
       <Hero/>
       <TrustSection/>
       <StepsSection/>
      </>
  );
}
