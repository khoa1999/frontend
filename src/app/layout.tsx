import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Assuming fonts are not the immediate focus
import "./globals.css";
import Header from "@/components/Header"; // Importing the Header component

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "Farmer Service", // More specific title
  description: "Login to the Farmer Service application.", // More specific description
  viewport: {
    width: 'device-width',
    initialScale: 1,
    // maximumScale: 1, // Optional: uncomment if you want to prevent users from zooming
  },
};
/*
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* The Header component will be rendered at the top of every page */}
        {children}
      </body>
    </html>
  );
}
