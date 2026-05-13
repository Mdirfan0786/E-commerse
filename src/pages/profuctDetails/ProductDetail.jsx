import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./ProductDetails.module.css";

function ProductDetail() {
  // Get product id from URL
  const { id } = useParams();

  // Get all products from Redux store
  const products = useSelector((state) => state.products.all);

  // Find matching product
  const product = products.find((item) => item.id === Number(id));

  // Show message if product not found
  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Product image */}
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
        </div>

        {/* Product details */}
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

          {/* Action buttons */}
          <div className={styles.actions}>
            <button className={styles.cartBtn}>Add to Cart</button>

            <button className={styles.wishlistBtn}>Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
