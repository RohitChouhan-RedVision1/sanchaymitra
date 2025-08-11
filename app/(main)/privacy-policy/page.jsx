"use client";
import InnerBanner from "@/components/landing/innerbanner/page";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { footerData } from "@/data/footer";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PrivacyPolicy() {
    const [data, setData] = useState('');
    const [mainData, setMainData] = useState("");
    const fetchdata = async () => {
        const data = await fetch("/api/admin/site-settings");
        if (data.ok) {
            const maindata = await data.json();
            setMainData(maindata[0])
        }
    };
    const fetchPolicy = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/privacy-policy?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
            if (response.status === 200 && response.data && response.data[0]) {
                const data = response.data[0];
                setData(data.pvp);
            } else {
                console.error("Invalid data format:", response.data);
                alert("Failed to fetch services. Please try again.");
            }
        } catch (error) {
            console.error("Error fetching services:", error);
            alert("An error occurred while fetching services. Please try again.");
        }
    };
    useEffect(() => { fetchPolicy(); }, []);
    useEffect(() => { fetchdata(); }, []);


   function createMarkup() {
        const highlightedText = data
            .replace(/Your Company name/gi, `<mark style="background-color: transparent; font-size: 16px ; font-weight: bold;">${mainData?.websiteName}</mark>`)
            .replace(/What we collect/gi, '<br><br><mark style=" background-color: transparent; font-size: 18px; font-weight: bold; ">What we collect</mark> <br/>')
            .replace(/Name and contact details/gi, '<br><br><mark style="background-color: transparent; font-size: 18px; font-weight: bold;">Name and contact details</mark><br>')
            .replace(/Collection Use of image data/gi, '<br><br><mark style="background-color: transparent; font-size: 18px; font-weight: bold;">Collection Use of image data</mark>')
            .replace(/Use of location data/gi, '<br><br><mark style="background-color: transparent; font-size: 18px;font-weight: bold;">Use of location data</mark><br>')
            .replace(/Security/, '<br><br><mark style="background-color: transparent; font-size: 18px;font-weight: bold;">Security</mark><br>')
            .replace(/Links to other websites/, '<br><br><mark style="background-color: transparent; font-size: 18px;font-weight: bold;">Links to other websites</mark><br>')
            .replace(/Controlling your personal information/gi, '<br><br><mark style="background-color: transparent; font-size: 18px;font-weight: bold;">Controlling your personal information</mark><br>')
            .replace(/Security certificates/gi, '<br><br><mark style="background-color: transparent; font-size: 18px;font-weight: bold;">Security certificates</mark><br>')
        return { __html: highlightedText };
    }

    return (
        <div>
          <InnerBanner title={"Privacy Policy"} />
                                {/* <div className="text-gray-700 max-w-screen-xl mx-auto main_section">
            <p dangerouslySetInnerHTML={createMarkup()} />
        </div> */}

           <div className="text-gray-700 max-w-screen-xl mx-auto main_section">
            <p>Mutual Fund investments are subject to market risks, read all 
scheme related documents carefully. The NAVs of the schemes may go up or down 
depending upon the factors and forces affecting the securities market including the 
fluctuations in the interest rates. The past performance of the mutual funds is not 
necessarily indicative of future performance of the schemes. The Mutual Fund is not 
guaranteeing or assuring any dividend under any of the schemes and the same is 
subject to the availability and adequacy distributable surplus.
<br/> <br />
Sanchaymitra Financial Services Pvt. Ltd. makes no warranties or representations, 
express or implied, on products offered through the platform of Sanchaymitra 
Financial Services Pvt. Ltd.. It accepts no liability for any damages or losses, however, 
caused, in connection with the use of, or on the reliance of its product or related 
services. Terms and conditions of the website are applicable. Investments in 
Securities markets are subject to market risks, read all the related documents 
carefully before investing.</p>
        </div>
        </div>
      
    );
}
