
import React from "react";
import Homepage from "@/components/landing/hero-section/heroSection";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import OurServices from "@/components/landing/services/ourservice";
import AboutSection from "@/components/landing/about-us/aboutus";
import { getAddisLogos, getArn, getServiceData, getSiteData, getSocialMedia, getTestimonials, getVidios } from "@/lib/functions";
import TopFeatures from "@/components/landing/features/topfeatures";
import Calculator from "@/components/calculator/calculator";
import { Testimonials } from "@/components/landing/testimonials/testimonials";
import { OurPosts } from "@/components/landing/our-blogs/ourposts";
import SubscribCard from "@/components/landing/subscribcard";


export default async function Page({ children }) {
      const siteData= await getSiteData();
        const services = await getServiceData();
        const SocialMedia= await getSocialMedia()
        const testimonials=await getTestimonials()
        const amclogos= await getAddisLogos()
        const vidios= await getVidios()
          const arn=await getArn();
    return (
        <div className="bg-slate-50 flex flex-col">
            <main>
               
                <Suspense fallback={<Skeleton />}>
                    <Homepage />
                </Suspense>
                {/* <WhyChouseus /> */}
                <AboutSection siteData={siteData} />
                <OurServices services={services} />
                {/* <WhyChouseUs /> */}
                <Calculator/>
                <TopFeatures />
                {/* <FinancialTool />
                <EmiCalculator /> */}
                <Testimonials testimonials={testimonials}/>
                {/* <OurHistory /> */}
                <OurPosts vidios={vidios} />
                <SubscribCard amclogos={amclogos} />
            </main>
        </div>
    );
}