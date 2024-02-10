"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function SteamLogin() {
    const {data: session} = useSession()

    return session?
    (
        <>
            <button className="flex">
                <img className="transition-all ease-in-out dealy-3 rounded-lg w-10 h-10 hover:w-11 hover:h-11" src={`${session.user?.image}`} alt="Loading Image"/>
            </button>

            <div className="profileMenu absolute z-10 right-0 top-0 w-44 h-52 bg-zinc-900 rounded-b-md grid grid-cols-[90%_10%] pl-3 p-1 text-center justify-center items-center">
                <div className="flex justify-center items-center">
                    <img className="rounded-lg w-11 h-11" src={`${session.user?.image}`} alt="Loading Image"/>
                </div>
                
                <h1>{session.user?.name}</h1>
                <Link href={"/profile"}>Profile</Link>
                <button onClick={() => signOut()}><h1>Sign out</h1></button>
                <button className="col-start-2 row-start-1 row-span-4">{`>`}</button>
            </div>
        </>  
    ) 
    :
    (
        <>
            {/* providers being used in api auth route, currently using google and reddit */}
            <button onClick={() => signIn()}>Sign in</button>
        </>
        
    )
}