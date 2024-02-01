import NextAuth from "next-auth/next";
import RedditProvider from "next-auth/providers/reddit"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        RedditProvider({
            clientId: process.env.REDDIT_CLIENT_ID as string,
            clientSecret: process.env.REDDIT_CLIENT_SECRET as string,
            authorization: {
              params: {
                duration: "permanent",
              },
            },
          }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          })
    ],
    secret: process.env.NEXTAUTH_SECRET as string,
})

export {handler as GET, handler as POST}