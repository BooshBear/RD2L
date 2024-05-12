'user server'
import NextAuth from 'next-auth';
import SteamProvider, { PROVIDER_ID } from 'next-auth-steam';
import { Adapter } from 'next-auth/adapters';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { connectToDatabase } from '../../../../lib/mongoDBConnect';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    return NextAuth(req, res, {
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
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}


export { handler as GET, handler as POST };
