// app/(with-header)/layout.tsx
import Header from '@/components/Header';
//import { cookies } from 'next/headers';

//export const runtime = 'nodejs';          // full cookie support on Vercel

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Optional: only show header when a session cookie exists
  //const isLoggedIn = !!cookies().get('sessionToken');

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
