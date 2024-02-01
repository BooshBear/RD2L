"use client"
import { useSession } from "next-auth/react"
import { Redirect } from "next"

export default function Profile() {
    const {data: session} = useSession()
    return session? 
    (
        <></>
    )
    :
    (
        <></>
    )
}