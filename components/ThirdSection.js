import React from "react";
import styles from "../styles/third.module.css";


const ThirdSection = () =>{
    return(
        <div className={styles.mainContainer}>
            <div className={`d-flex py-3 ${styles.leftMargin}`}>
                <div className={`${styles.leftContainer}`}>
                    <div className={styles.leftContent}>
                        <div className={`d-flex flex-wrap justify-content-center ${styles.title}`}>
                            <p>
                                <span>How do we make </span>
                            </p>
                            <p>Investing Asaan?</p>
                        </div>
                        <div className={`${styles.pointer}`}>
                            <div className="d-flex mt-5">
                                <img src="/tick-2.png" alt="tick-2" className="align-self-center" height={50} width={50} />
                                <div className="ms-5">
                                    <p className={`${styles.pointerTitle}`} >SIP Packs</p>
                                    <p className={`${styles.pointerSubTitle}`}>Recommended funds to help you reach your goals faster</p>
                                </div>
                            </div>
                            <div className="d-flex mt-5">
                                <img src="/tick-2.png" alt="tick-2" className="align-self-center" height={50} width={50} />
                                <div className="ms-5">
                                    <p className={`${styles.pointerTitle}`} >Easy investing for first time investors</p>
                                    <p className={`${styles.pointerSubTitle}`}>Paperless KYC and SIP registration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.phoneImage} align-self-center`}>
                    <img src="/mobile-3.png" alt="mobile-3" className="img-fluid" />
                </div>
            </div>
            <hr className={styles.lineBreak}></hr>
            <div className={`${styles.knowYourFundsContainer}`}>
                <div className={styles.knowYourFundsContent}>
                    <p className={`${styles.knowYourFundsTitle}`}>
                        <span>Know Your Funds - </span>in the language you understand
                    </p>
                    <p className={`${styles.knowYourFundsSubTitle}`}>
                        We don't use jargons, ratios or numbers to explain you anything. We do this in 6 languages
                    </p>
                </div>
                <div className={`${styles.carouselSection}`}>
                    <div className={styles.carouselItem}>
                        <a><img src="./homecarousel1.png" className="img-fluid" alt="carousel-1" /></a>
                    </div>
                    <div className={styles.carouselItem}>
                        <a><img src="./homecarousel2.png"  className="img-fluid" alt="carousel-2" /></a>
                    </div>
                    <div className={styles.carouselItem}>
                        <a><img src="./homecarousel3.png"  className="img-fluid"  alt="carousel-3" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection;