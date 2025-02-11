import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans, Bebas_Neue } from 'next/font/google'
import { ReactNode } from "react";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
  adjustFontFallback: false  // Add this line
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
  adjustFontFallback: false  // Add this line
});

export const metadata: Metadata = {
  title: "BookWise",
  description:
    "BookWise is a book borrowing university library management solution.",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        suppressHydrationWarning
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;