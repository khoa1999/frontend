"use client"; // Required for useState
import Image from "next/image";
import { useState, FormEvent } from "react"; // Added FormEvent

export default function Home() {
  const [username, setUsername] = useState(""); // Now used
  const [password, setPassword] = useState(""); // Now used
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Example: Can be added back when login logic is implemented
  // const [errorMessage, setErrorMessage] = useState(""); // Example: Can be added back for error handling
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // New state for "Remember me"
  // const [forgotPasswordEmail, setForgotPasswordEmail] = useState(""); // This state is not used if the element is a checkbox
  //const [requestForgotPassword, setRequestForgotPassword] = useState(false); // New state for the "Forgot password?" checkbox

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    // TODO: Implement actual login logic here
    console.log("Login attempt with:", { username, password, rememberMe });
    // Example: setErrorMessage("Invalid credentials"); setIsLoggedIn(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#bb2929] [scroll-padding-bottom:40vh] py-8"> {/* Added py-8 for overall page padding */}
      <div className="flex flex-col items-center w-full max-w-3xl p-6 md:p-10 rounded-xl shadow-lg"> {/* Adjusted padding for responsiveness */}
        {/* Firefighter image */}
        <Image
          src="/firefighter.svg" // Path to your image
          alt="Firefighter icon"  // Slightly more descriptive alt text
          width={128}             // Largest width the image will render at (for lg screens, 8rem * 16px/rem)
          height={128}            // Largest height the image will render at (for lg screens, 8rem * 16px/rem)
          className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-6" // Responsive classes
        />
        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          First&nbsp; Responder Service
        </h1>
        {/* Login form */}
        <form onSubmit={handleLogin} className="w-full flex flex-col items-center gap-4"> {/* Reduced gap from gap-6 to gap-4 */}
          {/* Username row */}
          <div className="flex flex-col md:flex-row w-full items-center md:items-start"> {/* Removed mb-2, form gap will handle spacing */}
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Remember me / Forgot password row */}
          {/* Adjusted for compactness and centering: w-full within max-w-sm allows justify-between to work, form's items-center centers this block */}
          <div className="flex w-full max-w-md justify-between items-center text-base px-1 md:max-w-lg"> {/* Increased text-sm to text-base, max-w-sm to max-w-md, md:max-w-md to md:max-w-lg */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400 focus:ring-offset-0" // Increased checkbox size h-4 w-4 to h-5 w-5
              />
              <label htmlFor="remember-me" className="ml-2 text-white select-none">
                Remember me
              </label>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className="text-white hover:text-gray-300 hover:underline whitespace-nowrap">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Language Selector Row */}
          <div className="w-full flex justify-center items-center text-sm pt-1"> {/* Added pt-1 for a bit more space from the row above */}
            <button type="button" className="flex items-center text-white cursor-pointer hover:text-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#bb2929]">
              <span role="img" aria-label="US flag" className="mr-1.5 text-lg">🇺🇸</span>
              <span>EN</span>
            </button>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-3xl py-3.5 px-20 rounded-full transition w-full md:w-auto" // Increased text-2xl to text-3xl, py-3 to py-3.5, px-16 to px-20
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
