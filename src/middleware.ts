import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the path of the request
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath = path === '/login' || path === '/' || 
                      path === '/internship' || path.startsWith('/internship/') && !path.includes('/new');

  // Get authentication status from cookies
  const isAuthenticated = request.cookies.get('isLoggedIn')?.value === 'true';
  const userRole = request.cookies.get('userRole')?.value;

  // Redirect logic
  if (isPublicPath && isAuthenticated) {
    // If user is authenticated and trying to access login page, redirect to appropriate dashboard
    if (path === '/login') {
      return NextResponse.redirect(new URL(
        userRole === 'admin' ? '/admin/internship-dashboard' : '/internship',
        request.url
      ));
    }
  }

  // If user is not authenticated and trying to access protected route, redirect to login
  if (!isPublicPath && !isAuthenticated) {
    // Store the original URL to redirect back after login
    const url = new URL('/login', request.url);
    url.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  // If user is not an admin and trying to access admin routes, redirect to internship page
  if (path.startsWith('/admin') && userRole !== 'admin') {
    return NextResponse.redirect(new URL('/internship', request.url));
  }

  // If user is trying to access internship creation page but is not an admin
  if (path === '/internship/new' && userRole !== 'admin') {
    return NextResponse.redirect(new URL('/internship', request.url));
  }

  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\.svg).*)',
    '/admin/:path*',
    '/login',
    '/internship/new'
  ],
};