import { FC } from 'react'
import styles from './workflow.module.scss'

export type Props = {
  number: number;
  text: string;
}

const WorkflowCard: FC<Props> = ({ number, text }: Props) => (
  <article className={styles.card}>
    <div className={styles.numBlock}>
      { `0${number}` }
    </div>
    <p className={styles.text}>{ text || 'no text' }</p>
  </article>
)

export default WorkflowCard
