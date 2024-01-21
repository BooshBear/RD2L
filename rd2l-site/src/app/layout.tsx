import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

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
        <Navigation/>
        {children}
        <footer className='bg-zinc-600 p-2 grid grid-cols-3 text-center'>
            <div>
              <h1 className='underline uppercase'>Contacts</h1>
              <p className='text-blue-500 hover:text-blue-600'>Join Discord</p>
              <p className='text-blue-500 hover:text-blue-600'>Report a bug</p>
              <p className='text-blue-500 hover:text-blue-600'>Provide Feedback</p>
            </div>
            <div>
              <h1 className='underline uppercase'>Resources</h1>
              <p className='text-blue-500 hover:text-blue-600'>League Rules</p>
              <p className='text-blue-500 hover:text-blue-600'>Inhouse RUles</p>
              <p className='text-blue-500 hover:text-blue-600'>Playoff Brackets</p>
            </div>
            <div>
              <h1 className='underline uppercase'>Built Using</h1>
              <p className='text-blue-500 hover:text-blue-600'>Your very own booshbear</p>
              <p className='text-blue-500 hover:text-blue-600'>NextJS</p>
              <p className='text-blue-500 hover:text-blue-600'></p>
            </div>
          <div className='col-span-3 text-center'>
            <h1>Social tags</h1>
          </div>
          <p className='col-span-3 text-sm opacity-80 text-center text-black'>All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.</p>
        </footer>
      </body>
    </html>
  )
}
