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
        <nav className='flex justify-between p-2 font-mono text-lg bg-zinc-700'>
          <div className='flex gap-5 ml-5'>
            {/* RD2l Or Home */}
            <Link href='/' className='hover:opacity-40'>
              Main
            </Link>
            <Link href='/' className='hover:opacity-40'>
              Seasons
            </Link>
            <Link href='/' className='hover:opacity-40'>
              Divisions
            </Link>
          </div>
          
          <Link href='/' className='flex justify-end mr-5'>
            Login
          </Link>
        </nav>
        {children}
        <footer className='bg-zinc-700 p-2 flex justify-center items-center opacity-80'>
          <p className='text-sm text-center'>All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.</p>
        </footer>
      </body>
    </html>
  )
}
