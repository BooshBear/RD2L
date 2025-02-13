import { MongoClient } from "mongodb";

export const dynamic = "force-dynamic"; // Ensures this runs dynamically in Next.js

declare global {
  var cachedMongoClient: MongoClient | null;
}

// Use globalThis to persist the connection across hot reloads
globalThis.cachedMongoClient = globalThis.cachedMongoClient || null;

export const connectToDatabase = async (): Promise<MongoClient> => {
  if (globalThis.cachedMongoClient) {
    console.log("👌 Using cached MongoDB connection");
    return globalThis.cachedMongoClient;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Missing environment variable: "MONGODB_URI"');
  }

  try {
    const client = new MongoClient(uri);
    globalThis.cachedMongoClient = client;
    console.log("🔥 New MongoDB Connection");
    return client;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};
