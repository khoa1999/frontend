import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Assuming fonts are not the immediate focus
import "./globals.css";

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
  title: "First Responder Service", // More specific title
  description: "Login to the First Responder Service application.", // More specific description
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
        {children}
      </body>
    </html>
  );
}
