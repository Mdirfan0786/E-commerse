import React from "react";

import { useDispatch, useSelector } from "react-redux";

import WishlistCard from "./components/WishlistCard/WishlistCard";

import EmptyWishlist from "./components/EmptyWishlist/EmptyWishlist";

import styles from "./Wishlist.module.css";

function Wishlist() {
  // Get wishlist items
  const wishlistItems = useSelector((state) => state.wishlist.items);

  // Redux dispatch
  const dispatch = useDispatch();

  // Empty wishlist state
  if (wishlistItems.length === 0) {
    return <EmptyWishlist />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Wishlist</h1>

      {/* Wishlist Grid */}
      <div className={styles.grid}>
        {wishlistItems.map((item) => (
          <WishlistCard key={item.id} item={item} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
