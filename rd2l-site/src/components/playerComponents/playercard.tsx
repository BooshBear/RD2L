import Link from "next/link"

export default function PlayerCard() {
    // gonna be a for loop that will loop through all accounts that have their steamid inputed and get data from steam as info
    return (
        <div className="flex gap-6">
        {/* players cards put this into a component later */}
        <div className="flex gap-2 border-2 border-[#9b3839] rounded-md p-1">
            <h1>SteamPic</h1>
            <h1>SteamName</h1>
            <h1>Rank</h1>
        </div>
        <div className="flex gap-2 border-2 border-[#9b3839] rounded-md p-1">
            <h1>SteamPic</h1>
            <h1>SteamName</h1>
            <h1>Rank</h1>
        </div>
        <div className="flex gap-2 border-2 border-[#9b3839] rounded-md p-1">
            <h1>SteamPic</h1>
            <h1>SteamName</h1>
            <h1>Rank</h1>
        </div>
        {/* <div className="flex">
            // hidden until player clicked upon 
            <p>dotabuff</p>
            <p>the other data tracker thingy</p>
            <p>links to other accounts if he has multiple</p>
        </div> */}
    </div>
    )
}