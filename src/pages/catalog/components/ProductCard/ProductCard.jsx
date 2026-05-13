import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProductCard.module.css";

function ProductCard({ product, dispatch, addToCart }) {
  return (
    <div className={styles.card}>
      {/* Product Image */}
      <img src={product.image} alt={product.name} className={styles.image} />

      <div className={styles.content}>
        {/* Brand */}
        <p className={styles.brand}>{product.brand}</p>

        {/* Product Name */}
        <h3>{product.name}</h3>

        {/* Description */}
        <p className={styles.description}>{product.description}</p>

        {/* Price + Rating */}
        <div className={styles.priceRow}>
          <p className={styles.price}>${product.price}</p>

          <p className={styles.rating}>⭐ {product.rating}</p>
        </div>

        {/* Category */}
        <p className={styles.category}>{product.category}</p>

        {/* Stock */}
        <p className={styles.stock}>
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        {/* Actions */}
        <div className={styles.actions}>
          <Link to={`/product/${product.id}`} className={styles.link}>
            Details
          </Link>

          <button
            className={styles.cartBtn}
            onClick={() => {
              dispatch(addToCart(product));

              alert("Product added to cart successfully!");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
