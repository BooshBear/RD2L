
interface DivisionsPageProps {
    params: {
        division: string;
    };
}

const DivisionPage = async ({ params }: DivisionsPageProps) => {
    console.log(params)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <h1>{params.division}</h1>
        </main>
    )
}

export default DivisionPage;