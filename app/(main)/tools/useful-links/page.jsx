"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const UsefulLinksPage = () => {
  const [usefulLink, setUsefulLink] = useState([]);
  const fetchLinks = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/useful-links?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    if (res.ok) {
      const data = await res.json();
      setUsefulLink(data);
    }
  };
  // useEffect(() => { fetchservice(); }, []);
  useEffect(() => {
    fetchLinks();
  }, []);
  return (
    <div className="">
      <div className="">
        <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/light-banner.jpg')] overflow-hidden text-start justify-start items-center h-64">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
              Useful Links
            </h1>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto main_section">
          <div>
            <h5 className="mb-4">
              Here are some essential links for investors:
            </h5>
            <ul>
              <li>
                <strong>KYC STATUS </strong> :- <br />{" "}
                <a href="https://camskra.com/" target="_blank">
                  
                    <u>https://camskra.com/</u>
                 
                </a>{" "}
                <br />{" "}
                <a href="https://www.cvlkra.com/Default.aspx" target="_blank">
              
                    <u>https://www.cvlkra.com/Default.aspx</u>
                  
                </a>{" "}
                <br />
                <a href="https://www.karvykra.com/upansearchglobalwithpanexempt.aspx" target="_blank">
               
                    <u>https://www.karvykra.com/upansearchglobalwithpanexempt.aspx</u>
                  
                </a>{" "}
              </li>
               <li className="mt-4">
                <b>KYC VALIDATION</b>  :- <br />{" "}
                <a href="https://camskra.com/emvalidation.aspx" target="_blank">
                  
                    <u>https://camskra.com/emvalidation.aspx</u>
                  
                </a>{" "}
                <br />{" "}
                <a href="https://camskra.com/pan_aadhaarlink.aspx" target="_blank">
                  
                    <u>https://camskra.com/pan_aadhaarlink.aspx</u>
                  
                </a>{" "}
                <br />
                <a href="https://validate.cvlindia.com/CVLKRAVerification_V1/" target="_blank">
                  
                    <u>https://validate.cvlindia.com/CVLKRAVerification_V1/</u>
                
                </a>{" "}
              </li>
               <li className="mt-4">
                <b>TATA AIA</b>  :- {" "}
                <a href="https://myinsurance.tataaia.com/portfolio/login?target=50&policyNo=C213995779&paymentCampaign=siddhi" target="_blank">
                 
                    <u>https://myinsurance.tataaia.com/portfolio/login?target=50&policyNo=C213995779&paymentCampaign=siddhi</u>
               
                </a>{" "}
              </li>
             
                <li className="mt-4">
                <b>Star Health</b> :- {" "}
                <a href="https://customer.starhealth.in/customerportal/instant-renewal" target="_blank">
                  
                    <u>https://customer.starhealth.in/customerportal/instant-renewal</u>
                  
                </a>{" "}
              </li>
              <li className="mt-4">
                Care Health :- {" "}
                <a href="https://www.careinsurance.com/rhicl/proposalcp/renew/index-care" target="_blank">
                  
                    <u>https://www.careinsurance.com/rhicl/proposalcp/renew/index-care</u>
                 
                </a>{" "}
              </li>
              <li className="mt-4">
                <b>India First</b>  :- {" "}
                <a href="https://www.indiafirstlife.com/quick-pay" target="_blank">
                  
                    <u>https://www.indiafirstlife.com/quick-pay</u>
                  
                </a>{" "}
              </li>
              <li className="mt-4">
                <b>HDFC Life</b>   :- {" "}
                <a href="https://www.careinsurance.com/rhicl/proposalcp/renew/index-care" target="_blank">
                 
                    <u>https://www.careinsurance.com/rhicl/proposalcp/renew/index-care</u>
                  
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="max-w-screen-xl mx-auto main_section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-[60px]">
          {usefulLink.map((link, index) => (
            <Link href={link.link} key={index} legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--rv-secondary)] text-white border rounded-lg shadow-md p-4 text-center hover:shadow-lg transition hover:bg-[var(--rv-primary)] hover:text-white duration-300 flex flex-col justify-center items-center"
              >
                <h3 className="text-xl font-semibold">{link.title}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default UsefulLinksPage;
