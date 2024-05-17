import './globals.css'
import React,{ PropsWithChildren } from 'react'
import NavBar from '@/components/nav_Footer/navBarMenu'
import FooterMenu from '@/components/nav_Footer/footerMenu'
import { Providers } from './sessionProvider'

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
      <html lang="en">
        <body>
          <Providers>
            <NavBar/>
            {children}
            <FooterMenu/>
          </Providers>
        </body>
      </html>
  )
}
