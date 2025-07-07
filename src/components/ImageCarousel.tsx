"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselProps {
  images: { src: string; alt?: string }[];
  interval?: number;
  className?: string;
}

export default function ImageCarousel({
  images,
  interval = 5000,
  className = "",
}: CarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Don't start the timer if there's only one image (or none)
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Handle case where there are no images to display
  if (!images || images.length === 0) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gray-200 ${className}`}>
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className={`w-full h-full relative overflow-hidden bg-black ${className}`}>
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt ?? `Slide ${i + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}