// app/auth/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Auth • First Responder Service",
  description: "Sign in or recover your account.",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#bb2929]">
      {/* translucent glass-card */}
      <div className="w-full max-w-3xl mx-4 p-6 md:p-10 rounded-xl shadow-lg backdrop-blur-sm bg-black/20">
        {children}
      </div>
    </div>
  );
}