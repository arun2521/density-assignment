import React from "react";
import * as styles from "../styles/candles.module.css";

export default function Candles() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Explore the Markets like it is your <span className={styles.highlightedText}>Playground.</span></h1>
        <h4>Search for your favorite coins and stay ahead of the market</h4>
      </div>
      <div className={styles.images}>
        <img src="/candles.png" alt="candles"/>
      </div>
      <div>
        <h2 className={styles.tradeNow}>EXPLORE MARKETS</h2>
      </div>
    </div>
  );
}
