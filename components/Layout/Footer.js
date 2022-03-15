import React from "react";
import styles from "../../styles/footer.module.css"


export const Footer = () =>{
    return(
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={`row`}>
                    <div className="col-md-3  d-flex justify-content-between flex-column">
                        <div className="social d-flex">
                            <div className={`icon d-flex justify-content-center ${styles.icon}`}>
                                <a><img src="./linkedin.svg" alt="linked-in"/></a>
                            </div>
                            <div className={`icon d-flex justify-content-center ${styles.icon}`}>
                                <a><img src="./twitter.svg" alt="twitter"/></a>
                            </div>
                            <div className={`icon d-flex justify-content-center ${styles.icon}`}>
                                <a><img src="./facebook.svg" alt="facebook"/></a>
                            </div>
                            <div className={`icon d-flex justify-content-center ${styles.icon}`}>
                                <a><img src="./youtube.png" alt="youtube"/></a>
                            </div>
                            <div className={`icon d-flex justify-content-center ${styles.icon}`}>
                                <a><img src="./instagram.svg" alt="instagram"/></a>
                            </div>
                        </div>
                        <div className={styles.footerLogo}>
                            <p className={styles.Logo}>ZFUNDS</p>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className={`d-flex justify-content-between ${styles.flw}`}>
                            <div className={styles.f1}>
                                <p className="font-w">EXPLORE</p>
                                <div className="d-flex justify-content-between">
                                    <div className={styles.mr3}>
                                        <a title="Top Mutual Fund" href="/mutual-funds">Top Mutual fund</a>
                                        <a title="Saving Schemes" href="/m/saving-schemes">Saving Schemes</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.f1}>
                                <p className={styles.fontW}>ZFUNDS</p>
                                <div className="d-flex justify-content-between">
                                    <div className={styles.mr3}>
                                        <a title="Read Articles" href="/m">Read Articles</a>
                                        <a title="See Videos" href="/videos">See Videos</a>
                                        <a title="Ask Questions" href="/questions">Ask Questions</a>
                                        <a title="Find an Expert" href="/experts">Find an Expert</a>
                                        <a title="About Us" href="/about">About Us</a>
                                        <a title="Contact Us" href="/contact-us">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.f1}>
                                <p className={styles.fontW}>BUSINESS</p>
                                <div className="d-flex justify-content-between">
                                    <div className="list2 mb10">
                                        <a href="/advisor" title="Become ZF Expert">Become ZF Expert</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.f1}>
                                <p className={styles.fontW}>LEGAL</p>
                                <div className="list2">
                                    <a href="/privacy-policy" title="Privacy Policy">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-3 d-flex justify-content-end align-items-flex-end ${styles.alignItemFlexEnd}`}>
                        <div className={styles.copy}>
                            Copyright@2022 ZFunds
                            <br/>
                            All rights reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;