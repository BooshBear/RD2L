"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
    const pathname = usePathname();

    const isActive = (href: any) => pathname == href;

    return (
      <nav className='flex justify-between font-mono text-lg absolute w-full'>
          <div className='flex gap-2 ml-5'>
            {/* RD2l Or Home */}
            <Link href='/' className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] pl-2 pr-2 p-2 rounded-b-md ${isActive("/") ? "bg-[#9b383a]" : ""}`}>
              Main
            </Link>
            <Link href='/divisions' className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] pl-2 pr-2 p-2 rounded-b-md ${isActive("/divisions") ? "bg-[#9b383a]" : ""}`}>
              Divisions
            </Link>
            <Link href='/content' className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] pl-2 pr-2 p-2 rounded-b-md ${isActive("/content") ? "bg-[#9b383a]" : ""}`}>
              Content
            </Link>
            <Link href='/players' className={`hover:bg-opacity-40 hover:bg-[#9b383a8a] pl-2 pr-2 p-2 rounded-b-md ${isActive("/players") ? "bg-[#9b383a]" : ""}`}>
              Players
            </Link>
          </div>
          
          <Link href='/login' className='flex justify-end mr-5 hover:bg-opacity-40 hover:bg-[#9b383a8a] p-2 rounded-b-md'>
            Login
          </Link>
        </nav>
  );
};