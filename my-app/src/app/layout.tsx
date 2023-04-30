import Link from 'next/link'
import './globals.css'

export const metadata = {
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
        <div className='page_wrapper'>
          {/* Navbar */}
          <nav>
            <h1>RD2L</h1>
            <Link href='/' className=''>
              Home
            </Link>
          </nav>
          {/* Main content */}
          {children}
          {/* Footer */}
          <footer>
            <div>
              <h1>Contact</h1>
                <ul>
                  <li>Join Discord</li>
                  <li>Email</li>
                  <li>Report a bug</li>
                  <li>Provide Feedback</li>
                </ul>
            </div>
            <div>
              <h1>Reesources</h1>
                <ul>
                  <li>League Rules</li>
                  <li>Inhouse Rules</li>
                  <li>Playoff Bracket</li>
                </ul>
            </div>
            <div>
              <h1>Built Using</h1>
                <ul>
                  <li>Next JS</li>
                  <li></li>
                  <li></li>
                </ul>
            </div>
            <div className="social">
              <p>Social Media Handles</p>
              <ul>
                <li>Twitch</li>
                <li>Github</li>
                <li>Discord</li>
              </ul>
            </div>
            <div className='legalStuff'>
              <p>@ Some Very Legal Stuff Here</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
