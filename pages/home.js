import react from "react";
import ThirdSection from "../components/ThirdSection";
import Nav from "../components/Layout/Nav";
import Head from "next/head";
import styles from "../styles/Home.module.css"
import CeoSection from "../components/Ceo";
import Expert from "../components/Expert";
import AboutUs from "../components/AboutUs";
import { Comparison } from "../components/Comparison";
import { Footer } from "../components/Layout/Footer";

const Home = () => {
    return ( 
        <div>
            <Head>
                <title>
                    ZFunds - Sahi.Asaan
                </title>
                <link rel="icon" href="/favicon-zf.ico" />
            </Head>
            <Nav />

            <div className={styles.container}>
                <div className={`px-5`}>
                    <div className="d-flex justify-content-between">
                        <div className={`${styles.mainContainer}`}>
                            <p className={`${styles.heading}`}>
                                Make Your Investments
                            </p>
                            <p className={`${styles.subHeading}`}>
                                Sahi.Asaan
                            </p>
                            <p className={`${styles.descriptionText}`}>
                                With us you have a trusted ZFunds expert by your side each step of your investment journey.
                            </p>
                            <div className={`${styles.whatsappButton}`}>
                                <button className="shadow"><i className="bi bi-whatsapp px-2"></i>Whatsapp Expert</button>
                                <span><p className="text-center">Chat with an Expert Now</p></span>
                            </div>
                        </div>
                        <div className={`${styles.phoneImage}`}>
                            <img src="./mobile.png" className="img-fluid" alt="phone"/>
                        </div>
                    </div>
                </div>
            </div>
            <section className={`${styles.main} ${styles.secondSectionContainer} ${styles.container}`}>
                <div className={`${styles.secondSection}`}>
                    <div className="d-flex">
                        <div className={`${styles.leftContent}`}>
                            <div className={`${styles.leftContainer}`}>
                                <div className={`${styles.heading}`}>
                                    <p><span>How Do we Ensure </span>Sahi Advice</p>
                                </div>
                                <div className={`${styles.pointers}`}>
                                    <div className="d-flex">
                                        <img src="/tick.png" alt="tick" className="align-self-center" height={50} width={50} />
                                        <div className="ms-5 mt-5">
                                            <p className={`${styles.pointerTitle}`} >Dedicated Research team</p>
                                            <p className={`${styles.pointerSubTitle}`}>Some of the most talented people with a proven track record to help you choose the right fund</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <img src="/tick.png" alt="tick" className="align-self-center" height={50} width={50} />
                                        <div className="ms-5 mt-5">
                                            <p className={`${styles.pointerTitle}`} >Certified & Experienced Experts</p>
                                            <p className={`${styles.pointerSubTitle}`}>Our advisors are certified, verified and have gone through intensive training</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.phoneImage2}`}>
                            <img src="/mobile-2.png" alt="mobile-2" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <ThirdSection />
            <CeoSection />
            <Expert />
            <AboutUs />
            <Comparison/>
            <Footer />
        </div>
    )
}

export default Home;