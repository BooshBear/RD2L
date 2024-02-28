import PlayerCard from "@/components/playerComponents/playercard";


export default function Players() {
    return(
        <main className="flex min-h-screen flex-col items-center p-10 gap-2">
            <div>
                {/* Search bar */}
                <form>
                    <input placeholder="Search PlayerName" className="bg-black rounded-md p-1 text-center shadow-sm shadow-[#9b3839]"></input>
                </form>
            </div>
            <PlayerCard/>
        </main>
    )
}