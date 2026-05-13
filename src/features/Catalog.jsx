import { useSelector, useDispatch } from "react-redux";
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
      <button onClick={() => dispatch(filterByCategory("Electronics"))}>
        Electronics
      </button>

      <button onClick={() => dispatch(filterByPrice(100))}>Under $100</button>

      <button onClick={() => dispatch(resetFilters())}>All</button>

      {/* Products Grid */}
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>

            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
