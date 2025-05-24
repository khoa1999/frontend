"use client"; // Required for useState
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword,setShowPassword] = useState(false);


  return (
    <div className="flex min-h-screen items-center justify-center bg-[#bb2929] [scroll-padding-bottom:40vh]">
      <div className="flex flex-col items-center w-full max-w-3xl p-10 rounded-xl shadow-lg">
        {/* Firefighter image */}
        <Image
          src="/firefighter.svg"
          alt="Firefighter"
          className="w-28 h-28 mb-6"
        />
        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          First&nbsp; Responder Service
        </h1>
        {/* Login form */}
        <form className="w-full flex flex-col items-center gap-6">
          {/* Username row */}
          <div className="flex flex-col md:flex-row w-full items-center md:items-start mb-2">
            <label
              htmlFor="username"
              className="text-white text-2xl font-semibold mb-2 md:mb-0 md:mr-4 w-full md:w-40 text-left"
            >
              Username:
            </label>
            <input
              id="username"
              type="text"
              className="rounded-full px-6 py-3 bg-gray-200 focus:outline-none text-lg w-full md:flex-1"
              autoComplete="username"
            />
          </div>
          {/* Password row */}
          <div className="flex flex-col md:flex-row w-full items-center md:items-start">
            <label
              htmlFor="password"
              className="text-white text-2xl font-semibold mb-2 md:mb-0 md:mr-4 w-full md:w-40 text-left"
            >
              Password:
            </label>
            {/* Wrapper for input and toggle button to manage relative positioning and flex behavior */}
            <div className="relative w-full md:flex-1">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                // Added pl-6 and pr-16 for padding, pr-16 makes space for the button
                className="rounded-full pl-6 pr-16 py-3 bg-gray-200 focus:outline-none text-lg w-full"
                autoComplete="current-password"
              />
              <button
                type="button" // Prevents form submission
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"} // For accessibility
              >
                {showPassword ? (
                  // Eye-slash icon (password visible, click to hide)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  // Eye icon (password hidden, click to show)
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Login button */}
          <button
            type="submit"
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-3 px-16 rounded-full transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
