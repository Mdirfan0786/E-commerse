import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";

function ProductDetail() {
  const { id } = useParams();

  const product = useSelector((state) =>
    state.products.all.find((p) => p.id === parseInt(id)),
  );

  // Redux dispatch
  const dispatch = useDispatch();

  // if !product
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>

      <p>${product.price}</p>

      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>

      <button onClick={() => dispatch(addToWishlist(product))}>
        Add to Wishlist
      </button>
    </div>
  );
}

export default ProductDetail;
