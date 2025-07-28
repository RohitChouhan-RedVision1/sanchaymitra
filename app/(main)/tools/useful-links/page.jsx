"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

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

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/light-banner.jpg')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Useful Links
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto py-12 px-4">
        <h5 className="mb-6 text-lg font-medium">
          Here are some essential links for investors:
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Static Buttons */}
          {[
            { title: "KYC Status - CAMS", url: "https://camskra.com/" },
            { title: "KYC Status - CVL", url: "https://www.cvlkra.com/Default.aspx" },
            { title: "KYC Status - Karvy", url: "https://www.karvykra.com/upansearchglobalwithpanexempt.aspx" },
            { title: "KYC Validation - CAMS", url: "https://camskra.com/emvalidation.aspx" },
            { title: "KYC Validation - CVLINDIA", url: "https://camskra.com/pan_aadhaarlink.aspx" },
            { title: "KRA Verification - CVL", url: "https://validate.cvlindia.com/CVLKRAVerification_V1/" },
            { title: "TATA AIA", url: "https://myinsurance.tataaia.com/portfolio/login?target=50&policyNo=C213995779&paymentCampaign=siddhi" },
            { title: "Star Health", url: "https://customer.starhealth.in/customerportal/instant-renewal" },
            { title: "Care Health", url: "https://www.careinsurance.com/rhicl/proposalcp/renew/index-care" },
            { title: "India First", url: "https://www.indiafirstlife.com/quick-pay" },
            { title: "HDFC Life", url: "https://www.careinsurance.com/rhicl/proposalcp/renew/index-care" },
          ].map((item, idx) => (
            <a
              href={item.url}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-4 px-6 bg-[var(--rv-secondary)] hover:bg-[var(--rv-primary)] text-white font-semibold rounded-lg shadow transition duration-300"
            >
              {item.title}
            </a>
          ))}

          {/* Dynamic Buttons from API (optional) */}

        </div>
      </div>
    </div>
  );
};

export default UsefulLinksPage;