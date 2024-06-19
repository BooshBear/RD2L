import { connectToDatabase } from '../../../../lib/mongoDBConnect'; // Adjust the import path as needed
// app/players/[name]/page.tsx
interface Player {
    _id: string;
    name: string;
    // Add other properties as needed
}

interface PlayerPageProps {
    params: {
        name: string;
    };
}

const PlayerPage = async ({ params }: PlayerPageProps) => {
    const { name } = params;

    const client = connectToDatabase();
    const db = (await client).db()
    const player = await db.collection('users').findOne({ name });

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
            <p>Your very own personal page where I will put your dotabuff & opendota data at. Mabye even an AI description of you.</p>
            {/* Render other player information here */}
        </main>
    );
};

export default PlayerPage;
