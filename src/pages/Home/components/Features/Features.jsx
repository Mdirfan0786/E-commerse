import React from "react";

import { FiTruck, FiShield, FiShoppingBag } from "react-icons/fi";

import styles from "./Features.module.css";

function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.featureCard}>
        <FiTruck size={30} />

        <h3>Fast Delivery</h3>

        <p>Quick and reliable shipping for all products.</p>
      </div>

      <div className={styles.featureCard}>
        <FiShield size={30} />

        <h3>Secure Payments</h3>

        <p>100% secure checkout and trusted payment methods.</p>
      </div>

      <div className={styles.featureCard}>
        <FiShoppingBag size={30} />

        <h3>Premium Products</h3>

        <p>Explore high-quality and trending collections.</p>
      </div>
    </section>
  );
}

export default Features;
