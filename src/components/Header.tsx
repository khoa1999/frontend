import React from 'react';
import Image from 'next/image'; // Import Image component

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between"> {/* Use flexbox */}
      <div className="flex items-center"> {/* Container for logo */}
        <Image
          src="/farmer.svg" // Corrected logo path
          alt="Application Logo"
          width={40} // Adjust size as needed
          height={40} // Adjust size as needed
          className="mr-4" // Add some margin to the right of the logo
        />
        {/* Optional: Add application title next to logo */}
        {/* <span className="text-xl font-bold">My App</span> */}
      </div>
      <nav> {/* Placeholder for navigation */}
        {/* Add navigation links here */}
      </nav>
    </header>
  );
};

export default Header;