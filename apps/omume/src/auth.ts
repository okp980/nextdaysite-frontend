import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginResponse } from "./app/util/types/user";

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT extends LoginResponse {}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              identifier: credentials?.email,
              password: credentials?.password,
            }),
          },
        );

        const user = await res.json();
        if (!res.ok || !user) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.user = user.user;
        token.token = user.token;
        token.isFirstLogin = user.isFirstLogin;
      }
      return token;
    },
    session({ session, token }: { session: any; token: JWT }) {
      session.user = token.user;
      session.token = token.token;
      session.isFirstLogin = token.isFirstLogin;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
