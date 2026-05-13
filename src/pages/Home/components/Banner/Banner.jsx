import React from "react";
import { Link } from "react-router-dom";

import styles from "./Banner.module.css";

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContent}>
        <p className={styles.offer}>LIMITED TIME OFFER</p>

        <h2>Up To 50% Off On Trending Products</h2>

        <p>Grab amazing discounts on electronics, fashion, and furniture.</p>

        <Link to="/" className={styles.bannerBtn}>
          Start Shopping
        </Link>
      </div>
    </section>
  );
}

export default Banner;
