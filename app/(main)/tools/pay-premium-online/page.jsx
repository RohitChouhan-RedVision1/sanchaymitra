"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbItem, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function PayPremium() {
    const [selectedCategory, setSelectedCategory] = useState('mf');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const fiimagedata = [
        {
            image: "/lifeinsurancelogo/1.webp",
            link: "https://licindia.in/premium-payment"
        },
        {
            image: "/lifeinsurancelogo/2.webp",
            link: "https://portal.uiic.in/GCWebPortal/gcDealerMisc/pgmessagebuildoffice.do"
        },
        {
            image: "/lifeinsurancelogo/3.webp",
            link: "https://online.avivaindia.com/econnect/Pages/PayPremiumDirect.aspx"
        },
        {
            image: "/lifeinsurancelogo/4.webp",
            link: "https://www.bhartiaxa.com/pay-premium-online"
        },
        {
            image: "/lifeinsurancelogo/5.webp",
            link: "https://www.bajajallianzlife.com/renewal-payment.html"
        },
    ];

    const hiimagedata = [
        {
            image: "/healthinsurancelogo/1.webp",
            link: "https://www.icicilombard.com/renew-policy-online#/AllRenewal"
        },
        {
            image: "/healthinsurancelogo/2.webp",
            link: "https://www.tataaig.com/renewal?lob=others&renewalHeader=yes"
        },
        {
            image: "/healthinsurancelogo/3.webp",
            link: "https://transactions.nivabupa.com/renewal/renewpolicies.aspx"
        },
        {
            image: "/healthinsurancelogo/4.webp",
            link: "https://www.starhealth.in/help/internal/website/"
        },
        {
            image: "/healthinsurancelogo/5.webp",
            link: "https://transactions.nivabupa.com/renewal/renewpolicies.aspx"
        },
    ];

    const giimagedata = [
        {
            image: "/generalinsurancelogo/1.webp",
            link: "https://my.royalsundaram.in/"
        },
        {
            image: "/generalinsurancelogo/2.webp",
            link: "https://www.tataaig.com/renewal?lob=others&renewalHeader=yes"
        },
        {
            image: "/generalinsurancelogo/3.webp",
            link: "https://www.sbigeneral.in/policy-renewal"
        },
        {
            image: "/generalinsurancelogo/4.webp",
            link: "https://www.reliancegeneral.co.in/insurance/health-insurance/renewal-online-premium-calculation.aspx"
        },
        {
            image: "/generalinsurancelogo/5.webp",
            link: "https://orientalinsurance.org.in/"
        },
    ];

    // Determine which data set to use based on selected category
    const data = selectedCategory === 'li' ? fiimagedata : selectedCategory === 'hi' ? hiimagedata : giimagedata;
    return (
        <div className="">
           <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/light-banner.jpg')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Pay Premium Online
          </h1>
        </div>
      </div>
        <section className="max-w-screen-xl mx-auto main_section">
            <div className=''>
                <div className='md:px-5  py-4 bg-[var(--rv-secondary)] text-white flex items-center gap-x-2 md:gap-x-10  rounded'>
                    <div className='cursor-pointer' onClick={() => handleCategoryClick('gi')}>
                        <p className={`uppercase font-semibold hover:text-white ${selectedCategory === 'gi' ? 'text-white' : ''}`}>General Insurance</p>
                    </div>
                    <div className='cursor-pointer' onClick={() => handleCategoryClick('li')}>
                        <p className={`uppercase font-semibold hover:text-white ${selectedCategory === 'li' ? 'text-white' : ''}`}>Life Insurance</p>
                    </div>
                    <div className='cursor-pointer' onClick={() => handleCategoryClick('hi')}>
                        <p className={`uppercase font-semibold hover:text-white ${selectedCategory === 'hi' ? 'text-white' : ''}`}>Health Insurance</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-x-3 my-4">
                    {data.map((item, index) => (
                        <Link href={item.link} key={index} target="blank">
                            <div className="flex justify-center p-5 border text-center mb-3" >
                                <Image src={item.image} alt={`logo-${item.image}`} width={150} height={100} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
}