import Image from 'next/image'
import styles from './page.module.css'

export default function FrontPage() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.imaged}>
          <img
          src="/assets/images/rd2l-lame.png"
          alt='My Image'
        />
        </div>
        <div>
          <h1>General Info</h1>
          <ul>
            <li>Individual signups</li>
            <li>Teams built via draft</li>
            <li>8 week BO2 regular season</li>
            <li>Top teams make playoffs</li>
          </ul>
        </div>
        <div>
          <h1>Player Culture</h1>
          <ul>
            <li>Make new friends</li>
            <li>Grow with your teammates</li>
            <li>Enjoy community content</li>
            <li>Play with all skill levels</li>
          </ul>
        </div>
        <div>
          <h1>RD2L Features</h1>
          <ul>
            <li>Participate in inhouses</li>
            <li>Play in weekend tourneys</li>
            <li>Mini leagues between seasons</li>
            <li>Find Battlecup stacks</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
