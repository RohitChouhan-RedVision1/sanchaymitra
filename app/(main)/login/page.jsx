import React from "react";

//import Signin from "@/components/auth/Signin";

import { redirect } from 'next/navigation';
import Signin from "@/components/auth/Signin";
import { getSiteData } from "@/lib/functions";
import InnerBanner from "@/components/landing/innerbanner/page";
 
// export default function SignIn() {
//   redirect('https://portfolio.alpha72wealth.com'); // replace with your new domain
// }

const SignIn = async () => {
  const siteData= await getSiteData()
  return (
    <>
    <div>
      <InnerBanner title={"Login"}/>
   
      {/* source:https://codepen.io/owaiswiz/pen/jOPvEPB */}
      <div className="min-h-[600px] bg-gray-100 text-gray-900 flex justify-center main_section">
        
        <div className="max-w-screen-xl m-0 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <Signin siteData={siteData} />
          <div className="flex-1 bg-indigo-100 text-center hidden md:flex " style={{
                backgroundImage:
                  'url("/LOGIN 9.jpg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover', // or 'contain' based on your needs
                  backgroundPosition: 'center' // Adjust as needed
              }}>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SignIn;
