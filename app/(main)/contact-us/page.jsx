import ContactForm from "@/components/ContactUs/contactform";
import InnerBanner from "@/components/landing/innerbanner/page";
import { getSiteData } from "@/lib/functions";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
export default async function ContactUs() {
  const sitedata = await getSiteData();

  return (
    <div>
      <InnerBanner title={"Contact us"}/>
    <div className="w-full max-w-7xl mx-auto px-4 main_section">
      {/* Contact Info Cards */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-[var(--rv-primary)] text-[var(--rv-white)] shadow-md p-4 min-h-[70px] flex flex-col gap-6 ">
              <div className="flex flex-col items-center">
                <Phone size={36} className="mt-4" />
                <h3 className="text-2xl font-medium mt-2">Call Us</h3>
              </div>
              <p className="text-xl ">
                <Link href={`tel:${sitedata.mobile}`}>{sitedata.mobile}</Link>
              </p>
            </div>
            <div className="bg-[var(--rv-primary)] text-[var(--rv-white)] shadow-md p-4 min-h-[70px] flex flex-col gap-6 ">
              <div className="flex flex-col items-center">
                <Mail size={36} className="mt-4" />
                <h3 className="text-2xl font-medium mt-2">Mail Us</h3>
              </div>
              <p className="text-xl break-all">
                <Link href={`mailto:${sitedata.email}`}>{sitedata.email}</Link>
              </p>
            </div>
            <div className="bg-[var(--rv-primary)] text-[var(--rv-white)] shadow-md p-4 min-h-[70px] flex flex-col gap-6 justify-center items-center">
              <div className="flex flex-col items-center">
                <MapPin size={36} className="mt-4" />
                <h3 className="text-2xl font-medium mt-2">Reach Us</h3>
              </div>
            <p className="text-xl break-words whitespace-pre-line">
  <Link href={sitedata.mapurl}>
    {sitedata.address?.replace('Shop No. 122 ', 'Shop No. 122\n')}
  </Link>
</p>

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
