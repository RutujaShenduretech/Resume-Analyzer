import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Resume Analyzer",
  description: "Resume Analyzer is an AI-powered tool that helps you analyze and improve your resume. Get insights and suggestions to make your resume stand out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
>          <body className={` antialiased`}>

<ClerkProvider>
  <Navbar />
  {children}

  <Footer />
</ClerkProvider>      </body>
    </html>
  );
}
