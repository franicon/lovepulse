  import Image from "next/image";
  import HeroSection from "@/components/Hero";
  import StatsSection from "@/components/Stats";
  import OurValues from "@/components/Value";
  import {Cta} from "@/components/Cta";
  import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <h1 className="">
      <HeroSection/>
        <StatsSection/>
      <OurValues/>
        <Cta/>
      <ContactSection/>
    </h1>
  );
}
