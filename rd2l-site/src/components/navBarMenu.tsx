"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import SteamLogin from "./steamLogin";
export default function NavBar() {
    const pathname = usePathname();

    const isActive = (href: any) => pathname == href;

    return (
      <nav className='flex justify-between font-mono text-lg absolute w-full'>
          <div className='flex gap-2 ml-5'>
            {/* RD2l Or Home */}
            <Link href='/' className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] pl-2 pr-2 p-2 rounded-b-md ${isActive("/") ? "bg-[#9b383a]" : ""}`}>
              Home
            </Link>
            <Link href='/players' className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] pl-2 pr-2 p-2 rounded-b-md ${isActive("/players") ? "bg-[#9b383a]" : ""}`}>
              Players
            </Link>
            <Link href='/divisions' className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] pl-2 pr-2 p-2 rounded-b-md ${isActive("/divisions") ? "bg-[#9b383a]" : ""}`}>
              Divisions
            </Link>
            <Link href='/content' className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] pl-2 pr-2 p-2 rounded-b-md ${isActive("/content") ? "bg-[#9b383a]" : ""}`}>
              Content
            </Link>
          </div>
          
          <div className="absolute z-20 right-0 pl-2 pr-2 p-2"><SteamLogin/></div>
        </nav>
  );
};