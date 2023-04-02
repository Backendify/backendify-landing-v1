import { FC } from 'react'
import styles from './footer.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Mail } from '../../assets/icons/general/mail.svg'
import { ReactComponent as Facebook } from '../../assets/icons/social/facebook.svg'

const Footer: FC = () => (
  <footer className={styles.container}>
    <div className={styles.logoWrap}>
      <Logo className={styles.logo} />
      <h3 className={styles.title}>Backendify</h3>
    </div>
    <div className={styles.supportWrap}>
      <Mail className={styles.mailIcon} />
      <a href="mailto:support@backendify.com" className={styles.link}>support@backendify.com</a>
    </div>
    <div className={styles.socialWrap}>
      <a href="https://www.facebook.com/profile.php?id=100091474542420" >
        <Facebook className={styles.socialIcon} />
      </a>
    </div>
    <p>Copyright by 2023 Backendify, Inc</p>
  </footer>
)

export default Footer
