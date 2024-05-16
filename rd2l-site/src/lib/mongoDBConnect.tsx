import { MongoClient, Db } from 'mongodb';

export const connectToDatabase = async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error('Missing environment variable: "MONGODB_URI"');
    }

    const options = {};

    const client = new MongoClient(uri, options);

    try {
        await client.connect();
        const db = client.db();
        return { client, db };
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
};