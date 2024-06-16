"use client"
import { useSession } from "next-auth/react"
const ProfileSettings = () => {
    const { data: session } = useSession()
    return (
            <>
                <h1>Hello and welcome, {session?.user?.name}</h1>
                <p>
                    This is your account settings<br></br>
                    Please add you Steam Friend Code here so we can get you hooked up<br></br>
                    so you could join in the seasons. The only thing that it would be used for <br></br>
                    is to connect to the opendota database so we could get your mmr number.
                </p>
                <input className="border-2 border-black text-center rounded-[4px] p-[2px]" type="number" placeholder="Steam Friend Code" title="Steam Friend Code"/>
            </>
    )
}

export default ProfileSettings;