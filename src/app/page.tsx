// This file is used to redirect users based on their authentication status.
// app/page.tsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const runtime = 'nodejs';

export default async function Index() {
  const cookieStore = await cookies();
  const isLoggedIn = !!cookieStore.get('sessionToken');

  redirect(isLoggedIn ? '/dashboard' : '/auth/login');
}