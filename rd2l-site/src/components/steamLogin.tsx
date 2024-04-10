"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function SteamLogin() {
    const {data: session} = useSession()

    return session?
    (
        <>
            <div className="">
                <button onClick={() => signOut()}><h1>Sign out</h1></button>
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