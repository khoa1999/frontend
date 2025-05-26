"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function PasswordRecoveryPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    if (!email) {
      setMessage("Please enter your email address.");
      setIsLoading(false);
      return;
    }

    // TODO: Implement actual password recovery logic here (e.g., API call)
    console.log("Password recovery requested for:", email);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example:
    // try {
    //   // const response = await api.sendRecoveryEmail(email);
    //   setMessage("If an account with that email exists, a password recovery link has been sent.");
    //   setEmail(""); // Optionally clear the email field
    // } catch (error) {
    //   setMessage("An error occurred. Please try again or contact support.");
    // }

    setMessage("If an account with that email exists, a password recovery link has been sent. Please check your inbox (and spam folder).");
    setIsLoading(false);
    // setEmail(""); // Consider if you want to clear the email after successful submission
  };

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-white">Forgot Your Password?</h2>
        <p className="text-gray-200 mt-2 text-lg">
          No problem! Enter your email address below and we&apos;ll send you a link to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6">
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-white text-xl font-semibold mb-2 text-left"
          >
            Email Address:
          </label>
          <input
            id="email"
            type="email"
            className="rounded-full px-6 py-2.5 bg-gray-200 focus:outline-none text-lg w-full text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            disabled={isLoading}
          />
        </div>

        {message && (
          <div className={`w-full p-3 rounded-md text-center text-base ${message.includes("Error") || message.includes("Please enter") ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-3 px-12 rounded-full transition w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed mt-2"
        >
          {isLoading ? "Sending..." : "Send Recovery Link"}
        </button>
      </form>

      <div className="mt-8 text-center">
        <Link href="/auth/login" className="text-lg text-white hover:text-gray-300 hover:underline">
          &larr; Back to Login
        </Link>
      </div>
    </>
  );
}