'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';

interface AuthContextType {
  isLoggedIn: boolean;
  userRole: string | null;
  username: string | null;
  login: (username: string, password: string, rememberMe: boolean) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Check for existing session on component mount
  useEffect(() => {
    const loggedIn = Cookies.get('isLoggedIn') === 'true';
    const role = Cookies.get('userRole');
    const user = Cookies.get('username');

    setIsLoggedIn(loggedIn);
    setUserRole(role || null);
    setUsername(user || null);
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string, rememberMe: boolean): Promise<boolean> => {
    setIsLoading(true);
    try {
      // In a real application, this would be an API call to your authentication endpoint
      // For now, we'll simulate authentication with hardcoded values
      let success = false;
      let role = '';
      
      if (username === 'admin@example.com' && password === 'admin123') {
        // Admin login
        role = 'admin';
        success = true;
      } else if (username === 'user@example.com' && password === 'user123') {
        // Regular user login
        role = 'user';
        success = true;
      }
      
      if (success) {
        setUserRole(role);
        setIsLoggedIn(true);
        setUsername(username);
        
        // Set cookies
        const expiryDays = rememberMe ? 30 : 1;
        Cookies.set('isLoggedIn', 'true', { expires: expiryDays });
        Cookies.set('userRole', role, { expires: expiryDays });
        Cookies.set('username', username, { expires: expiryDays });
        
        // Check if there's a callback URL to redirect to after login
        const callbackUrl = searchParams.get('callbackUrl');
        if (callbackUrl) {
          router.push(callbackUrl);
        } else {
          // Default redirects based on role
          router.push(role === 'admin' ? '/admin/internship-dashboard' : '/internship');
        }
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setUsername(null);
    
    // Remove cookies
    Cookies.remove('isLoggedIn');
    Cookies.remove('userRole');
    Cookies.remove('username');
    
    router.push('/login');
  };

  const value = {
    isLoggedIn,
    userRole,
    username,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}