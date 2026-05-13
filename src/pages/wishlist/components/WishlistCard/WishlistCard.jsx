import React from "react";

import { Link } from "react-router-dom";

import { removeFromWishlist } from "../../../../features/wishlist/wishlistSlice";

import styles from "./WishlistCard.module.css";

function WishlistCard({ item, dispatch }) {
  return (
    <div className={styles.card}>
      {/* Product Image */}
      <img src={item.image} alt={item.name} className={styles.image} />

      {/* Product Content */}
      <div className={styles.content}>
        <p className={styles.brand}>{item.brand}</p>

        <h3>{item.name}</h3>

        <p className={styles.price}>${item.price}</p>

        <p className={styles.category}>{item.category}</p>

        {/* Actions */}
        <div className={styles.actions}>
          {/* Product Details */}
          <Link to={`/product/${item.id}`} className={styles.detailsBtn}>
            View Details
          </Link>

          {/* Remove Button */}
          <button
            className={styles.removeBtn}
            onClick={() => dispatch(removeFromWishlist(item.id))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
