import { FC } from 'react'
import styles from './featuring.module.scss'
import SectionTitle from '../SectionTitle'
import FeaturesList from './FeaturesList'
import { Card } from './FeatureCard.type'

const CARDS: Card[] = [
  {
    icon: 1,
    title: 'Time saving',
    subtitle: 'No need to hire developers or use complex technologies.'
  },
  {
    icon: 2,
    title: 'Saving money',
    subtitle: 'Get a turnkey solution without the cost of expensive development.'
  },
  {
    icon: 3,
    title: 'Ease of use',
    subtitle: 'Select the modules or templates you need and Backendify will build the backend for you.'
  },
  {
    icon: 4,
    title: 'Ready modules',
    subtitle: 'Choose from a wide range of ready-made modules to quickly create a backend with the functionality you need.'
  },
]

const FeaturingSection: FC = () => (
  <section className={styles.container} id="featuring">
    <SectionTitle subtitle="whats the function" title="Meet the feature of product" />
    <FeaturesList cards={CARDS} />
  </section>
)

export default FeaturingSection
