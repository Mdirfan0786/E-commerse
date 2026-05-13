import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { removeFromWishlist } from "../../features/wishlist/wishlistSlice";

import styles from "./Wishlist.module.css";

function Wishlist() {
  // Get wishlist items from Redux store
  const wishlistItems = useSelector((state) => state.wishlist.items);

  // Redux dispatch
  const dispatch = useDispatch();

  // Empty wishlist state
  if (wishlistItems.length === 0) {
    return (
      <div className={styles.emptyWishlist}>
        <h2>Your wishlist is empty ❤️</h2>

        <Link to="/" className={styles.shopBtn}>
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Wishlist</h1>

      {/* Wishlist Grid */}
      <div className={styles.grid}>
        {wishlistItems.map((item) => (
          <div key={item.id} className={styles.card}>
            {/* Product Image */}
            <img src={item.image} alt={item.name} className={styles.image} />

            {/* Product Content */}
            <div className={styles.content}>
              <p className={styles.brand}>{item.brand}</p>

              <h3>{item.name}</h3>

              <p className={styles.price}>${item.price}</p>

              <p className={styles.category}>{item.category}</p>

              {/* Action Buttons */}
              <div className={styles.actions}>
                {/* Product Details */}
                <Link to={`/product/${item.id}`} className={styles.detailsBtn}>
                  View Details
                </Link>

                {/* Remove Wishlist */}
                <button
                  className={styles.removeBtn}
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
