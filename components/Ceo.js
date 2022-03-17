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
                        <p className={`${styles.ceoName}`}>Manish Kothari - CEO</p>
                    </div>
                    <div className={styles.rightSection}>
                        <p className={styles.firstLine}>{'"So far only the rich have had access to the right financial advice'}</p>
                        <p className={styles.secondLine}>{'We are changing that by ensuring every investor has a dedicated experts to maximize your gains"'}</p>
                        <p className={`${styles.ceo} ${styles.deskHide}`}>- Manish Kothari - CEO</p>
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
            <div className={styles.reviewSectionMobile}>
                <div className={styles.reviewMobile}>
                    <div className={styles.reviewM}>
                        <p className={styles.reviewTitle}>
                            10L people
                            <br/>
                            benefited
                        </p>
                        <div className={styles.reviewBox}>
                            <div className={styles.reviewContainer}>
                                <p className={styles.writeUp}>
                                    {'"Nice app. Easy to view your portfolio and invest more. User friendly and easy to contact your advisor on one click"'}
                                </p>
                                <div className={styles.userImage}>
                                    <img src="./c1.png" alt="user1" />
                                    <p className={styles.userName}>-Priyanka Gupta</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.reviewMobile}>
                    <div className={styles.reviewM}>
                        <p className={styles.reviewTitle}>
                            500+ crs invested
                            <br/>
                            on expert advice
                        </p>
                        <div className={styles.reviewBox}>
                            <div className={styles.reviewContainer}>
                                <p className={styles.writeUp}>
                                    {'"Amazing app and company for mutual fund investments in India. Personalized Expert Advice available for your best benefit. Love it"'}
                                </p>
                                <div className={styles.userImage}>
                                    <img src="./c2.png" alt="user1" />
                                    <p className={styles.userName}>-Jayant Lakhotia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.reviewMobile}>
                    <div className={styles.reviewM}>
                        <p className={styles.reviewTitle}>
                            3000+ Verified
                            <br/>
                            Experts
                        </p>
                        <div className={styles.reviewBox}>
                            <div className={styles.reviewContainer}>
                                <p className={styles.writeUp}>
                                    {'"I am very happy with the review of my portfolio. Mr.Akshit answered all my questions and helped me make a healthy portfolio with a great SWP plan"'}
                                </p>
                                <div className={styles.userImage}>
                                    <img src="./c3.png" alt="user1" />
                                    <p className={styles.userName}>-Tapan K Rana</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CeoSection;