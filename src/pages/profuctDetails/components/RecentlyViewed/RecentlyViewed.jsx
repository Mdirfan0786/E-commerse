import React from "react";

import { Link } from "react-router-dom";

import styles from "./RecentlyViewed.module.css";

function RecentlyViewed({ recentProducts }) {
  // Hide section if no products
  if (recentProducts.length === 0) {
    return null;
  }

  return (
    <div className={styles.recentSection}>
      <h2 className={styles.recentHeading}>Recently Viewed</h2>

      <div className={styles.recentGrid}>
        {recentProducts.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className={styles.recentCard}
          >
            <img
              src={item.image}
              alt={item.name}
              className={styles.recentImage}
            />

            <h4>{item.name}</h4>

            <p>${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecentlyViewed;
