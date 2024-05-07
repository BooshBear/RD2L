"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"


export default function SteamLogin() {
    const { data: session } = useSession()
    return session?
    (
        <>
            <div className="flex justify-between items-center h-full">
                <Link href='/profile' className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] mr-3 pl-2 pr-2 p-2 rounded-b-[4px] flex justify-between items-center gap-4 h-full`}>
                    <h1>{`${session.user?.name}`}</h1>
                    {session.user?.image && <img src={session.user.image} alt="User Profile" className="h-full object-fit rounded-[50%]"/>}
                </Link>
                
                <button className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] mr-3 pl-2 pr-2 p-2 rounded-b-[4px]`} onClick={() => signOut()}><h1>Sign out</h1></button>
            </div>
        </>  
    )   
    :
    (
        <>
            {/* providers being used in api auth route, currently using google and reddit */}
            <button className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] h-10 mr-3 p-2 rounded-b-[4px]`} onClick={() => signIn()}>Sign in</button>
        </>
        
    )
}