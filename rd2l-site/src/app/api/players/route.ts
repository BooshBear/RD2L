'use server'
import clientPromise from '@/lib/mongoDBConnect';
import { NextRequest, NextResponse } from 'next/server'
export async function GET(req: NextRequest, res: NextResponse) {
    if (req.method !== 'GET') {
        return NextResponse.json({ error: 'Not Allowed' }, { status: 405 })
    }
    try {
        const client = await clientPromise;
        const db = client.db()
        const players = await db.collection('users').find({}).toArray();
        // console.log(players)
        return NextResponse.json(players, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

