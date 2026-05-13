import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import OrderSummary from "./components/OrderSummary/OrderSummary";

import styles from "./Checkout.module.css";

function Checkout() {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

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

    alert("Order placed successfully!");

    console.log(formData);

    // Redirect to home page
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Checkout Form */}
        <CheckoutForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        {/* Order Summary */}
        <OrderSummary cartItems={cartItems} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default Checkout;
