"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";
import { Bars3Icon, XMarkIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/contexts/AuthContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Internships", href: "/internship" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const { isLoggedIn, userRole, username, logout } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-sm border-b transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-neutral-950/80 border-neutral-200 dark:border-neutral-800 shadow-sm' : 'bg-white/50 dark:bg-neutral-950/50 border-transparent'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image 
              src={resolvedTheme === 'dark' ? "/iic-logo-dark.svg" : "/iic-logo-light.svg"} 
              alt="InternsOnBoard Logo" 
              width={32}
              height={32}
              priority 
              className="object-contain" 
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white font-heading ml-2">InternsOnBoard</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 text-lg font-bold tracking-wide transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              {userRole === 'admin' && (
                <Link 
                  href="/admin/internship-dashboard" 
                  className="hidden md:block text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  Admin Dashboard
                </Link>
              )}
              <div className="hidden md:flex items-center space-x-2">
                <UserCircleIcon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {username || 'User'}
                </span>
              </div>
              <button
                onClick={logout}
                className="hidden md:block text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              href="/login" 
              className="hidden md:block text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
            >
              Login
            </Link>
          )}
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-lg font-bold tracking-wide text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {isLoggedIn ? (
              <>
                {userRole === 'admin' && (
                  <Link
                    href="/admin/internship-dashboard"
                    className="block py-2 text-base font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                <div className="flex items-center py-2">
                  <UserCircleIcon className="h-5 w-5 mr-2 text-neutral-700 dark:text-neutral-300" />
                  <span className="text-base font-medium text-neutral-700 dark:text-neutral-300">
                    {username || 'User'}
                  </span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-base font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="block py-2 text-base font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}