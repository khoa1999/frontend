"use client"; // Required for useState
import { useState, FormEvent } from "react"; // Added FormEvent
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState(""); // Now used
  const [password, setPassword] = useState(""); // Now used
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Example: Can be added back when login logic is implemented
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // New state for "Remember me"
  // const [forgotPasswordEmail, setForgotPasswordEmail] = useState(""); // This state is not used if the element is a checkbox
  //const [requestForgotPassword, setRequestForgotPassword] = useState(false); // New state for the "Forgot password?" checkbox

  // State for language selector
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const languages = [
    { code: "EN", name: "English", flag: "🇺🇸" }, // English
    { code: "DE", name: "Deutsch", flag: "🇩🇪" }, // German
    { code: "VI", name: "Tiếng Việt", flag: "🇻🇳" }, // Vietnamese
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setIsLangMenuOpen(false);
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    setErrorMessage(""); // Clear previous errors
    // TODO: Implement actual login logic here
    console.log("Login attempt with:", { username, password, rememberMe });
    // Example: Simulate an error
    if (username !== "admin" || password !== "password") {
      setErrorMessage("Invalid username or password. Please try again.");
    }
    // Example: setErrorMessage("Invalid credentials"); setIsLoggedIn(true);
  };

  return (
    <>
      {/* Login form */}
      <form onSubmit={handleLogin} className="w-full flex flex-col items-center gap-4 mt-8"> {/* Added mt-8 for spacing from title in layout */}
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
            className="rounded-full px-6 py-2.5 bg-gray-200 focus:outline-none text-lg w-full md:flex-1 text-black"
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
              className="rounded-full pl-6 pr-16 py-2.5 bg-gray-200 focus:outline-none text-lg w-full text-black"
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
        <div className="flex flex-col sm:flex-row w-full max-w-md sm:justify-between items-center text-base px-1 md:max-w-lg gap-2 sm:gap-0"> {/* Stacks vertically by default, row on sm screens. Adds gap when stacked. */}
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-6 w-6 text-blue-500 border-gray-300 rounded focus:ring-blue-400 focus:ring-offset-0" // Increased checkbox size h-4 w-4 to h-5 w-5
            />
            <label htmlFor="remember-me" className="ml-2.5 text-white select-none text-lg"> {/* Increased text size */}
              Remember me
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/auth/recovery" className="text-white hover:text-gray-300 hover:underline whitespace-nowrap text-lg"> {/* Increased text size */}
              Forgot password?
            </Link>
          </div>
        </div>

        {/* Language Selector Row */}
        <div className="w-full flex justify-center items-center text-sm pt-1">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center text-white cursor-pointer hover:text-gray-300 p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#bb2929]"
              aria-haspopup="true"
              aria-expanded={isLangMenuOpen}
            >
              <span role="img" aria-label={`${selectedLanguage.name} flag`} className="mr-1.5 text-xl">{selectedLanguage.flag}</span> {/* Increased flag size */}
              <span>{selectedLanguage.code}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-4 h-4 ml-1 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {isLangMenuOpen && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max min-w-[120px] bg-white rounded-md shadow-xl p-1 z-10 border border-gray-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang)}
                    className="w-full flex items-center px-3 py-1.5 text-left text-gray-700 hover:bg-gray-100 rounded-md text-sm"
                  >
                    <span role="img" aria-label={`${lang.name} flag`} className="mr-2 text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Error Message Display */}
        {errorMessage && (
          <div className="w-full max-w-md md:max-w-lg p-3 my-2 rounded-md text-center text-base bg-red-100 text-red-700">
            {errorMessage}
          </div>
        )}

        {/* Login button */}
        <button // Changed from custom Button to standard button for clarity if Button component is not defined here
          type="submit"
          onClick={() => { setErrorMessage(""); }} // Error is cleared on new submit attempt in handleLogin
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-3xl py-3 px-16 rounded-full transition w-full md:w-auto" // Increased text-2xl to text-3xl, py-3 to py-3.5, px-16 to px-20
        >
          Login
        </button>
      </form>
    </>
  );
}
