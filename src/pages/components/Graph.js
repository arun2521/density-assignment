import React from "react";
import * as styles from "../styles/graph.module.css";

export default function Graph() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          <span className={styles.highlightedText}>Unlock</span> New Frontiers.
        </h1>
        <h4>
          Are you a stock trader looking for new opportunities to make money? We
          got you covered!
        </h4>
      </div>
      <div className={styles.middleDiv}>
        <h3>Same Strategies</h3>
        <h3>Same Indicators</h3>
        <h3>Better Leverage</h3>
        <h3>24x7 Trading</h3>
      </div>
      <div className={styles.images}>
        <img src="/graph.png" alt="graph" />
      </div>
    </div>
  );
}
