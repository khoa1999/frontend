import Image from "next/image";
import type { Metadata } from "next";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
  title: "Authentication - Farmer Service",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const carouselImages = [
    { src: "/carousel/image1.jpg", alt: "Slide 1" },
    { src: "/carousel/image2.jpg", alt: "Slide 2" },
    { src: "/carousel/image3.jpg", alt: "Slide 3" },
  ];
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left side: Image Carousel (full height, visible on medium screens and up) */}
      <div className="hidden md:block">
        <ImageCarousel images={carouselImages} className="hidden md:block"/>
      </div>

      {/* Right side: Auth Form and content */}
      <div className="flex flex-col items-center justify-center bg-lime-500/20 p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-lg space-y-8 rounded-2xl bg-green-600 p-8 shadow-2xl sm:p-12">
          <div>
            <div className="flex justify-center">
              <Image
                src="/farmer.svg"
                alt="Farmer icon"
                width={128}
                height={128}
                className="w-24 h-24"
              />
            </div>
            <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Farmer Service
            </h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}