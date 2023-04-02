import React, { FC } from 'react'
import styles from './App.module.scss'
import Header from '../components/Header'
import HomeSection from '../components/HomeSection'
import FeaturingSection from '../components/FeaturingSection'
import { ReactComponent as Blob1 } from './../assets/blobs/blob1.svg'
import { ReactComponent as Blob2 } from './../assets/blobs/blob2.svg'
import WorkflowSection from '../components/WorkflowSection'
import PricingSection from '../components/PricingSection'
import SubscribtionSection from '../components/SubscribeSection'
import Footer from '../components/Footer'

const App: FC = () => (
  <div className={styles.container}>
    <Header />
    <main>
      <HomeSection />
      <Blob1 className={styles.blob1} />
      <Blob2 className={styles.blob2} />
      <div className={styles.img} />
      <FeaturingSection />
      <WorkflowSection />
      <PricingSection />
      <SubscribtionSection />
    </main>
    <Footer />
  </div>
)

export default App;
