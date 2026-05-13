import React from "react";
import { Link } from "react-router-dom";

import styles from "./EmptyCart.module.css";

function EmptyCart() {
  return (
    <div className={styles.emptyCart}>
      <h2>Your cart is empty 🛒</h2>

      <Link to="/" className={styles.shopBtn}>
        Continue Shopping
      </Link>
    </div>
  );
}

export default EmptyCart;
