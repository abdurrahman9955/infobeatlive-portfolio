import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"],});

export const metadata: Metadata = { title: "Abdurrahman Sale Portfolio",
  description: `I’m Abdurrahman Sale, a backend and full-stack engineer, Over the past 6+ years, 
  I’ve worked across telecom, fintech, and enterprise software—delivering production-grade systems 
  used by millions of users and thousands of businesses.`,};


export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
       <head>
       </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
