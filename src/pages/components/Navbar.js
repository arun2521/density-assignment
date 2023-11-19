import React from "react";
import * as styles from "../styles/nav.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.nav}>
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className={styles.navItems}>
          <h3 className={styles.navItem}>Career</h3>
          <h3 className={styles.navItem}>Blogs</h3>
          <h3 className={styles.navItem}>Leaderboard</h3>
          <h3 className={styles.navItem}>Fees</h3>
        </div>
        <div>
          <h2 className={styles.tradeNow}>TRADE NOW</h2>
        </div>
      </div>
    </nav>
  );
}
