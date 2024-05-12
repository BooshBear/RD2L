import NextAuth from 'next-auth';
import SteamProvider, {PROVIDER_ID} from 'next-auth-steam';
import { Adapter } from 'next-auth/adapters';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import {connectToDatabase} from '../../../../lib/mongoDBConnect';
import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, {
    providers: [
      SteamProvider(req, {
        clientSecret: process.env.STEAM_SECRET!,
        callbackUrl: 'http://localhost:3000/api/auth/callback'
      })
    ],
    callbacks: {
      jwt({ token, account, profile }) {
        if (account?.provider === PROVIDER_ID) {
          console.log(token)
          token.steam = profile
        }

        return token
      },
      session({ session, token }) {
        if (token && 'steam' in token) {
          // @ts-expect-error
            session.user.steam = token.steam;
        }
    
        return session;
    }
    },
    adapter: await MongoDBAdapter(connectToDatabase()) as Adapter,
  })
}

export {handler as GET, handler as POST}