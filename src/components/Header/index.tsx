import { FC } from 'react'
import styles from './header.module.scss'
import { ReactComponent as Logo } from './Logo.svg'
import { Link } from 'react-scroll'

const Header: FC = () => (
  <header className={styles.header} >
    <div className={styles.logoWrap}>
      <Logo className={styles.logo} />
      <h2 className={styles.title} >Backendify</h2>
    </div>
    <nav className={styles.navBlock} >
      <Link to="home" className={styles.link} smooth={true} duration={350} offset={-100}>Home</Link>
      <Link to="featuring" className={styles.link} smooth={true} duration={350} offset={-100}>Featuring</Link>
      <Link to="pricing" className={styles.link} smooth={true} duration={350} offset={-100}>Pricing</Link>
    </nav>
  </header>
)

export default Header
