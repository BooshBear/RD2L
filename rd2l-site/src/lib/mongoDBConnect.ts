// src/lib/mongoDBConnect.ts
import { MongoClient } from 'mongodb';

let cachedClientPromise: Promise<MongoClient> | null = null;

export const connectToDatabase = async (): Promise<MongoClient> => {
  if (cachedClientPromise) {
    console.log('👌 Using existing connection');
    return cachedClientPromise;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Missing environment variable: "MONGODB_URI"');
  }
  const options = {};

  const client = new MongoClient(uri, options);

  try {
    await client.connect();
    console.log('🔥 New DB Connection');
    cachedClientPromise = Promise.resolve(client);
    return cachedClientPromise;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export const resetDatabaseConnection = (): void => {
  console.log('Resetting database connection');
  cachedClientPromise = null;
};