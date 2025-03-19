import type { Metadata } from "next";
import { Manrope, Sacramento } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const sac = Sacramento({ weight: "400", subsets: ["latin"], variable: "--font-sacramento" });


export const metadata: Metadata = {
  title: "Lovepulse",
  description: "Helping you stay connected",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
       <main className={`${manrope.variable} ${sac.variable}  relative overflow-hidden`}>
           {children}
       </main>
      <Footer/>
      </body>
    </html>
  );
}
