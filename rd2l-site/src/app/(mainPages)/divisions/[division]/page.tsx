
interface DivisionsPageProps {
    params: {
        division: string;
    };
}

const divisionsArray = ['Monday8Est', 'Tuesday9Est', 'Wednesday6Pst', 'Sunday8Est', 'Sunday7Pst']

const DivisionPage = async ({ params }: DivisionsPageProps) => {
    const division = params.division
    
    if (!divisionsArray.includes(division)) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-10">
                <h1>Not Existing Division</h1>
            </main>
        )
    }
    else {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-10">
                <h1>{params.division}</h1>
            </main>
        )
    }
}

export default DivisionPage;