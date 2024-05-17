import SteamProvider, { PROVIDER_ID } from 'next-auth-steam'

import type { AuthOptions } from 'next-auth'
import type { NextRequest } from 'next/server'
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '@/lib/mongoDBConnect';
import { Adapter } from 'next-auth/adapters';

export function getAuthOptions(req?: NextRequest): AuthOptions {
    const callbackUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://rd2l.vercel.app/api/auth/callback'
        : 'http://localhost:3000/api/auth/callback';
  return {
    providers: req
      ? [
          SteamProvider(req, {
            clientSecret: process.env.STEAM_API_SECRET!,
            callbackUrl
          })
        ]
      : [],
    callbacks: {
      jwt({ token, account, profile }) {
        if (account?.provider === PROVIDER_ID) {
          token.steam = profile
        }
        return token
      },
      session({ session, token }) {
        if (token && 'steam' in token) {
          // @ts-expect-error
          session.user.steam = token.steam
        }
        return session
      }
    },
    adapter: MongoDBAdapter(clientPromise) as Adapter,
    secret: process.env.NEXTAUTH_SECRET,
  }
}