import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/header";
import Tickers from "@/components/landing/tickers/tickers";
import { Skeleton } from "@/components/ui/skeleton";

import WebPopup from "@/components/webpopup";
import { getArn, getServiceData, getSiteData, getSocialMedia } from "@/lib/functions";
import { Suspense } from "react";
import AnimatedCursor from "react-animated-cursor"
// import UpdatePopup from "@/components/updatepopup";

export default async function Layout({ children }) {
    
    const siteData= await getSiteData();
    const services = await getServiceData();
    const SocialMedia= await getSocialMedia()
      const arn=await getArn();
    return (
        <div>
            {/* <AnimatedCursor
                innerSize={8}
                outerSize={12}
                color="43, 209, 25"
                outerAlpha={0.5}
                innerScale={1}
                outerScale={5}
                showSystemCursor={true}
                clickables={[
                    'button',
                    'h1',
                    'h2',
                    'h3',
                    '.link',
                    '[data-cursor-text]'
                ]}
                outerStyle={{
                    mixBlendMode: 'exclusion'
                }}
                innerStyle={{
                    backgroundColor: 'var(--accent-color)'
                }}
            /> */}
             <Suspense fallback={<Skeleton />}>

                    <Tickers />
                </Suspense>
            <Navbar siteData={siteData} services={services}/>
            {children}
            <Footer siteData={siteData} arn={arn} services={services} SocialMedia={SocialMedia}/>
            {/* <UpdatePopup /> */}
            <WebPopup />
        </div>
    );
}