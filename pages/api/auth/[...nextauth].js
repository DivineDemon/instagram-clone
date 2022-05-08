import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.JWT_SECRET,

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },

  // Basic Login Page By NextAuth
  // theme: {
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png",
  //   brandColor: "#F13287",
  //   colorSchema: "auto",
  // },
});
