import React from "react";
import * as styles from "../styles/tradeMore.module.css";

export default function TradeMore() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Trade More. <span className={styles.highlightedText}>Pay Less.</span>
        </h1>
        <h3>Our low Fees Supercharge Your Profits</h3>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="/coin.png" alt="coinDCX" />
          <h1>0.025</h1>
          <h4>Maker Fees</h4>
          <h1>0.07</h1>
          <h4>Taker Fees</h4>
        </div>
        <div className={styles.card}>
          <img src="/logo2.png" alt="logo" />
          <h1>0.02</h1>
          <h4>Maker Fees</h4>
          <h1>0.04</h1>
          <h4>Taker Fees</h4>
        </div>
        <div className={styles.card}>
          <img src="/delta.png" alt="delta" />
          <h1>0.02</h1>
          <h4>Maker Fees</h4>
          <h1>0.05</h1>
          <h4>Taker Fees</h4>
        </div>
      </div>
    </div>
  );
}
