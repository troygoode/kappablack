import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async jwt({ token, profile }) {
      if (profile?.sub?.length) {
        token.sub = profile.sub;
      }
      token.picture = profile?.picture;
      return token;
    },
    async session({ session, token }) {
      if (token.sub) {
        session.userId = token.sub;
      }
      session.user.image = token.picture;
      session.user.id = session.userId;
      return session;
    },

    // async signIn({ profile }) {
    //   return !!profile?.email_verified;
    // },
  },

  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },

      // profile: async (profile) => {
      //   return {
      //     ...profile,

      //     // https://github.com/nextauthjs/next-auth/issues/12808
      //     id: profile.sub, // If you don't do this, signing in, then signing out, then signing in again will NOT work
      //   };
      // },
    }),
  ],
});
