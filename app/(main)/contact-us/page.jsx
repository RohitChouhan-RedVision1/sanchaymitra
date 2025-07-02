import ContactForm from "@/components/ContactUs/contactform";
import { getSiteData } from "@/lib/functions";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
export default async function ContactUs() {
  const sitedata = await getSiteData();

  return (
    <div><div className="flex bg-center bg-no-repeat bg-cover bg-[url('/light-banner.jpg')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>
    <div className="w-full max-w-7xl mx-auto px-4 main_section">
      {/* Contact Info Cards */}
      <div className="flex flex-col  gap-4 overflow-hidden rounded-lg ">
        {/* Call Us */}
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center text-center">
          <div className="bg-[var(--rv-primary)] text-white p-10 rounded-2xl shadow-md w-full md:w-1/2 flex flex-col items-center justify-center min-h-[210px]">
            <Phone className="mb-2" size={24} />
            <h3 className="text-lg font-medium mb-2">Call Us</h3>
            <p className="text-sm"><Link href={`tel:${sitedata.mobile}`} >{sitedata.mobile}</Link></p>
          </div>

          <div className="bg-[var(--rv-primary)] text-white p-10 rounded-2xl shadow-md w-full md:w-1/2 flex flex-col items-center justify-center min-h-[210px]">
            <Mail className="mb-2" size={24} />
            <h3 className="text-lg font-medium mb-2">Mail Us</h3>
            <p className="text-sm break-all"><Link href={`mailto:${sitedata.email}`}  >{sitedata.email}</Link></p>
          </div>
          <div className="bg-[var(--rv-primary)] text-white p-10 rounded-2xl shadow-md w-full md:w-1/2 min-h-[210px] flex flex-col items-center justify-center">
            <Mail className="mb-2" size={24} />
            <h3 className="text-lg font-medium mb-2">Reach Us</h3>
            <p className="text-sm break-all"><Link href={`${sitedata.mapurl}`}  >{sitedata.address}</Link></p>
          </div>
        </div>
      </div>

      {/* Reach Us */}

      {/* Map and Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 main_section1">
        {/* Map */}
        <div className="w-full h-[500px] relative border border-gray-200 rounded">
          <Link href={sitedata.mapurl}>
          <iframe
            src={sitedata?.iframe}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            className="rounded"
          ></iframe></Link>
        </div>

        {/* Contact Form */}
        <div className="w-full">
          <ContactForm sitedata={sitedata} />
        </div>
      </div>
    </div>
    </div>
  );
}
