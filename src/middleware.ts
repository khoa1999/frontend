// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Name of your authentication cookie
const AUTH_COOKIE_NAME = 'sessionToken';

// Paths that do NOT require authentication.
// For prefix matches (like directories), ensure they end with a slash.
const PUBLIC_PATHS = [
  '/',                   // Landing page (adjust as needed)
  '/auth/login',
  '/auth/recovery',      // Recovery page
  '/auth/logout',        // Logout page (page that might trigger API call)
  '/auth/register',
  '/favicon.ico',        // Favicon
  // Example of a public directory: '/public-docs/'
];

// Paths that authenticated users should be redirected away from (to the dashboard).
// These are typically public pages like login, register, or a root landing page that shows a login form.
const AUTH_SENSITIVE_PUBLIC_PATHS = ['/auth/login', '/auth/recovery', '/', '/auth/register'];


function isActuallyPublic(pathname: string): boolean {
  return PUBLIC_PATHS.some(publicPath => {
    // For paths ending with a slash (and not just '/'), treat them as prefixes.
    // The root '/' is a special case for exact match.
    if (publicPath === '/') {
      return pathname === '/';
    }
    if (publicPath.endsWith('/') && publicPath.length > 1) { // e.g. /docs/
      return pathname.startsWith(publicPath);
    }
    // Otherwise, require an exact match for files or specific routes
    return pathname === publicPath;
  });
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  const isPathPublic = isActuallyPublic(pathname);

  if (sessionToken) {
    // User is authenticated
    // If they are on a sensitive public page (like login), redirect to dashboard
    if (AUTH_SENSITIVE_PUBLIC_PATHS.includes(pathname)) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    // Otherwise, allow access (they are authenticated and not on a page they should be redirected from)
    return NextResponse.next();
  } else {
    // User is NOT authenticated
    // If the path is not public, redirect to login
    if (!isPathPublic) {
      const loginUrl = new URL('/auth/login', request.url);
      loginUrl.searchParams.set('redirectedFrom', pathname); // Pass original path
      return NextResponse.redirect(loginUrl);
    }
    // Else, user is not authenticated, but the path is public. Allow access.
    return NextResponse.next();
  }
}

// This matcher excludes static files, images, Next.js internals, and public assets
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|.*\\.svg|favicon.ico|images|api/auth/callback).*)',
  ],
};