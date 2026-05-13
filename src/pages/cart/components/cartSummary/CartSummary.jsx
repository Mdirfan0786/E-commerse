import React from "react";
import { Link } from "react-router-dom";

import styles from "./CartSummary.module.css";

function CartSummary({ totalPrice, totalItems }) {
  return (
    <div className={styles.summary}>
      <h2>Order Summary</h2>

      <div className={styles.summaryRow}>
        <p>Items</p>

        <p>{totalItems}</p>
      </div>

      <div className={styles.summaryRow}>
        <p>Total</p>

        <h3>${totalPrice}</h3>
      </div>

      {/* Checkout Button */}
      <Link to="/checkout" className={styles.checkoutBtn}>
        Proceed To Checkout
      </Link>
    </div>
  );
}

export default CartSummary;
