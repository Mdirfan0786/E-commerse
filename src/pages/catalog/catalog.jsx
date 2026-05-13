import { useDispatch, useSelector } from "react-redux";

import {
  filterByCategory,
  filterByPrice,
  resetFilters,
} from "../../features/products/productsSlice";

import { addToCart } from "../../features/cart/cartSlice";

import FilterButtons from "./components/FilterButtons/FilterButtons";
import ProductCard from "./components/ProductCard/ProductCard";

import styles from "./catalog.module.css";

function Catalog() {
  // Get filtered products
  const products = useSelector((state) => state.products.filtered);

  // Redux dispatch
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Product Catalog</h1>

      {/* Filters */}
      <FilterButtons dispatch={dispatch} />

      {/* Product Grid */}
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            dispatch={dispatch}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
