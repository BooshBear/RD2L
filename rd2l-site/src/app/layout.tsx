import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className='flex justify-between m-2 font-mono text-lg'>
          <div className='flex gap-5 ml-5'>
            {/* RD2l Or Home */}
            <Link href='/' className=''>
              RD2L
            </Link>
            <Link href='/' className=''>
              Main
            </Link>
            <Link href='/' className=''>
              Divisions
            </Link>
          </div>
          
          <Link href='/' className='flex justify-end mr-5'>
            Login
          </Link>
        </nav>
        {children}
        
      </body>
    </html>
  )
}
