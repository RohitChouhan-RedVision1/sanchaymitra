import { Poppins,Playfair_Display,Noto_Serif,Roboto } from "next/font/google";
import "./globals.css";
import RenewalPopup from "@/components/renewalPopup";
import { SubscriptionProvider } from "@/context/SubscriptionContext";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
  variable: "--font-poppins", // define your custom CSS variable name here
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif", // optional custom CSS variable
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"], // Add weights as needed
  variable: "--font-roboto", // optional custom CSS variable name
});

export const dynamic = "force-dynamic";
export const metadata = {
  title: {
    default: "Sanchaymitra Financial Service Pvt Ltd",
    template: "%s - Sanchaymitra Financial Service Pvt Ltd",
  },
  description:
    "Welcome to Sanchaymitra Financial Service Pvt Ltd, your trusted financial companion in India. We are in mutual funds distribution services since eighteen years, we understand that your financial journey is more than just numbers; it's a story of dreams, aspirations, and the legacy you want to leave behind. At Sanchaymitra Financial Service Pvt Ltd, we are driven by the belief that everyone deserves a secure and prosperous future.",
  twitter: {
    card: "summary_large_image",
  },
  author: "Sanchaymitra Financial Service Pvt Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} ${notoSerif.variable} ${roboto.variable} `}>
        <SubscriptionProvider>
          {/* <RenewalPopup /> */}
          <div className="bg-white">
            {children}
          </div>
        </SubscriptionProvider>
      </body>
    </html>
  );
}
