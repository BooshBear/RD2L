import { fetchDivisionData } from "@/lib/divisionUtils";
import Image from "next/image";
import Link from "next/link";

interface DivisionsPageProps {
  params: {
    division: string;
  };
}

const DivisionPage = async ({ params }: DivisionsPageProps) => {
  const divisions = await fetchDivisionData();

  // Match slug from URL
  const divisionExists = divisions.find(
    (division) => division.slug === params.division
  );

  if (divisionExists) {
    return (
      <main className="flex min-h-screen flex-col p-10">
        {/* Top Section for division name and resources */}
        <section className="flex gap-5 mt-5">
          <div className="flex items-center">
            <Image
              src={"/placeholder.jpg"}
              alt="loading..."
              width={400}
              height={400}
            ></Image>
          </div>
          <div className="flex flex-col justify-between rounded-xl border bg-card text-card-foreground shadow p-4 w-full">
            <h1 className="text-3xl">{divisionExists.divisionName}</h1>{" "}
            {/* Display full name */}
            <h1 className="text-xl">Season 32</h1>
            <h1>Players: 0</h1>
          </div>
          <div className="flex flex-col justify-around items-center rounded-xl border bg-card text-card-foreground shadow p-4 w-full">
            <h1>{divisionExists.stateOfSeason[2]}</h1>
            <Link
              href={divisionExists.discord}
              target="_blank"
              className="text-blue-400 hover:text-blue-500"
            >
              Discord Link
            </Link>
          </div>
        </section>
        {/* Match Ups/brackets/Winner */}
        <section>
          <div></div>
        </section>
        {/* Teams and players */}
        <section></section>
        {/* Content from division */}
        <section></section>
        {/* Current and past seasons/history */}
        <section></section>
      </main>
    );
  } else {
    return (
      <main className="min-h-screen p-10 flex justify-center items-center">
        <div>
          <h1 className="text-red-600 text-4xl">
            ! This Division Doesn&#39;t Exist !
          </h1>
        </div>
      </main>
    );
  }
};

export default DivisionPage;
