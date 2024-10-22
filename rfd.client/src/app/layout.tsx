import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from 'next/script';
import "@/app/ui/assets/css/globals.css";
import SideNav from '@/app/ui/components/nav/sidenav';
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = localFont({
  src: "/ui/assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/ui/assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Family Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script src="https://kit.fontawesome.com/f7039a0123.js"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            < SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}