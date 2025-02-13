import Link from "next/link";
import { connectToDatabase } from "../../../../lib/mongoDBConnect"; // Adjust the import path as needed
import { fetchPlayerData } from "@/lib/playerUtils";
import Image from "next/image";
import PlayerRank from "@/components/playerRank";

export async function generateStaticParams() {
  const client = await connectToDatabase();
  const db = client.db();
  const players = await db
    .collection("users")
    .find({}, { projection: { name: 1 } })
    .toArray();
  return players.map((player) => ({ name: encodeURIComponent(player.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  const player = await fetchPlayerData(params.name);

  if (!player) {
    return {
      title: "Player not found",
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
    <main className="flex min-h-screen flex-col p-10 gap-2">
      <section className="my-5">
        <div className="flex gap-3">
          <Image
            alt="Steam Avatar"
            src={player.image}
            width={90}
            height={90}
            priority
          ></Image>
          <h1 className="text-3xl self-center">{player.name}</h1>
        </div>
      </section>
      <section className="flex justify-between gap-24 mb-5 text-xl">
        <div className="flex flex-col justify-between rounded-xl border bg-card text-card-foreground shadow p-4 w-96">
          <div>
            <h1>RD2L Name:</h1>
          <p></p>
          </div>
          
          <div>
            <h1>Steam Name:</h1>
            <p className="text-center">{player.name}</p>
          </div>
          <div>
            <h1>Discord Name:</h1>
          <p></p>
          </div>
          
        </div>
        <div className="flex flex-col justify-around rounded-xl border bg-card text-card-foreground shadow p-4 w-full">
          <PlayerRank steamID64={player.steamid3} />
        </div>
        <div className="flex flex-col items-center rounded-xl border bg-card text-card-foreground shadow p-4 w-96">
          <h2>Resources</h2>
          <Link
            href={player.dotabuff}
            className="text-blue-400 hover:text-blue-500 mb-10 underline"
          >
            &gt;DotaBuff
          </Link>
          <Link
            href={player.opendota}
            className="text-blue-400 hover:text-blue-500 underline"
          >
            &gt;OpenDota
          </Link>
        </div>
      </section>

      {/* Render other player information here */}
      <section className="flex flex-1 justify-between w-full gap-5">
        <div className="flex flex-col rounded-xl border bg-card text-card-foreground shadow p-4 w-full">Teams</div>
        <div className="flex flex-col rounded-xl border bg-card text-card-foreground shadow p-4 w-full">
          <p className="flex flex-col items-center">
            Your very own personal page where I will put your dotabuff &
            opendota data at. Maybe even an AI description of you.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PlayerPage;
