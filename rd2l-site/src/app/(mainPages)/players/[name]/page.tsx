import Link from "next/link"
import { connectToDatabase } from '../../../../lib/mongoDBConnect'; // Adjust the import path as needed
import { fetchPlayerData } from "@/lib/playerUtils";

export async function generateStaticParams() {
    const client = await connectToDatabase();
    const db = client.db();
    const players = await db.collection('users').find({}, { projection: { name: 1 } }).toArray();
    return players.map((player) => ({ name: encodeURIComponent(player.name) }));
}

export async function generateMetadata({ params }: { params: { name: string } }) {
    const player = await fetchPlayerData(params.name);

    if (!player) {
        return {
            title: 'Player not found',
        };
    }

    return {
        title: player.name,
        description: `Information about ${player.name}`,
    };
}

const PlayerPage = async ({ params }: any) => {
    const player = await fetchPlayerData(params.name);

    if (!player) {
        return (
            <div>
                <h1>Player not found</h1>
            </div>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-10 gap-2">
            <h1>{player.name}</h1>
            <p>Your very own personal page where I will put your dotabuff & opendota data at. Maybe even an AI description of you.</p>
            <Link href={player.dotabuff}>DotaBuff Link</Link>
            <Link href={player.opendota}>OpenDota Link</Link>
            {/* Render other player information here */}
        </main>
    );
};

export default PlayerPage;
