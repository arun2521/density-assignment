import React from 'react';
import * as styles from '../styles/startTrading.module.css';

export default function StartTrading() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1>Get started now.</h1>
        </div>
        <div className={styles.images}>
            <img src='/startTrade.png' alt='vector'/>
        </div>
        <div className={styles.startTrade}>
            <h1>Start Trading!</h1>
        </div>
    </div>
  )
}
