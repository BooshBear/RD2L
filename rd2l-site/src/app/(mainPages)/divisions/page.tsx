import Image from "next/image";
import Link from "next/link";

export default function Divisions() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <div className="flex flex-col gap-4">
                <section className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl underline">Season 32</h1>
                    <h1>Current state of the season. *be it registering stage, seeding brackets stage, playoffs, or finals stage</h1>
                </section>
                {/* Discord pictures with links */}
                <section className="grid grid-cols-4 justify-items-center">
                    <Link href={"/divisions/"} className="col-span-2"><Image src={""} alt="...loading" height={200} width={200}></Image></Link>
                    <Link href={"/divisions/TuesdayEst"} className="col-span-2"><Image src={"/assets/images/divisions/tues.webp"} alt="...loading" height={200} width={200}></Image></Link>
                    <Link href={"/divisions/"}><Image src={""} alt="...loading" height={200} width={200}></Image></Link>
                    <Link href={"/divisions/"} className="col-span-2"><Image src={""} alt="...loading" height={200} width={200}></Image></Link>
                    <Link href={"/divisions/"}><Image src={""} alt="...loading" height={200} width={200}></Image></Link>
                </section>
            </div>
        </main>
    )
}