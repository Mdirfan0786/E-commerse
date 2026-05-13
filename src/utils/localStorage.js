export const loadCartFromStorage = () => {
  try {
    const cartData = localStorage.getItem("cartItems");

    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    return [];
  }
};

export const saveCartToStorage = (cartItems) => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.log(error);
  }
};
