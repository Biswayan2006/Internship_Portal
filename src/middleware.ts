import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Define paths that don't require authentication
const publicPaths = ['/login', '/', '/about', '/contact'];

// Define paths that require admin role
const adminPaths = ['/admin', '/admin/internship-dashboard'];

export async function middleware(request: NextRequest) {
  // Get the path of the request
  const path = request.nextUrl.pathname;

  // Special case for internship listings which are public
  const isInternshipListing = path === '/internship' || 
                             (path.startsWith('/internship/') && !path.includes('/new'));

  // Get authentication status from NextAuth token
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });
  
  const isAuthenticated = !!token;
  const userRole = token?.role as string || null;

  // Handle public paths
  if (publicPaths.includes(path) || isInternshipListing) {
    // If user is authenticated and trying to access login page, redirect to internship page
    if (path === '/login' && isAuthenticated) {
      return NextResponse.redirect(new URL('/internship', request.url));
    }
    return NextResponse.next();
  }

  // Check if the user is authenticated for protected routes
  if (!isAuthenticated) {
    const from = request.nextUrl.pathname;
    return NextResponse.redirect(new URL(`/login?from=${encodeURIComponent(from)}`, request.url));
  }

  // If user is trying to access admin routes but is not an admin
  if (adminPaths.includes(path) && userRole !== 'admin') {
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