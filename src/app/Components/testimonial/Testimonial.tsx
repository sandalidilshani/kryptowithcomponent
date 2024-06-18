import React from 'react';
import styles from './Testimonial.module.css'
const Testimonials = () => {
    return (
        <div className={styles.testimonialsContainer}>
            <h2 className={styles.heading}>Testimonials</h2>
            <h3 className={styles.subheading}>Read What Others Have To Say</h3>
            <div className={styles.testimonialList}>
                <div className={styles.testimonial}>
                    <img src="/user.png" alt="Olivia Cole" className={styles.image} />
                    <h4 className={styles.name}>Olivia Cole</h4>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                    </p>
                </div>
                <div className={styles.testimonial}>
                    <img src="/user.png" alt="Olivia Cole" className={styles.image} />
                    <h4 className={styles.name}>Olivia Cole</h4>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                    </p>
                </div>
                <div className={styles.testimonial}>
                    <img src="/user.png" alt="Olivia Cole" className={styles.image} />
                    <h4 className={styles.name}>Olivia Cole</h4>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
