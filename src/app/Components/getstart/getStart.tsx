import React from "react";
import styles from './getstart.module.css'

export default function getStart() {
  return (
    <div className={styles.container}>
<div className={styles.GetStartContainer}>
      <p className={styles.ctaText}>Are you ready?</p>
      <h2 className={styles.ctaHeading}>Be A Part Of The Next Big Thing</h2>
      <button className={styles.ctaButton}>Get Started</button>
    </div>
    </div>
    
  );
}
