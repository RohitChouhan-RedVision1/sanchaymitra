import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { FaRegCheckCircle } from "react-icons/fa";
import { getSiteData } from "@/lib/functions";
import Calculator from "@/components/calculator/calculator";

export const metadata = {
  title: "Mutual Funds",
  description:
    "Explore a diverse range of mutual funds tailored to your financial goals and risk appetite.",
};

const MutualFunds = async () => {
  const siteData=await getSiteData()

  const mutualFundTypes = [
  {
    title: "Equity funds",
    description: "Invest in stocks for higher growth potential over the long term.",
  },
  {
    title: "Debt funds",
    description: "Lower risk investment in government and corporate bonds.",
  },
  {
    title: "Hybrid funds",
    description: "Combine equity and debt for balanced risk and return.",
  },
  {
    title: "ELSS (Tax saving funds)",
    description: "Get tax benefits under Section 80C with a 3-year lock-in.",
  },
  {
    title: "Liquid funds",
    description: "Ideal for parking surplus funds with quick liquidity.",
  },
];

const features = [
  {
    title: "Diversified portfolio",
    description: "Reduce risk through asset diversification across sectors and markets.",
  },
  {
    title: "Professional management",
    description: "Expert fund managers handle all investment decisions.",
  },
  {
    title: "Flexible investment options",
    description: "Start with SIPs or lump sums based on your convenience.",
  },
  {
    title: "Liquidity",
    description: "Easy entry and exit options with most open-ended funds.",
  },
  {
    title: "Goal-based planning",
    description: "Tailored solutions for retirement, education, and wealth creation.",
  },
];
  return (
    <div>
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/light-banner.jpg')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Mutual Funds
          </h1>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto main_section">
        {/* Introduction */}
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Diversified. Managed. Growth.
        </p>
        <div className="mb-8">
          <p className="text-gray-700">
            Mutual funds are professionally managed investment schemes that pool money from multiple investors to invest in diversified asset classes. At {siteData?.websiteName}, we offer a wide range of mutual fund options that align with your financial goals, risk profile, and investment horizon.
          </p>
        </div>

        {/* Description */}
        <div className="">
          <p className="text-gray-700">
            Whether you&apos;re looking to grow your wealth, save taxes, or build a retirement corpus, our curated mutual fund solutions offer flexibility, transparency, and expert fund management to help you succeed in your investment journey.
          </p>
        </div>

      </div>
       <div className="bg-[#EDF2F7]">
        <div className="max-w-screen-xl  mx-auto main_section">
       

        <div className="">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Types of Mutual Funds</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {mutualFundTypes.map((fund, index) => (
          <div
            key={index}
            className="p-5 rounded-xl shadow-md border border-gray-200 transition-all duration-300 bg-white hover:bg-[var(--rv-primary)] hover:text-white"
          >
            
            <h3 className="font-bold text-lg mb-1">{fund.title}</h3>
            <p className="text-sm">{fund.description}</p>
          </div>
        ))}
      </div>
    </div>
      </div>

       </div>
      <div className="max-w-screen-xl mx-auto main_section">
  
        {/* Features */}
        <div className="">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Why Invest in Mutual Funds with Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-xl shadow-md border border-gray-200 transition-all duration-300 bg-white hover:bg-[var(--rv-primary)] hover:text-white"
          >
            
            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
        </div>

<Calculator service={true}/>
        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Take control of your financial future with smart mutual fund investments. Whether you&apos;re new to investing or a seasoned pro, {siteData?.websiteName} offers the right mix of funds to help you meet your goals.
          </p>
          <Link
                        href="/login"
                        className="vl-btn1"
                      >
                        Explore funds now
                      </Link>
       
        </div>
      </div>
    </div>
  );
};

export default MutualFunds;
