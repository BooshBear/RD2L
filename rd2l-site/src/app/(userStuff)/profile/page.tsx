"use client"
import ProfileSettings from "@/components/profileSettings"

export default function Profile() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <div className="flex flex-col justify-center items-center text-center"> 
                <h1>Profile Page</h1>
                <ProfileSettings></ProfileSettings>
            </div>
        </main>
    )
}