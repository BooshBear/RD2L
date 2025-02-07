// lib/divisionUtils.ts
import { connectToDatabase } from './mongoDBConnect';

export const fetchDivisionData = async () => {
    const client = await connectToDatabase();
    const db = client.db(); // Optionally: client.db('yourDatabaseName')
    const divisionCollection = db.collection('divisions');

    const divisions = await divisionCollection.find({}).toArray();
    // Add slug if missing
    return divisions
};
