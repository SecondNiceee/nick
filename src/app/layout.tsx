import type { Metadata } from "next";
import {  Raleway } from "next/font/google";
import "./globals.css";



const raleway = Raleway({
  variable : "--raleway",
  subsets : ['latin', 'cyrillic', 'latin-ext', 'cyrillic-ext']
})

export const metadata: Metadata = {
  title: "Nick portfolio",
  description: "This is my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} bg-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
