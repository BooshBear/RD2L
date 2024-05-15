"use client"
import { useSession } from "next-auth/react"

export default function Profile() {
    const { data: session } = useSession()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <div className="flex flex-col justify-center items-center text-center"> 
                <h1>Profile Page</h1>
                <h1>Hello and welcome, {session?.user?.name}</h1>
                <p>
                    This is your account settings<br></br>
                    Please add you Steam Friend Code here so we can get you hooked up<br></br>
                    so you could join in the seasons.
                </p>
                <input className="border-2 border-black text-center rounded-[4px] p-[2px]" type="number" placeholder="Steam Friend Code" title="Steam Friend Code"/>
            </div>
        </main>
    )
}