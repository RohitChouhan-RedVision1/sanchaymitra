"use client";
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

    console.log(data)

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
          <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/light-banner.jpg')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Privacy Policy
          </h1>
        </div>
      </div>
                                <div className="text-gray-700 max-w-screen-xl mx-auto main_section">
            <p dangerouslySetInnerHTML={createMarkup()} />
        </div>
        </div>
      
    );
}
