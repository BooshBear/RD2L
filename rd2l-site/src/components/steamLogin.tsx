"use client"
import { signIn, signOut, useSession } from "next-auth/react"

export default function SteamLogin() {
    const {data: session} = useSession()
    return session?
    (
        <div>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
        
    ) 
    : 
    (
        <div>
            <button onClick={() => signIn()}>Sign in</button>
            {/* <button onClick={() => signIn('reddit')}>Sign in with reddit</button> */}
        </div>
        
    )
}