import React from "react";

//import Signin from "@/components/auth/Signin";

import { redirect } from 'next/navigation';
import Signin from "@/components/auth/Signin";
import { getSiteData } from "@/lib/functions";
 
// export default function SignIn() {
//   redirect('https://portfolio.alpha72wealth.com'); // replace with your new domain
// }

const SignIn = async () => {
  const siteData= await getSiteData()
  return (
    <>
    <div>
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/light-banner.jpg')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Login
          </h1>
        </div>
      </div>
   
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
