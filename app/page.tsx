import WhyChooseUs from "@/components/about/WhyChooseUs";
import AboutPreview from "@/components/home/AboutPreview";
import Categories from "@/components/home/Categories";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Manufacturers from "@/components/home/Manufacturers";
import Stats from "@/components/home/Stats";

export default function HomePage(){
  return(
    <>
    <Hero/>
    <Stats/>
    <AboutPreview/>
    <Manufacturers/>
    <Categories/>
    <WhyChooseUs/>
    <Industries/>
    <CTA/>
    </>
  )
}