import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  filterByCategory,
  filterByPrice,
  resetFilters,
} from "../features/products/productsSlice";

function Catalog() {
  // Redux store se filtered products lena
  const products = useSelector((state) => state.products.filtered);

  // Redux dispatch
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Product Catalog</h1>

      {/* Filter Buttons */}
      <div>
        <button onClick={() => dispatch(filterByCategory("Electronics"))}>
          Electronics
        </button>

        <button onClick={() => dispatch(filterByPrice(100))}>Under $100</button>

        <button onClick={() => dispatch(resetFilters())}>All</button>
      </div>

      {/* Products Grid */}
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>

            <p>${p.price}</p>

            {/* Product Detail Page Link */}
            <Link to={`/product/${p.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
