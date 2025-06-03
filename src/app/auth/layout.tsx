import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // You can set specific metadata for auth pages here if needed
  // title: "Authentication - First Responder Service",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#32cd32] py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg space-y-8"> {/* Adjusted max-width and added space-y for consistent spacing */}
        <div>
          <div className="flex justify-center">
            <Image
              src="/farmer.svg"
              alt="Firefighter icon"
              width={192}
              height={192}
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" // Removed mb-4 as space-y on parent will handle it
            />
          </div>
          <h1 className="mt-6 text-center text-4xl font-bold tracking-tight text-white"> {/* Added mt-6 for spacing from logo, tracking-tight for aesthetics */}
            First&nbsp; Responder Service
          </h1>
        </div>
        {children} {/* This is where the content of login/page.tsx (the form) will be rendered */}
      </div>
    </div>
  );
}