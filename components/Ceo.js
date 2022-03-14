import React from "react";
import styles from '../styles/ceo.module.css';
import useEmblaCarousel from 'embla-carousel-react';


const CeoSection = () =>{

    const [emblaRef] = useEmblaCarousel()

    return(
        <div className={styles.mainContainer}>
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
            </div>
            <div className={styles.reviewCarousel}>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide">
                            <img src="/customer1" alt="customer1" />
                        </div>
                        <div className="embla__slide">
                            <img src="/customer5" alt="customer2"/>
                        </div>
                        <div className="embla__slide">
                            <img src="/customer6" alt="customer3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CeoSection;