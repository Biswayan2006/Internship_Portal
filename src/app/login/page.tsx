'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();

  const handleGoogleLogin = async () => {
    setError('');
    
    try {
      await login('google');
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-purple-600 to-pink-500 p-4">
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract shapes and patterns - keeping existing code */}
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-400 opacity-20 blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-pink-400 opacity-20 blur-xl"></div>
        {/* ... existing decorative elements ... */}
      </div>
      
      <div className="relative flex flex-col md:flex-row bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl">
        {/* Left side - Welcome message - keeping existing code */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-pink-500 to-purple-600 p-8 text-white flex flex-col justify-center relative overflow-hidden">
          {/* ... existing left side content ... */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Welcome to<br />InternsOnBoard</h1>
          <p className="text-sm md:text-base opacity-80 mb-6 max-w-xs relative z-10">
            Where the Greatest opportunities are provided for your professional growth and career advancement.
          </p>
        </div>
        
        {/* Right side - Login form */}
        <div className="w-full md:w-1/2 p-8 bg-white dark:bg-neutral-800">
          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">LOG IN</h2>
          
          {error && (
            <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 text-sm rounded">
              {error}
            </div>
          )}
          
          <div className="space-y-6">
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
              Sign in with Google
            </button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-neutral-800 text-gray-500 dark:text-gray-400">or continue with email</span>
              </div>
            </div>
            
            {/* Email/password form for backward compatibility */}
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get('email') as string;
              const password = formData.get('password') as string;
              
              setError('');
              if (!email || !password) {
                setError('Please enter both email and password');
                return;
              }
              
              // Call the login function with credentials
              login('credentials', { email, password })
                .catch(err => {
                  setError('Invalid email or password');
                  console.error(err);
                });
            }}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Password
                  </label>
                  <a href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="••••••••"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors dark:bg-blue-700 dark:hover:bg-blue-800"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600 dark:text-gray-400">
                Don't have an account?{' '}
                <Link href="/register" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}