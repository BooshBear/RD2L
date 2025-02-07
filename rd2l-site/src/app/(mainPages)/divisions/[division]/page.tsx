import { fetchDivisionData } from "@/lib/divisionUtils";

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
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <h1>{divisionExists.divisionName}</h1> {/* Display full name */}
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