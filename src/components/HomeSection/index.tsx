import { FC } from 'react'
import styles from './home.module.scss'
import { Link } from 'react-scroll'

const HomeSection: FC = () => (
  <section className={styles.container} id="home">
    <h1 className={styles.title}>
      Create backend applications quickly
      and cheaply with <span className={styles.marked}>Backendify</span>!
    </h1>
    <p className={styles.subtitle}>
      Backendify is a service that allows you to create a zero code backend
      for your application in just a few minutes. Forget the hassle of setting
      up a server, installing required packages, and programming APIs - with
      Backendify, you can create a backend that's ready to use.
    </p>
    <Link to="subscription" smooth={true} duration={350} offset={-100} className={styles.button}>join us today!</Link>
  </section>
)

export default HomeSection
