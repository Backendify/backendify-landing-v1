import { FC } from 'react'
import styles from './pricing.module.scss'
import { ReactComponent as CheckIcon } from '../../assets/icons/includedOption.svg'

export type Props = {
  title: string;
  subtitle: string;
  price?: string;
  aviableFeautures: string[];
}

const PriceCard: FC<Props> = ({ title, subtitle, price, aviableFeautures }: Props) => (
  <article className={styles.card}>
    <h3 className={styles.title}>{ title }</h3>
    <p className={styles.subtitle}>{ subtitle }</p>
    {price ? (
      <p className={styles.price}>$<span>{price}</span>/mo</p>
    ) : (
        <p className={styles.price}><span> FREE </span></p>
    )}
    <div className={styles.hr} />
    {aviableFeautures.map((text, index) => (
      <div className={styles.option} key={index}>
        <CheckIcon className={styles.icon} />
        <p>{ text }</p>
      </div>
    ))}
  </article>
)

export default PriceCard
