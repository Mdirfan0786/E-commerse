import React from "react";

import { Link } from "react-router-dom";

import styles from "./EmptyWishlist.module.css";

function EmptyWishlist() {
  return (
    <div className={styles.emptyWishlist}>
      <h2>Your wishlist is empty ❤️</h2>

      <Link to="/" className={styles.shopBtn}>
        Explore Products
      </Link>
    </div>
  );
}

export default EmptyWishlist;
