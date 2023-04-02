import { FC } from 'react'
import styles from './title.module.scss'
import classNames from 'classnames'

type Props = {
  subtitle: string;
  title: string;
  lightVariant?: boolean;
}

const SectionTitle: FC<Props> = ({ subtitle, title, lightVariant }: Props) => (
  <>
    <h4 className={classNames(lightVariant && styles.tertiary, styles.subtitle)}>{subtitle || 'subtitle'}</h4>
    <h2 className={classNames(lightVariant && styles.white, styles.title)}>{title || 'title'}</h2>
  </>
)

export default SectionTitle
