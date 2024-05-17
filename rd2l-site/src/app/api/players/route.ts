'use server'
import { NextRequest, NextResponse } from 'next/server'
import {connectToDatabase} from '@/lib/mongoDBConnect';

export async function GET(req: NextRequest, res: NextResponse) {
    if (req.method !== 'GET') {
        return NextResponse.json({ error: 'Not Allowed' }, { status: 405 })
    }
    try {
        const {db} = await connectToDatabase();
        const players = await db.collection('users').find({}).toArray();
        // console.log(players)
        return NextResponse.json(players, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

