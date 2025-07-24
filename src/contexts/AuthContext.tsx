'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';

interface AuthContextType {
  isLoggedIn: boolean;
  userRole: string | null;
  username: string | null;
  login: (provider?: string, credentials?: Record<string, any>) => Promise<boolean>;
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
  const { data: session, status } = useSession();
  const router = useRouter();
  const isLoading = status === 'loading';
  const isLoggedIn = status === 'authenticated';
  
  // Extract user information from session
  const userRole = session?.user?.role || null;
  const username = session?.user?.email || null;

  const login = async (provider = 'google', credentials?: Record<string, any>): Promise<boolean> => {
    try {
      const options: any = { redirect: false };
      
      // Add credentials if provided
      if (credentials && provider === 'credentials') {
        options.email = credentials.email;
        options.password = credentials.password;
      }
      
      const result = await signIn(provider, options);
      
      if (result?.error) {
        console.error('Login error:', result.error);
        return false;
      }
      
      // NextAuth will handle the session
      // Redirect will be handled by middleware
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    signOut({ callbackUrl: '/login' });
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