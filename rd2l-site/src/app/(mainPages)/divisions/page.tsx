import { FetchDivisions } from "@/components/fetchDivisions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Divisions() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="flex flex-col gap-4">
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-2xl underline">Season 32</h1>
          {/* <h1 className="underline">Current state of the season. *be it registering stage, seeding brackets stage, playoffs, or finals stage</h1> */}
        </section>
        <FetchDivisions></FetchDivisions>
      </div>
    </main>
  );
}
