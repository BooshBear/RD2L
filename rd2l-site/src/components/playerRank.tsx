"use client";
import { fetchDotaRank } from "@/lib/fetchDotaRank";
import { rankImages } from "@/lib/rankUtils";
import Image from "next/image";
import { useEffect, useState } from "react";

const PlayerRank = ({ steamID64 }: { steamID64: string }) => {
  const [rankTier, setRankTier] = useState<number | null>(null);

  useEffect(() => {
    const getRank = async () => {
      const rank = await fetchDotaRank(steamID64);
      setRankTier(rank);
    };
    getRank();
  }, [steamID64]);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-bold">Current Rank</h1>
        {rankTier !== null ? (
          <Image
            src={rankImages[rankTier] || "/assets/medals/unranked.png"} // Fallback image if rank not found
            alt="Dota 2 Rank"
            width={100}
            height={100}
          />
        ) : (
          <p>Loading rank...</p>
        )}
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-bold">Peak Rank</h1>
        <Image
            src={"/assets/medals/unranked.png"}
            alt="Dota 2 Rank"
            width={100}
            height={100}
          />
      </div>
    </>
  );
};

export default PlayerRank;
