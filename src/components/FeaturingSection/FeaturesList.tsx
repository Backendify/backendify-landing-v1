import { FC } from 'react'
import styles from './featuring.module.scss'
import FeatureCard from './FeatureCard'
import { Card } from './FeatureCard.type'

type Props = {
  cards: Card[];
}

const FeaturesList: FC<Props> = ({ cards }: Props) => (
  <article className={styles.featuringList}>
    {cards.map((card: Card, index: number) => (
      <FeatureCard card={card} key={index} />
    ))}
  </article>
)

export default FeaturesList
