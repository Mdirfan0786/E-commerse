import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.wrapper}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">ShopSphere</Link>
        </div>

        {/* Navigation Links */}
        <nav className={styles.navLinks}>
          <Link to="/">Home</Link>

          <Link to="/">Products</Link>

          <Link to="/">Categories</Link>

          <Link to="/">Wishlist</Link>
        </nav>

        {/* Cart Button */}
        <div className={styles.actions}>
          <button className={styles.cartBtn}>Cart</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
