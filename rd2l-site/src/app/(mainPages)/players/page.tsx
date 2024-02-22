

export default function Players() {
    return(
        <main className="flex min-h-screen flex-col items-center p-10 gap-2">
            <div>
                {/* Search bar */}
                <form>
                    <input placeholder="PlayerName" className="bg-black rounded-md p-1 text-center shadow-sm shadow-[#9b3839]"></input>
                </form>
            </div>
            <div>
                {/* players cards put this into a component later */}
                <div className="flex gap-2 border-2 border-[#9b3839] rounded-md p-1">
                    <h1>SteamPic</h1>
                    <h1>SteamName</h1>
                    <h1>Rank</h1>
                </div>
                {/* <div className="flex">
                    // hidden until play clicked upon 
                    <p>dotabuff</p>
                    <p>the other data tracker thingy</p>
                    <p>links to other accounts if he has multiple</p>
                </div> */}
            </div>
        </main>
    )
}