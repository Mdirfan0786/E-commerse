import React from "react";

import { FiStar } from "react-icons/fi";

import styles from "./Stats.module.css";

function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.statCard}>
        <h2>10K+</h2>

        <p>Happy Customers</p>
      </div>

      <div className={styles.statCard}>
        <h2>500+</h2>

        <p>Premium Products</p>
      </div>

      <div className={styles.statCard}>
        <h2>4.9</h2>

        <p>
          <FiStar /> Top Ratings
        </p>
      </div>
    </section>
  );
}

export default Stats;
