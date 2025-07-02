import React from "react";
import Link from "next/link";
import { getSiteData } from "@/lib/functions";
import Calculator from "@/components/calculator/calculator";

export const metadata = {
  title: "Insurance",
  description:
    "Protect your future with comprehensive life, health, and general insurance solutions tailored to your needs.",
};

const Insurance = async () => {
  const siteData = await getSiteData();

  const insuranceTypes = [
    {
      title: "Life Insurance",
      description: "Secure your family’s financial future with long-term protection and savings.",
    },
    {
      title: "Health Insurance",
      description: "Cover medical expenses and ensure access to quality healthcare.",
    },
    {
      title: "General Insurance",
      description: "Protect assets like vehicles, property, and more from unforeseen risks.",
    },
    {
      title: "Term Insurance",
      description: "High coverage at low cost—pure protection for your loved ones.",
    },
    {
      title: "Critical Illness Cover",
      description: "Financial support during life-threatening illnesses with lump sum payouts.",
    },
  ];

  const features = [
    {
      title: "Financial Protection",
      description: "Safeguard your family and assets against life's uncertainties.",
    },
    {
      title: "Wide Coverage Options",
      description: "Choose from life, health, and general insurance plans that suit your lifestyle.",
    },
    {
      title: "Tax Benefits",
      description: "Enjoy deductions under Sections 80C and 80D of the Income Tax Act.",
    },
    {
      title: "Custom Plans",
      description: "Get plans tailored to your age, health condition, and financial goals.",
    },
    {
      title: "Trusted Partners",
      description: "We collaborate with leading insurers to offer you the best policies.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/light-banner.jpg')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">Insurance</h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto main_section">
        {/* Introduction */}
        <p className="text-2xl font-semibold text-gray-800 mb-4">Secure. Protect. Prepare.</p>
        <div className="mb-8">
          <p className="text-gray-700">
            At {siteData?.websiteName}, we believe that insurance is more than a policy—it&#39s peace of mind. Our insurance solutions are designed to protect what matters most, ensuring you and your loved ones are financially secure during life&#39s uncertainties.
          </p>
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-700">
            Whether it&#39s life, health, or general insurance, our offerings provide comprehensive coverage, flexibility, and affordability—tailored to your individual and family needs.
          </p>
        </div>
      </div>

      {/* Insurance Types */}
      <div className="bg-[#EDF2F7]">
        <div className="max-w-screen-xl mx-auto main_section">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Types of Insurance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {insuranceTypes.map((item, index) => (
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
      </div>

      {/* Insurance Features */}
      <div className="max-w-screen-xl mx-auto main_section">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Why Choose {siteData?.websiteName} for Insurance
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


        {/* Conclusion & CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Health, life, or property—whatever you want to protect, {siteData?.websiteName} offers smart insurance plans to safeguard your future. Let&#39s build a shield for your peace of mind.
          </p>
          <Link href="/login" className="vl-btn1">
            Get Covered Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
