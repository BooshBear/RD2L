import SteamProvider, { PROVIDER_ID } from 'next-auth-steam'

import type { AuthOptions } from 'next-auth'
import type { NextRequest } from 'next/server'
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import {connectToDatabase} from '@/lib/mongoDBConnect';
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
        async signIn({ user }) {
          try {
            const client = await connectToDatabase();
            const db = client.db();
            const existingUser = await db.collection('users').findOne({ userId: user.id });
            if (existingUser) {
              await db.collection('users').updateOne(
                { userId: user.id },
                { $set: { lastLogin: new Date() } }
              );
            } else {
              await db.collection('users').insertOne({
                userId: user.id,
                // Other user data fields
                createdAt: new Date(),
                lastLogin: new Date()
              });
            }
            return true;
          } catch (error) {
            console.error('Error updating database:', error);
            return false;
          }
        },
      },
    adapter: MongoDBAdapter(connectToDatabase()) as Adapter,
  }
}