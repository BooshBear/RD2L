import { NextRequest, NextResponse } from 'next/server'
import {connectToDatabase} from '@/lib/mongoDBConnect';

export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest, res: NextResponse) {
    console.log("Received GET request to /api/divisions");
    try {
        const client = connectToDatabase();
        const db = (await client).db()
        const divisions = await db.collection('divisions').find({}).toArray();
        return NextResponse.json(divisions, { status: 200 });
    } catch (error) {
        console.error("Error fetching players:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
