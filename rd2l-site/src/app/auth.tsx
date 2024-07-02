import SteamProvider, { PROVIDER_ID } from 'next-auth-steam'
import type { AuthOptions } from 'next-auth'
import type { NextRequest } from 'next/server'
import {connectToDatabase} from '@/lib/mongoDBConnect';

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
      async signIn({ user, account, profile }) {
        const client = await connectToDatabase();
        const db = client.db();
        const SteamId3 = steamID64ToSteamID3(account?.providerAccountId)
  
        // Check if the user already exists
        const existingUser = await db.collection('users').findOne({ email: user.email });

        if (!existingUser) {
          // If user doesn't exist, create a new user
          await db.collection('accounts').insertOne({
            provider: account?.provider,
            type: account?.type,
            providerAccountId: account?.providerAccountId,
            id_token: account?.id_token,
            access_token: account?.access_token,
            steamId: account?.providerAccountId
          })
          await db.collection('users').insertOne({
            name: user.name,
            steamid: account?.providerAccountId,
            steamid3: SteamId3,
            dotabuff: `https://www.dotabuff.com/players/${SteamId3}`,
            opendota: `https://www.opendota.com/players/${SteamId3}`,
            email: user.email,
            image: user.image,
            needsUpdate: true,
            lastUpdated: new Date(),
            // Add any other initial fields
          });
        } else {
          // If user exists, you can update any necessary fields here
          await db.collection('users').updateOne(
            { email: user.email },
            {
              $set: {
                lastLogin: new Date(),
                // Update other fields as needed
              },
            }
          );
        }
  
        return true;
      },
      async session({ session, token, user }) {
        // You can customize the session object here if needed
        return session;
      },
    },
  }
}

function steamID64ToSteamID3(steamID64: any): string {
  // Subtract the base SteamID64 value
  const steamBase = BigInt("76561197960265728");
  const steamID64BigInt = BigInt(steamID64);

  if (steamID64BigInt < steamBase) {
      throw new Error("Invalid SteamID64");
  }

  const accountID = steamID64BigInt - steamBase;
  return `${accountID.toString()}`;
}