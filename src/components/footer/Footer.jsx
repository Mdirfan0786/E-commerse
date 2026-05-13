import React from "react";
import { Link } from "react-router-dom";

import styles from "./footer.module.css";
import { SOCIAL_LINKS } from "../../constant/socialLinks";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        {/* Brand Section */}
        <div className={styles.brandSection}>
          <h2>ShopSphere</h2>

          <p>
            Premium ecommerce experience with modern shopping and smooth user
            experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>

          <Link to="/">Products</Link>

          <Link to="/">Categories</Link>

          <Link to="/">Contact</Link>
        </div>

        {/* Support Links */}
        <div className={styles.links}>
          <h4>Support</h4>

          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
            Help Center
          </a>

          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
            Privacy Policy
          </a>

          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
            Terms & Conditions
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottom}>
        © 2026 ShopSphere. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
