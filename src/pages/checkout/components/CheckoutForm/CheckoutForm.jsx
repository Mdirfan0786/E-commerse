import React from "react";

import styles from "./CheckoutForm.module.css";

function CheckoutForm({ formData, handleChange, handleSubmit }) {
  return (
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

      {/* Payment Method */}
      <div className={styles.inputGroup}>
        <label>Payment Method</label>

        <select name="payment" value={formData.payment} onChange={handleChange}>
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
  );
}

export default CheckoutForm;
