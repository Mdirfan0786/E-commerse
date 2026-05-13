import React from "react";

import styles from "./OrderSummary.module.css";

function OrderSummary({ cartItems, totalPrice }) {
  return (
    <div className={styles.summary}>
      <h2>Order Summary</h2>

      {cartItems.map((item) => (
        <div key={item.id} className={styles.summaryItem}>
          <div>
            <h4>{item.name}</h4>

            <p>Qty: {item.quantity}</p>
          </div>

          <p>${item.price * item.quantity}</p>
        </div>
      ))}

      {/* Total */}
      <div className={styles.total}>
        <h3>Total</h3>

        <h3>${totalPrice}</h3>
      </div>
    </div>
  );
}

export default OrderSummary;
