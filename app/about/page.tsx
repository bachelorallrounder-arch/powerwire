import AboutHero from "@/components/about/AboutHero";
import CoreValues from "@/components/about/CoreValues";
import CTA from "@/components/about/CTA";
import GlobalNetwork from "@/components/about/GlobalNetwork";
import VisionMission from "@/components/about/MissionVision";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Industries from "@/components/home/Industries";

export default function AboutPage(){
    return (
        <main>
            <AboutHero/>
            <WhoWeAre/>
            <VisionMission/>
            <WhatWeDo/>
            <Industries/>
            <WhyChooseUs/>
            <GlobalNetwork/>
            <CoreValues/>
            <CTA/>
        </main>
    )
}