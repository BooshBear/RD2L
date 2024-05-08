"use client"
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Form } from "@/components/ui/form";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");

    const onClick = (provider: "SteamProvider") => {
        signIn(provider, {
        callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        });
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-10">
            <div className="flex flex-col w-80 h-96 justify-evenly items-center text-black rounded-[4px] p-3 drop-shadow-[0_0_6rem_#ffffff70] border-3 border-black">
                <div className="min-w-full">
                    <ul className="flex gap-1 min-w-fit">
                        <button onClick={() => onClick("SteamProvider")} className="flex justify-around border-gray-100 hover:bg-gray-100 border-2 shadow-sm w-full h-9 rounded-[4px]">
                            <p>?</p>
                        </button>
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link href={"/"} className='text-blue-400 hover:text-blue-500'>Did you forget your password?</Link>    
                    <Link href={"/registration"} className='text-blue-400 hover:text-blue-500'>Don-&gt;t have an account?</Link>
                </div>
            </div>
        </main>
    )
} 