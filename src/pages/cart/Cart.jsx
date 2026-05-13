import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart, updateQuantity } from "../../features/cart/cartSlice";

import CartItem from "./components/CartItem/CartItem";
import CartSummary from "./components/cartSummary/CartSummary";
import EmptyCart from "./components/EmptyCart/EmptyCart";

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
    return <EmptyCart />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Shopping Cart</h1>

      <div className={styles.wrapper}>
        {/* Cart Items */}
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={() => dispatch(removeFromCart(item.id))}
            />
          ))}
        </div>

        {/* Order Summary */}
        <CartSummary totalPrice={totalPrice} totalItems={cartItems.length} />
      </div>
    </div>
  );
}

export default Cart;
