// This file is used to redirect users based on their authentication status.
// app/page.tsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const runtime = 'nodejs';      // guarantees full cookie support on Vercel

export default async function Index() {
  const isLoggedIn = !!(await cookies().get('sessionToken'));

  // Instantly send the user where they belong
  redirect(isLoggedIn ? '/dashboard' : '/auth/login');
}