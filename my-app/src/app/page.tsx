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
        <div className={styles.colL}>
          <h1>General Info</h1>
          <ul className="dataList">
            <li><span className={styles.dataArrows}>&gt;</span>Individual signups</li>
            <li><span className={styles.dataArrows}>&gt;</span>Teams built via draft</li>
            <li><span className={styles.dataArrows}>&gt;</span>8 week BO2 regular season</li>
            <li><span className={styles.dataArrows}>&gt;</span>Top teams make playoffs</li>
          </ul>
        </div>
        <div className={styles.colM}>
          <h1>Player Culture</h1>
          <ul className="dataList">
            <li><span className={styles.dataArrows}>&gt;</span>Make new friends</li>
            <li><span className={styles.dataArrows}>&gt;</span>Grow with your teammates</li>
            <li><span className={styles.dataArrows}>&gt;</span>Enjoy community content</li>
            <li><span className={styles.dataArrows}>&gt;</span>Play with all skill levels</li>
          </ul>
        </div>
        <div className={styles.colR}>
          <h1>RD2L Features</h1>
          <ul className="dataList">
            <li><span className={styles.dataArrows}>&gt;</span>Participate in inhouses</li>
            <li><span className={styles.dataArrows}>&gt;</span>Play in weekend tourneys</li>
            <li><span className={styles.dataArrows}>&gt;</span>Mini leagues between seasons</li>
            <li><span className={styles.dataArrows}>&gt;</span>Find Battlecup stacks</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
