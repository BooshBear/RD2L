import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongoDBConnect';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const database = (await clientPromise).db('test');
        const players = await database.collection('users').find({}).toArray();
        res.status(200).json(players);
    } catch (error) {
        console.error('Error fetching players:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export {handler as GET}