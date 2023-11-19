import React from "react";
import * as styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          It's time to trade, the{" "}
          <span className={styles.highlightedText}>Future.</span>
        </h1>
        <h3>Trade BTC, ETH Futures with 125x leverage and earn rewards.</h3>
      </div>
      <div className={styles.images}>
      <div className={styles.circularBackground}></div>
        <img src="phone2.svg" alt="logo" className={styles.phone2} />
        <img src="/phone1.svg" alt="logo" className={styles.phone1} />
        <img src="phone3.svg" alt="logo" className={styles.phone3} />
      </div>
    </div>
  );
}
