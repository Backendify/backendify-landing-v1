import { FC, useState } from 'react'
import styles from './subscribe.module.scss'
import SectionTitle from '../SectionTitle'
import Form from '../Form'

const SubscribtionSection: FC = () => {
  const [isSend, setSend] = useState(false)

  return (
    <section className={styles.container} id="subscription">
      <SectionTitle subtitle="Contact us" title="Join us today" />
      <p className={styles.text}>
        Backendify is in development, and we'll be happy to let you know when
        it's ready. Leave your email to stay up to date and get access to the
        beta version.
      </p>
      <div className={styles.formContainer}>
        <Form setSend={setSend} />
      </div>
      {isSend && (
        <p className={styles.appreciation}>
          Thank you very much for your email! We will definitely contact you when our product is ready.
        </p>
      )}
    </section>
  )
}

export default SubscribtionSection
