import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

// Define admin emails that should have admin role
const ADMIN_EMAILS = [
  "admin@example.com",
  // Add other admin emails here
];

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is a simplified example - in a real app, you would validate against a database
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        // For demo purposes, we'll accept a fixed test account
        // In a real app, you would check against your database
        if (credentials.email === "user@example.com" && credentials.password === "password") {
          return {
            id: "1",
            name: "Test User",
            email: credentials.email,
            role: "user"
          };
        } else if (credentials.email === "admin@example.com" && credentials.password === "password") {
          return {
            id: "2",
            name: "Admin User",
            email: credentials.email,
            role: "admin"
          };
        }
        
        // Return null if user data could not be retrieved
        return null;
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add role to the token when user first signs in
      if (user) {
        // Check if user's email is in the admin list
        token.role = ADMIN_EMAILS.includes(token.email as string) ? "admin" : "user";
      }
      return token;
    },
    async session({ session, token }) {
      // Add role to the session
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };