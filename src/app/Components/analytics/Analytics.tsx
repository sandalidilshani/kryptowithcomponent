import styles from './Analytics.module.css'
const AnalyticsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.imageContainer}>
          <img
            src="/analytics1.png"
            alt="Analytics Image"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>ANALYTICS</h2>
          <h1 className={styles.title}>
            Built-In Analytics To Track Your Nfts
          </h1>
          <p className={styles.description}>
            Use our built-in analytics dashboard to pull valuable insights and
            monitor the value of your Krypto portfolio over time.
          </p>
          <button className={styles.button}>VIEW OUR PRICING</button>
        </div>
      </div>

      <div className={styles.section2}>
      <div className={styles.textContainer}>
      <h2 className={styles.heading}>ANALYTICS</h2>
        <h1 className={styles.title}>Built-In Analytics To Track Your Nfts</h1>
        <p className={styles.description}>
          Use our built-in analytics dashboard to pull valuable insights and
          monitor the value of your Krypto portfolio over time.
        </p>
        <button className={styles.button}>VIEW OUR PRICING</button>
        </div>
        
        <div className={styles.imageContainer}>
          <img
            src="/analytics2.png"
            alt="Analytics Image"
            className={styles.image}
          />
         
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
