import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getSiteData } from "@/lib/functions";
import Calculator from "@/components/calculator/calculator";
import InnerBanner from "@/components/landing/innerbanner/page";

export const metadata = {
  title: "Loans",
  description:
    "Discover loan solutions tailored to your needs—be it personal, home, education, or business.",
};

const Loans = async () => {
  const siteData = await getSiteData();

  const loanTypes = [
    {
      title: "Personal Loans",
      description: "Quick funds for medical, travel, or personal needs without collateral.",
    },
    {
      title: "Home Loans",
      description: "Affordable financing to purchase, build, or renovate your dream home.",
    },
    {
      title: "Business Loans",
      description: "Boost your business with working capital or expansion funding.",
    },
    {
      title: "Education Loans",
      description: "Invest in your future with financial support for higher education.",
    },
    {
      title: "Vehicle Loans",
      description: "Drive your dreams with easy financing for cars and two-wheelers.",
    },
  ];

  const features = [
    {
      title: "Quick Approvals",
      description: "Fast processing to ensure you get funds when you need them.",
    },
    {
      title: "Competitive Interest Rates",
      description: "Affordable EMIs with attractive interest rate options.",
    },
    {
      title: "Flexible Tenure",
      description: "Choose repayment terms that match your financial comfort.",
    },
    {
      title: "Minimal Documentation",
      description: "Simple paperwork and a hassle-free application process.",
    },
    {
      title: "End-to-End Support",
      description: "Expert assistance throughout the loan journey—from start to finish.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <InnerBanner title={"Loans"}/>

      <div className="max-w-screen-xl mx-auto main_section">
        {/* Introduction */}
        <p className="text-2xl font-semibold text-gray-800 mb-4">Empowering Your Aspirations</p>
        <div className="mb-8">
          <p className="text-gray-700">
            At {siteData?.websiteName}, we understand that financial needs vary. Whether you&#39;re planning a wedding, buying a house, growing your business, or pursuing higher education, our wide range of loan products is designed to provide the right support at the right time.
          </p>
        </div>

        {/* Description */}
        <div className="">
          <p className="text-gray-700">
            With competitive interest rates, flexible repayment options, and expert guidance, we make borrowing simple, transparent, and stress-free—helping you move forward with confidence.
          </p>
        </div>
      </div>

      {/* Loan Types */}
      <div className="bg-[#EDF2F7]">
        <div className="max-w-screen-xl mx-auto main_section">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Types of Loans</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {loanTypes.map((loan, index) => (
              <div
                key={index}
                className="p-5 rounded-xl shadow-md border border-gray-200 transition-all duration-300 bg-white hover:bg-[var(--rv-primary)] hover:text-white"
              >
                <h3 className="font-bold text-lg mb-1">{loan.title}</h3>
                <p className="text-sm">{loan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loan Features */}
      <div className="max-w-screen-xl mx-auto main_section">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Why Choose {siteData?.websiteName} for Your Loan Needs
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

        {/* Loan Calculator */}
        {/* <Calculator service={true} /> */}

        {/* Conclusion & CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Let {siteData?.websiteName} help you take the next step. Our simple, secure, and fast loan process is here to support your goals—whatever they may be.
          </p>
          <Link href="/contact-us" className="vl-btn6">
            Apply for a Loan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loans;
