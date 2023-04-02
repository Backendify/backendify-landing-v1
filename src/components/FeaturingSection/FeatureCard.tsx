import React, { FC } from 'react'
import { Card } from './FeatureCard.type'
import styles from './featuring.module.scss'
import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg'
import { ReactComponent as PaymentsIcon } from '../../assets/icons/payments.svg'
import { ReactComponent as UsabilityIcon } from '../../assets/icons/usability.svg'
import { ReactComponent as ModulesIcon } from '../../assets/icons/modules.svg'

type Props = {
  card: Card;
}

function getIcon(num: number): React.ReactElement {
  if (num === 1) return <TimeIcon className={styles.icon} />
  else if (num === 2) return <PaymentsIcon className={styles.icon} />
  else if (num === 3) return <UsabilityIcon className={styles.icon} />
  else return <ModulesIcon className={styles.icon} />
}

const FeatureCard: FC<Props> = ({ card }: Props) => (
  <article className={styles.featureCardContainer}>
    {getIcon(card.icon)}
    <p className={styles.title}>{ card.title || 'title' }</p>
    <p className={styles.subtitle}>{card.subtitle || 'subtitle'}</p>
  </article>
)

export default FeatureCard
