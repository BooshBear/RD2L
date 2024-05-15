import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient | null = null;

export const connectToDatabase = async () => {
    if (cachedClient) {
        console.log('👌 Using existing connection');
        return { client: cachedClient, db: cachedClient.db() };
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
        cachedClient = client;
        return { client, db: client.db() };
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
};
