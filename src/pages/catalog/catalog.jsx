import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  filterByCategory,
  filterByPrice,
  resetFilters,
} from "../../features/products/productsSlice";

import { addToCart } from "../../features/cart/cartSlice";

import styles from "./catalog.module.css";

function Catalog() {
  // Get filtered products from Redux store
  const products = useSelector((state) => state.products.filtered);

  // Redux dispatch function
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Product Catalog</h1>

      {/* Filter buttons */}
      <div className={styles.filters}>
        <button onClick={() => dispatch(filterByCategory("Electronics"))}>
          Electronics
        </button>

        <button onClick={() => dispatch(filterByCategory("Fashion"))}>
          Fashion
        </button>

        <button onClick={() => dispatch(filterByCategory("Furniture"))}>
          Furniture
        </button>

        <button onClick={() => dispatch(filterByPrice(100))}>Under $100</button>

        <button onClick={() => dispatch(resetFilters())}>All Products</button>
      </div>

      {/* Products grid */}
      <div className={styles.grid}>
        {products.map((p) => (
          <div key={p.id} className={styles.card}>
            {/* Product image */}
            <img src={p.image} alt={p.name} className={styles.image} />

            <div className={styles.content}>
              {/* Product brand */}
              <p className={styles.brand}>{p.brand}</p>

              {/* Product name */}
              <h3>{p.name}</h3>

              {/* Product description */}
              <p className={styles.description}>{p.description}</p>

              {/* Price and rating */}
              <div className={styles.priceRow}>
                <p className={styles.price}>${p.price}</p>

                <p className={styles.rating}>⭐ {p.rating}</p>
              </div>

              {/* Product category */}
              <p className={styles.category}>{p.category}</p>

              {/* Product stock status */}
              <p className={styles.stock}>
                {p.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>

              {/* Action buttons */}
              <div className={styles.actions}>
                {/* Product details page */}
                <Link to={`/product/${p.id}`} className={styles.link}>
                  Details
                </Link>

                {/* Add to cart button */}
                <button
                  className={styles.cartBtn}
                  onClick={() => {
                    dispatch(addToCart(p));

                    alert("Product added to cart successfully!");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
