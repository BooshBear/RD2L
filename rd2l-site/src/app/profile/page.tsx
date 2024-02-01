import { useSession } from "next-auth/react"

export default function Profile() {
    const {data: session} = useSession()
    return (
        session
    )
}