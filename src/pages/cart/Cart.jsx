import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { removeFromCart, updateQuantity } from "../../features/cart/cartSlice";

import styles from "./Cart.module.css";

function Cart() {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Redux dispatch
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }, [cartItems]);

  // Increase quantity
  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      }),
    );
  };

  // Decrease quantity
  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      dispatch(removeFromCart(item.id));
      return;
    }

    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      }),
    );
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your cart is empty 🛒</h2>

        <Link to="/" className={styles.shopBtn}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Shopping Cart</h1>

      <div className={styles.wrapper}>
        {/* Cart Items */}
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.card}>
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
              <button
                className={styles.removeBtn}
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className={styles.summary}>
          <h2>Order Summary</h2>

          <div className={styles.summaryRow}>
            <p>Items</p>

            <p>{cartItems.length}</p>
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
      </div>
    </div>
  );
}

export default Cart;
