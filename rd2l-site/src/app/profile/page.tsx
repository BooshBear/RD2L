"use client"
import { useSession, getSession } from "next-auth/react"
import { useRouter } from "next/navigation"


export default function Profile() {
    const {data: session, status} = useSession()
    const router = useRouter()
    if (status === "loading") {
        return <p>Loading...</p>
    }
    
    if (status === "unauthenticated") {
        return router.push("/api/auth/signin")
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <div>
                <h1>testing page</h1>
            </div>
        </main>
    )
}