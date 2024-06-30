// pages/api/update-players.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongoDBConnect';

async function handler(req: NextRequest) {
    try {
        const client = await connectToDatabase();
        const db = client.db();

        // Fetch the last update time
        const lastUpdate = await db.collection('updateMeta').findOne({ name: 'lastUpdate' });

        // Check if 24 hours have passed since the last update
        const now = new Date();
        if (lastUpdate && now.getTime() - new Date(lastUpdate.time).getTime() < 24 * 60 * 60 * 1000) {
            return NextResponse.json({ message: 'Less than 24 hours since the last update. Skipping update.' });
        }

        // Fetch up to 200 players that need an update
        const players = await db.collection('users').find({ needsUpdate: true }).limit(200).toArray();

        for (const player of players) {
            const updatedRank = await fetchPlayerRank(player._id);
            await db.collection('users').updateOne(
                { _id: player._id },
                { $set: { rank: updatedRank, lastUpdated: new Date(), needsUpdate: false } }
            );
        }

        // Update the last update timestamp
        await db.collection('updateMeta').updateOne(
            { name: 'lastUpdate' },
            { $set: { time: new Date() } },
            { upsert: true }
        );

        return NextResponse.json({ message: 'Players updated successfully' });
    } catch (error) {
        console.error('Error updating players:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
};

const fetchPlayerRank = async (playerId: any) => {
    // Your logic to fetch the updated player rank from an external API
    // Simulating API call with a delay

    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate a delay for API call
    return `${steamID64ToSteamID3('76561198167257216')}`;
};

function steamID64ToSteamID3(steamID64: string): string {
    // Subtract the base SteamID64 value
    const steamBase = BigInt("76561197960265728");
    const steamID64BigInt = BigInt(steamID64);

    if (steamID64BigInt < steamBase) {
        throw new Error("Invalid SteamID64");
    }

    const accountID = steamID64BigInt - steamBase;
    return `[U:1:${accountID.toString()}]`;
}

export { handler as GET, handler as POST };
