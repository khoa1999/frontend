"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();
  const [message, setMessage] = useState('Logging out...');
  const [isLoggingOut, setIsLoggingOut] = useState(true);

  useEffect(() => {
    const performLogout = async () => {
      setIsLoggingOut(true);
      setMessage('Logging out...');
      try {
        // Assume your API endpoint for logout is /api/auth/logout
        // This endpoint should handle clearing HttpOnly cookies on the server
        const response = await fetch('/api/auth/logout', { method: 'POST' });

        if (!response.ok) {
          // Try to parse error from backend, otherwise use a generic message
          let errorMsg = 'Logout failed. Please try again.';
          try {
            const errorData = await response.json();
            errorMsg = errorData.message || errorMsg;
          } catch { /* Ignore parsing error, use default */ }
          throw new Error(errorMsg);
        }
        setMessage('You have been logged out successfully.');
      } catch (error) {
        console.error('Logout error:', error);
        setMessage(error instanceof Error ? error.message : 'An error occurred during logout.');
      } finally {
        setIsLoggingOut(false);
        // Redirect to login page after a short delay to allow user to see the message
        setTimeout(() => {
          router.push('/auth/login');
        }, 1500);
      }
    };

    performLogout();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center text-center h-full py-8">
      {isLoggingOut && (
        <div className="mb-4 w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      )}
      <p className="text-xl text-white">{message}</p>
    </div>
  );
}