import React, { FC } from 'react'
import SectionTitle from '../SectionTitle'
import styles from './pricing.module.scss'
import PriceCard from './PriceCard'

const PricingSection: FC = () => (
  <section className={styles.container} id="pricing">
    <SectionTitle
      title="Choose your pricing policy"
      subtitle="pricing plan"
    />
    <div className={styles.cardsContainer}>
      <PriceCard
        title="Free plan"
        subtitle="For Small teams or office"
        aviableFeautures={['auth module', 'database module']}
      />
      <PriceCard
        title="Startup"
        subtitle="For Small teams or office"
        price="50"
        aviableFeautures={['pro auth module', 'database module', 'email module', 'notifications module', 'media db module', 'integrations module']}
      />
      <PriceCard
        title="Enterprise"
        subtitle="For Small teams or office"
        price="200"
        aviableFeautures={['templates', 'payments module', 'email module', 'notifications module']}
      />
    </div>
  </section>
)

export default PricingSection
