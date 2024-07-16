// lib/playerUtils.ts
import { connectToDatabase } from './mongoDBConnect';

export const fetchPlayerData = async (name: string) => {
    const decodedName = decodeURIComponent(name);
    const client = await connectToDatabase();
    const db = client.db();
    const player = await db.collection('users').findOne({ name: decodedName });
    return player;
}