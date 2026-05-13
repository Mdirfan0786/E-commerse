import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import ProductInfo from "./components/ProductInfo/ProductInfo";

import RecentlyViewed from "./components/RecentlyViewed/RecentlyViewed";

import styles from "./ProductDetails.module.css";

function ProductDetail() {
  // Get product id from URL
  const { id } = useParams();

  // Redux dispatch
  const dispatch = useDispatch();

  // Get all products
  const products = useSelector((state) => state.products.all);

  // Find matching product
  const product = products.find((item) => item.id === Number(id));

  // Save recently viewed products
  useEffect(() => {
    if (!product) return;

    const viewedProducts =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    // Remove duplicates
    const updatedViewed = viewedProducts.filter(
      (itemId) => itemId !== product.id,
    );

    // Add latest product
    updatedViewed.unshift(product.id);

    // Keep last 5
    const lastFiveProducts = updatedViewed.slice(0, 5);

    localStorage.setItem("recentlyViewed", JSON.stringify(lastFiveProducts));
  }, [product]);

  // Product not found
  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  // Recently viewed ids
  const viewedIds = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

  // Recently viewed products
  const recentProducts = products.filter(
    (p) => viewedIds.includes(p.id) && p.id !== product.id,
  );

  return (
    <div className={styles.container}>
      {/* Product Info */}
      <ProductInfo product={product} dispatch={dispatch} />

      {/* Recently Viewed */}
      <RecentlyViewed recentProducts={recentProducts} />
    </div>
  );
}

export default ProductDetail;
