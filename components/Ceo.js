import React from "react";
import styles from '../styles/ceo.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import Carousel from 'react-elastic-carousel';


const CeoSection = () =>{
    return(
        <div>
            <div className={`${styles.ceoQuoteSection}`}>
                <div className={`d-flex align-items-center`}>
                    <div className={`${styles.leftSection}`}>
                        <img src="./ceo1.png" alt="ceo" />
                        <p className={styles.ceoName}>Manish Kothari - CEO</p>
                    </div>
                    <div className={styles.rightSection}>
                        <p className={styles.firstLine}>"So far only the rich have had access to the right financial advice</p>
                        <p className={styles.secondLine}>We are changing that by ensuring every investor has a dedicated experts to maximize your gains"</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.reviewSection}`}>
                <div className={`d-flex justify-content-between ${styles.featureSection}`}>
                    <p className={styles.reviewFeatures}>
                        3000+ Verified<br />Experts
                    </p>
                    <p className={styles.reviewFeatures}>
                        500+ crs invested<br/> on expert advice
                    </p>
                    <p className={styles.reviewFeatures}>
                        10L people<br/> benefited   
                    </p>
                </div>
                <div className={styles.reviewCarousel}>
                    <Carousel itemsToShow={1}>
                        <img src="./customer1.png" alt="customer1" />
                        <img src="./customer5.png" alt="customer1" />
                        <img src="./customer6.png" alt="customer1" />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default CeoSection;