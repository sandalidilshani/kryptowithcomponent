import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            
            <div className={styles.footerContent}>
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>KRYPTO</h4>
                    <ul className={styles.columnList}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Buy NFTs</li>
                        <li>Sell NFTs</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>MARKET</h4>
                    <ul className={styles.columnList}>
                        <li>Browse NFTs</li>
                        <li>Buy NFTs</li>
                        <li>Sell NFTs</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>CONTACT</h4>
                    <ul className={styles.columnList}>
                        <li>Email</li>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>JOIN OUR NEWSLETTER</h4>
                    <form className={styles.newsletterForm}>
                        <input type="email" placeholder="Email Address" className={styles.newsletterInput} />
                        <button type="submit" className={styles.newsletterButton}>Submit</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
