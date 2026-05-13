import React from "react";

import styles from "./CartItem.module.css";

function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  return (
    <div className={styles.card}>
      {/* Product Image */}
      <img src={item.image} alt={item.name} className={styles.image} />

      {/* Product Info */}
      <div className={styles.info}>
        <p className={styles.brand}>{item.brand}</p>

        <h3>{item.name}</h3>

        <p className={styles.price}>${item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className={styles.quantityBox}>
        <button onClick={() => decreaseQuantity(item)}>-</button>

        <span>{item.quantity}</span>

        <button onClick={() => increaseQuantity(item)}>+</button>
      </div>

      {/* Remove Button */}
      <button className={styles.removeBtn} onClick={removeFromCart}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
