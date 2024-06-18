import React from "react";

import styles from "./Hero.module.css";
import Image from "next/image";
export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.textConatiner}>
        <h1 className={styles.maintext}>
          Discover
          <br /> And
          <br /> Collect <br />
          Rare NFTs
        </h1>

        <p className={styles.describetext}>
          The most secure marketplace for buying <br />
          and selling unique crypto assets.
        </p>
        <div className={styles.herobuttonContent}>
          <button className={`${styles.heroButtons} ${styles.buynftButton}`}>
            BUY NFTs
          </button>
          <button className={`${styles.heroButtons} ${styles.sellnftButton}`}>
            SELL NFTs
          </button>
        </div>
      </div>

      <div className={styles.heroImageConatiner}>
        <img src="/main.png" alt="NFT Illustration" className={styles.image} />
      </div>
    </div>
  );
}
