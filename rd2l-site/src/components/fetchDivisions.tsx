"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

interface Division {
  _id: number;
  divisionName: string;
  slug: string;
  stateOfSeason: Array<string>;
  players: Array<string>;
  // Add other properties as needed
}

export const FetchDivisions = () => {
  const [divions, setDivisions] = useState<Division[]>([]);

  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const res = await fetch("/api/divisions");
        const divionsData = await res.json();
        setDivisions(divionsData);
      } catch (error) {
        console.error("Error fetching divisions:", error);
      }
    };

    fetchDivisions();
  }, []);

  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-wrap justify-center items-center gap-6">
        {divions.map((division) => (
          <Link key={division.slug} href={`/divisions/${division.slug}`}>
            <Card className="w-96 flex flex-col justify-center items-center text-center">
              <CardHeader>
                <CardTitle>{division.divisionName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{division.stateOfSeason[2]}</p>
                <p>Players: {division.players.length}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
