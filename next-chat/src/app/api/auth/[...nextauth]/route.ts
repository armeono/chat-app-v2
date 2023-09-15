import { prisma } from "@/config/prismaClient";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { encode, decode } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

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
      console.log("session", session);
      console.log("user", user);

      return session;
    },
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {},
      authorize: async (credentials, req) => {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        const user = await prisma.user.findFirst({
          where: {
            username,
          },
        });

        let matchingPassword = false;

        if (!user) throw new Error("Invalid credentials");

        bcrypt.compare(password, user?.password!, (err, result) => {
          matchingPassword = result;
        });

        if (matchingPassword) {
          console.log("login success");
          return {
            id: String(user.id),
            name: user.username,
            session: { id: String(user.id), name: user.username },
          };
        } else {
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
