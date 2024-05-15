import { MongoClient } from "mongodb";

let cachedClientPromise: Promise<MongoClient> | null = null;

export const connectToDatabase = async () => {
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

export const updateDB = async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('Missing environment variable: "MONGODB_URI"');
    }
    const options = {};

    const client = new MongoClient(uri, options);
    if (cachedClientPromise) {
        console.log('👌 Using existing connection');
        client.close()
    }

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