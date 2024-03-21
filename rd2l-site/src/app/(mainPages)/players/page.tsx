

export default function Players() {
    return(
        <main className="flex min-h-screen flex-col items-center p-10 gap-2">
            <div>
                {/* Search bar */}
                <form>
                    <input placeholder="Search PlayerName" className="bg-black rounded-[5px] p-2 text-center text-white shadow-lg shadow-[#9b3839] hover:border-2 hover:border-[#9b3839]"></input>
                </form>
                {/* Area to put the code for the player cards */}
            </div>
        </main>
    )
}