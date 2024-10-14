import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null
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
          }
        )

        user = await res.json()

        if (!res.ok) {
          throw new Error(user)
        }

        return user
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.user = user.data
      }
      return token
    },
    session({ session, token }) {
      session.user = token.user
      return session
    },
  },
  pages: {
    signIn: "/signin",
  },
})
