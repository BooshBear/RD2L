"use client"
import { useSession } from "next-auth/react"
const ProfileSettings = () => {
    const { data: session } = useSession()
    return (
            <>
                <h1>Hello and welcome, {session?.user?.name}</h1>
            </>
    )
}

export default ProfileSettings;