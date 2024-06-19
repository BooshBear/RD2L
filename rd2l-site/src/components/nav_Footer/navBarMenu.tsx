"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import SteamLogin from "../steamLogin";
export default function NavBar() {
    const pathname = usePathname();

    const isActive = (href: any) => pathname == href;

    return (
      <nav className='flex justify-between text-neutral-800 font-mono text-lg absolute h-10 w-full'>
          <div className='flex gap-2 ml-5'>
            {/* RD2l Or Home */}
            <Link href='/' className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] pl-2 pr-2 p-2 rounded-b-[4px] ${isActive("/") ? "bg-[#c34e50]" : ""}`}>
              Home
            </Link>
            <Link href='/players' className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] pl-2 pr-2 p-2 rounded-b-[4px] ${isActive("/players") ? "bg-[#c34e50]" : ""}`}>
              Players
            </Link>
            <Link href='/divisions' className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] pl-2 pr-2 p-2 rounded-b-[4px] ${isActive("/divisions") ? "bg-[#c34e50]" : ""}`}>
              Divisions
            </Link>
            <Link href='/content' className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] pl-2 pr-2 p-2 rounded-b-[4px] ${isActive("/content") ? "bg-[#c34e50]" : ""}`}>
              Content
            </Link>
          </div>
          
          <div><SteamLogin/></div>
        </nav>
  );
};