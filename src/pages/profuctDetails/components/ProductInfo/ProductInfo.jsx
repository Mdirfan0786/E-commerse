import React from "react";

import { addToCart } from "../../../../features/cart/cartSlice";

import { addToWishlist } from "../../../../features/wishlist/wishlistSlice";

import styles from "./ProductInfo.module.css";

function ProductInfo({ product, dispatch }) {
  return (
    <div className={styles.card}>
      {/* Product Image */}
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>

      {/* Product Details */}
      <div className={styles.details}>
        <p className={styles.brand}>{product.brand}</p>

        <h1 className={styles.title}>{product.name}</h1>

        <p className={styles.category}>{product.category}</p>

        <div className={styles.ratingRow}>
          <span className={styles.rating}>⭐ {product.rating}</span>

          <span className={styles.reviews}>({product.reviews} Reviews)</span>
        </div>

        <h2 className={styles.price}>${product.price}</h2>

        <p className={styles.description}>{product.description}</p>

        <p className={styles.stock}>
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={styles.cartBtn}
            onClick={() => {
              dispatch(addToCart(product));

              alert("Product added to cart successfully 🛒");
            }}
          >
            Add to Cart
          </button>

          <button
            className={styles.wishlistBtn}
            onClick={() => {
              dispatch(addToWishlist(product));

              alert("Added to wishlist ❤️");
            }}
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
