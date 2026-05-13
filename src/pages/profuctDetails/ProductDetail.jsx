import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ProductDetails.module.css";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";

function ProductDetail() {
  // Get product id from URL
  const { id } = useParams();

  const dispatch = useDispatch();

  // Get all products from Redux store
  const products = useSelector((state) => state.products.all);

  // Find matching product
  const product = products.find((item) => item.id === Number(id));

  // Save recently viewed products
  useEffect(() => {
    if (!product) return;

    // Get existing viewed products
    const viewedProducts =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    // Remove duplicate product id
    const updatedViewed = viewedProducts.filter(
      (itemId) => itemId !== product.id,
    );

    // Add latest viewed product at beginning
    updatedViewed.unshift(product.id);

    // Keep only last 5 viewed products
    const lastFiveProducts = updatedViewed.slice(0, 5);

    // Save to localStorage
    localStorage.setItem("recentlyViewed", JSON.stringify(lastFiveProducts));
  }, [product]);

  // Show message if product not found
  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  // Get recently viewed ids
  const viewedIds = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

  // Get recently viewed products
  const recentProducts = products.filter(
    (p) => viewedIds.includes(p.id) && p.id !== product.id,
  );

  return (
    <div className={styles.container}>
      {/* Product Details Card */}
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

            <button
              className={styles.wishlistBtn}
              onClick={() => {
                dispatch(addToWishlist(product));

                alert("Added to wishlist successfully ❤️");
              }}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Recently Viewed Products */}
      {recentProducts.length > 0 && (
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
      )}
    </div>
  );
}

export default ProductDetail;
