import React, { FC } from 'react'
import SectionTitle from '../SectionTitle'
import styles from './workflow.module.scss'
import { ReactComponent as Arrow } from '../../assets/blobs/arrow.svg'
import WorkflowCard from './WorkflowCard'

const InstructionSection: FC = () => (
  <section className={styles.container}>
    <SectionTitle
      title="Let’s see how it works"
      subtitle="whats the function"
      lightVariant={true}
    />
    <div className={styles.workflow}>
      <WorkflowCard
        text="Choose the module you need or a ready-made template to create a backend application"
        number={1}
      />
      <Arrow id={styles.arrow1}  />
      <WorkflowCard
        text="Customize it using an intuitive interface"
        number={2}
      />
      <Arrow id={styles.arrow2} />
      <WorkflowCard
        text="Download the source code or deploy to a remote server"
        number={3}
      />
    </div>
  </section>
)

export default InstructionSection
