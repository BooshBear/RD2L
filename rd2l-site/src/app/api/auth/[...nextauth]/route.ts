import NextAuth from 'next-auth';
import SteamProvider, { PROVIDER_ID } from 'next-auth-steam';
import { Adapter } from 'next-auth/adapters';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { connectToDatabase } from '../../../../lib/mongoDBConnect';
import { NextRequest } from 'next/server';

interface RouteHandlerContext {
  params: { nextauth: string[] }
}

async function handler(req: NextRequest, context: RouteHandlerContext) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await NextAuth(req, context, {
      providers: [
        SteamProvider(req, {
          clientSecret: process.env.STEAM_SECRET!,
          callbackUrl: 'http://localhost:3000/api/auth/callback'
        })
      ],
      callbacks: {
        async jwt({ token, account, profile }) {
          if (account?.provider === PROVIDER_ID) {
            console.log(token);
            token.steam = profile;
          }
          return token;
        },
        async session({ session, token }) {
          if (token && 'steam' in token) {
            // @ts-expect-error
            session.user.steam = token.steam;
          }
          return session;
        }
      },
      adapter: MongoDBAdapter(connectToDatabase()) as Adapter,
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    return { status: 500, message: 'Internal Server Error' };
  }
}

export { handler as GET, handler as POST };
