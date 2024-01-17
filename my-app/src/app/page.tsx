import Image from 'next/image'
import styles from './page.module.css'

export default function FrontPage() {
  return (
    <main>
      <div>
        <div>
          <img
          src="/assets/images/rd2l-lame.png"
          alt='My Image'
          />
        </div>
        <div>
          <h1>General Info</h1>
          <ul>
            <li><span>&gt;</span>Individual signups</li>
            <li><span >&gt;</span>Teams built via draft</li>
            <li><span>&gt;</span>8 week BO2 regular season</li>
            <li><span>&gt;</span>Top teams make playoffs</li>
          </ul>
        </div>
        <div>
          <h1>Player Culture</h1>
          <ul className="dataList">
            <li><span>&gt;</span>Make new friends</li>
            <li><span>&gt;</span>Grow with your teammates</li>
            <li><span>&gt;</span>Enjoy community content</li>
            <li><span>&gt;</span>Play with all skill levels</li>
          </ul>
        </div>
        <div className={styles.features}>
          <h1>RD2L Features</h1>
          <ul className="dataList">
            <li><span>&gt;</span>Participate in inhouses</li>
            <li><span>&gt;</span>Play in weekend tourneys</li>
            <li><span>&gt;</span>Mini leagues between seasons</li>
            <li><span>&gt;</span>Find Battlecup stacks</li>
          </ul>
        </div>
        <div className={styles.teams}>
          <h1>RD2L Teams</h1>
          <ul className="dataList">
            <li><span>&gt;</span>Participate in inhouses</li>
            <li><span>&gt;</span>Play in weekend tourneys</li>
            <li><span>&gt;</span>Mini leagues between seasons</li>
            <li><span>&gt;</span>Find Battlecup stacks</li>
          </ul>
        </div>
        <div className={styles.join}>
          <h1>Join Now</h1>
        </div>
      </div>
    </main>
  )
}
