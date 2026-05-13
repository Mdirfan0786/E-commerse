import React from "react";

import {
  filterByCategory,
  filterByPrice,
  resetFilters,
} from "../../../../features/products/productsSlice";

import styles from "./FilterButtons.module.css";

function FilterButtons({ dispatch }) {
  return (
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
  );
}

export default FilterButtons;
