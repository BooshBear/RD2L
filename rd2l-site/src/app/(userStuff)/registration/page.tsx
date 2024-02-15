

export default function Registration() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-10">
            <form className="flex flex-col gap-8 justify-around items-center bg-white text-black rounded-md p-6 drop-shadow-[0_0_6rem_#ffffff70] border-3 border-black">
                <h1 className="uppercase font-mono font-extrabold text-2xl">Register</h1>
                <input placeholder="username" className="border-black border-2 p-1 rounded-sm"></input>
                <input placeholder="password" className="border-black border-2 p-1 rounded-sm"></input>
                <button type="submit" className="text-white bg-black rounded-md p-1 w-20 hover:bg-[#1c1c1c]">Sign Up</button>
            </form>
        </main>
    )
}