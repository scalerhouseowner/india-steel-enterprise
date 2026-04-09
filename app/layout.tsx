import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import MobileCTABar from "@/components/layout/MobileCTABar";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    template: "%s | India Steel Enterprise",
    default: "India Steel Enterprise | Display Racks Manufacturer Kanpur",
  },
  description: "Manufacturer and supplier of display racks, supermarket display racks, and storage solutions in Kanpur, Uttar Pradesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans min-h-screen flex flex-col pt-16 lg:pt-20`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <MobileCTABar />
      </body>
    </html>
  );
}
