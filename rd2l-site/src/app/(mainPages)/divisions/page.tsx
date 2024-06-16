import Image from "next/image";
import Link from "next/link";

export default function Divisions() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <div>
                {/* Discord pictures with links */}
                <section>
                    <div>
                        <Link href={"/"}><Image src={""} alt="...loading" height={100} width={100}></Image></Link>
                        <Link href={"/"}><Image src={""} alt="...loading" height={100} width={100}></Image></Link>
                        <Link href={"/"}><Image src={""} alt="...loading" height={100} width={100}></Image></Link>
                        <Link href={"/"}><Image src={""} alt="...loading" height={100} width={100}></Image></Link>
                        <Link href={"/"}><Image src={""} alt="...loading" height={100} width={100}></Image></Link>
                    </div>
                </section>
                {/* Main section */}
                <section className="grid grid-cols-5">
                    {/* instead of making it to where their is 5 different div have it a component that loops through the different divisions through a database to make it scalable. */}
                </section>

            </div>
        </main>
    )
}