
  import { Button } from "@/components/ui/button";
import { getAboutus, getAboutusteams, getmissionvission } from "@/lib/functions";
import Image from "next/image";
  import Link from "next/link";
  import React from "react";

  
  export const metadata = {
    title: "About Us - Alpha 72 Wealth",
    description:
      "Learn more about Alpha 72 Wealth, your trusted financial partner in India.",
  };
  
  const AboutUsPage = async () => {
    const missionvission= await getmissionvission();
    const Aboutus=await getAboutus();
    const TeamsSection=await getAboutusteams()
    console.log(missionvission,Aboutus,TeamsSection)
    function createMarkup(item) {
    return { __html: item };
  }
    return (
      <div>
        <div>
          <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/light-banner.jpg')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            About Us
          </h1>
        </div>
      </div>
          <div className="container mx-auto px-4 lg:px-32 main_section">
            {/* Heading and Subheading */}
            
            
            
  
            {/* Introduction */}
            <div className="mb-8">
              <div
                      dangerouslySetInnerHTML={createMarkup(Aboutus[0]?.description)}
                      className="text-xl text-gray-700"
                    />
            </div>
  
            {/* Our Mission and Values */}

            <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                            <div className="lg:w-1/2">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 mb-4 text-justify">
                {missionvission.mission}
              </p>
                            </div>
                            <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 md:mt-0">
                                <Image src={Aboutus[0]?.image.url} alt="Bonds Investment" width={400} height={300} className="rounded-lg shadow-lg" />
                            </div>
                        </div>

                        <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                            <div className="">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-xl text-gray-700 mb-4 text-justify">
                {missionvission.vision}
              </p>
                            </div>
        
                        </div>
            <div className="mb-8">
              
  
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Values
              </h2>
              <div
                      dangerouslySetInnerHTML={createMarkup(missionvission?.values)}
                      className="text-xl text-gray-700"
                    />
            </div>
  
            {/* Why Choose Us */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-700">
                In a rapidly changing world, we remain steadfast in our dedication
                to helping you secure your financial future. Your dreams are our
                top priority, and your trust is the cornerstone of our service.
                Our personalized approach ensures that every financial solution is
                tailored to meet your unique needs, helping you move towards
                financial freedom with confidence.
              </p>
            </div>
  
           <div className="space-y-12">
      {TeamsSection.map((member, index) => (
        <div key={index} className="mb-8 flex flex-col items-center md:items-start p-6 rounded-lg">
          <div className="md:pl-8">
            <Image src={member.image.url} alt={member.name} width={300} height={300} className="" />
          </div>
          <div className="md:pl-8 mt-6 md:mt-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center md:text-left">{member.name}</h2>
            <h3 className="text-xl text-gray-600 text-center md:text-left">{member.designation}, Sanchaymitra Financial Service Pvt Ltd</h3>
            <div className="text-lg text-gray-700 mt-2 text-justify" dangerouslySetInnerHTML={{ __html: member.description }} />
          </div>
        </div>
      ))}
    </div>
            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
              <p className="text-xl text-gray-700 mb-4">
                We invite you to join us on this journey towards your financial
                success. Our team is always here to assist you with expert advice,
                innovative solutions, and unmatched dedication.
              </p>
              <Link href="/contact-us" className="text-white mt-4 cursor-pointer">
                <button className="vl-btn1">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUsPage;