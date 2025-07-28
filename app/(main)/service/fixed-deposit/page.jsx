import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getSiteData } from "@/lib/functions";
import Calculator from "@/components/calculator/calculator";

export const metadata = {
  title: "Fixed Deposits",
  description:
    "Discover secure and stable investment options with Fixed Deposits, ideal for preserving capital and earning steady returns.",
};

const FixedDeposits = async () => {
  const siteData = await getSiteData();

  const fdTypes = [
    {
      title: "Cumulative FDs",
      description: "Interest is compounded and paid at maturity for maximum growth.",
    },
    {
      title: "Non-Cumulative FDs",
      description: "Interest paid monthly, quarterly, or annually for regular income.",
    },
    {
      title: "Tax-saving FDs",
      description: "Get tax benefits under Section 80C with a 5-year lock-in.",
    },
    {
      title: "Senior Citizen FDs",
      description: "Higher interest rates for senior citizens with safe returns.",
    },
    {
      title: "Corporate FDs",
      description: "Offered by NBFCs and corporates with attractive returns.",
    },
  ];

  const fdBenefits = [
    {
      title: "Capital Safety",
      description: "100% principal protection with no market risk.",
    },
    {
      title: "Guaranteed Returns",
      description: "Fixed interest rate throughout the investment tenure.",
    },
    {
      title: "Flexible Tenures",
      description: "Choose durations ranging from 7 days to 10 years.",
    },
    {
      title: "Easy Liquidity",
      description: "Premature withdrawal available with minimal penalties.",
    },
    {
      title: "Tax Benefits",
      description: "Save on taxes with specific FD options under Section 80C.",
    },
  ];

  return (
    <div>
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/light-banner.jpg')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Fixed Deposits
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto main_section">
        {/* Introduction */}
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Secure. Stable. Guaranteed.
        </p>
        <div className="mb-8">
          <p className="text-gray-700">
            Fixed Deposits (FDs) are one of the safest and most popular investment avenues in India. At {siteData?.websiteName}, we provide a variety of FD options that help you grow your money with guaranteed returns and minimal risk.
          </p>
        </div>

        {/* Description */}
        <div className="">
          <p className="text-gray-700">
            Whether you're a conservative saver or planning for specific financial goals, FDs offer the peace of mind of assured returns, flexible tenure, and easy online management — all while keeping your principal safe.
          </p>
        </div>
      </div>

      <div className="bg-[#EDF2F7]">
        <div className="max-w-screen-xl mx-auto main_section">
          {/* FD Types */}
          <div className="">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Types of Fixed Deposits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {fdTypes.map((fd, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl shadow-md border border-gray-200 transition-all duration-300 bg-white hover:bg-[var(--rv-primary)] hover:text-white"
                >
                  <h3 className="font-bold text-lg mb-1">{fd.title}</h3>
                  <p className="text-sm">{fd.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto main_section">
        {/* Benefits */}
        <div className="">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Why Choose Fixed Deposits with Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {fdBenefits.map((item, index) => (
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

        <Calculator service={true} />

        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Lock in higher interest rates and secure your future today. With {siteData?.websiteName}, starting a Fixed Deposit is fast, paperless, and rewarding.
          </p>
          <Link href="/login" className="vl-btn6">
            Start Your FD Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FixedDeposits;
