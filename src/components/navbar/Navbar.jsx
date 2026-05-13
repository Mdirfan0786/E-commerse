import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.wrapper}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">ShopSphere</Link>
        </div>

        {/* Navigation */}
        <nav className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link to="/" onClick={() => setIsOpen(false)}>
            Products
          </Link>

          <Link to="/" onClick={() => setIsOpen(false)}>
            Categories
          </Link>

          <Link to="/" onClick={() => setIsOpen(false)}>
            Wishlist
          </Link>
        </nav>

        {/* Right Actions */}
        <div className={styles.actions}>
          {/* Cart Navigation */}
          <Link
            to="/cart"
            className={styles.cartBtn}
            onClick={() => setIsOpen(false)}
          >
            <FiShoppingCart size={18} />
            Cart
          </Link>

          {/* Hamburger Button */}
          <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
