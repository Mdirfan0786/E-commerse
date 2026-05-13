import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Checkout.module.css";

function Checkout() {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Checkout form state
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    payment: "Cash on Delivery",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Calculate total price
  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }, [cartItems]);

  // Mock order submit
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Order placed successfully");

    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Checkout Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Checkout</h2>

          {/* Full Name */}
          <div className={styles.inputGroup}>
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div className={styles.inputGroup}>
            <label>Address</label>

            <textarea
              name="address"
              placeholder="Enter delivery address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Payment Type */}
          <div className={styles.inputGroup}>
            <label>Payment Method</label>

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option>Cash on Delivery</option>

              <option>UPI</option>

              <option>Credit Card</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.orderBtn}>
            Place Order
          </button>
        </form>

        {/* Order Summary */}
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
      </div>
    </div>
  );
}

export default Checkout;
