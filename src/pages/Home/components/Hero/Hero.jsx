import React from "react";
import { Link } from "react-router-dom";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.tag}>Modern Ecommerce Experience</p>

        <h1>
          Discover Premium <span>Products</span> For Your Lifestyle
        </h1>

        <p className={styles.subtitle}>
          Shop trending electronics, fashion, furniture, and more with a modern
          and smooth shopping experience.
        </p>

        <div className={styles.heroActions}>
          <Link to="/products" className={styles.shopBtn}>
            Shop Now
          </Link>

          <Link to="/wishlist" className={styles.secondaryBtn}>
            Wishlist
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
