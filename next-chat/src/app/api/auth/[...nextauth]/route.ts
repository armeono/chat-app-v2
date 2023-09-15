import { prisma } from "@/config/prismaClient";
import NextAuth from "next-auth/next";
import { encode, decode } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { getSession } from "next-auth/react";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    encode,
    decode,
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session({ session, user }: any) {
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.user = user;
      }

      return token;
    },
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {},
      authorize: async (credentials, req): Promise<any> => {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        const user = await prisma.user.findFirst({
          where: {
            username,
          },
        });

        if (!user) throw new Error("Invalid credentials");

        const passwordMatches = await bcrypt.compare(password, user?.password!);

        if (!passwordMatches) {
          return null;
        } else {
          return {
            id: String(user.id),
            name: user.username,
          };
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
