import { MongoClient, Db } from 'mongodb';

let cachedClientPromise: Promise<MongoClient> | null = null;
let cachedDb: Db | null = null;


export const connectToDatabase = async () => {
    if (cachedClientPromise && cachedDb) {
        console.log('👌 Using existing connection');
        return {client: cachedClientPromise, db: cachedDb!};
    }
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error('Missing environment variable: "MONGODB_URI"');
    }

    const options = {};

    const client = new MongoClient(uri, options);

    cachedClientPromise = client.connect()
        .then(client => {
            console.log('🔥 New DB Connection');
            cachedClientPromise = Promise.resolve(client);
            cachedDb = client.db();
            return client;
        })
        .catch(error => {
            cachedClientPromise = null;
            console.error('MongoDB connection error:', error);
            throw error;
        });

    return cachedClientPromise.then(client => ({ client, db: client.db() }));
};

// Function to invalidate the cache
export const invalidateCache = () => {
    cachedClientPromise = null;
    cachedDb = null;
};