import FetchPlayers from "@/components/fetchplayers";

export default function Players() {

    return (
        <main className="flex min-h-screen flex-col items-center p-10 gap-2">
            <FetchPlayers></FetchPlayers>
        </main>
    );
};