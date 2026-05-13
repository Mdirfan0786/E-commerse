import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetail() {
  const { id } = useParams();

  const products = useSelector((state) => state.products.items);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} width="300" />

      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <h2>${product.price}</h2>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
