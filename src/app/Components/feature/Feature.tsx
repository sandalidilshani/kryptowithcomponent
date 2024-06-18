/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Feature.module.css"
function Feature() {
  return (
    <div className={styles.featureContainer}>
    <p className={styles.mainText}>FEATURED ON</p>

      
      
      <div className={styles.featuredimgContainer}>
        <img
          alt="TechCrunch"
          src="/1.png"
          width="164"
          height="61"
          className="object-contain"
        />
        <img
          alt="FastCompany"
          src="/2.png"
          width="145"
          height="23"
          className="object-contain"
        />
        <img
          alt="MIT"
          src="/3.png"
          width="59"
          height="33"
          className="object-contain"
        />
        <img
          alt="Forbes"
          src="/4.png"
          width="99"
          height="25"
          className="object-contain"
        />
      </div>
      
      </div>
      
  );
}

export default Feature;