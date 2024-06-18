// components/Navbar.js
import React from 'react';
import styles from "./Header.module.css"
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.navHeader}>
  <div className={styles.title}>KKYPTO</div>
  <nav className={styles.navbar}>
    <a href="#" className="hover:underline">about</a>
    <a href="#" className="hover:underline">pricing</a>
    <a href="#" className="hover:underline">contact</a>
    <a href="#" className="hover:underline">buy nfts</a>
  </nav>
</header>

  );
};

export default Header;