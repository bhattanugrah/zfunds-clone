import React from "react";
import styles from "../styles/about.module.css"
import { useEffect } from "react";

const AboutUs = () =>{

    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])

    return(
        <div>
            <div className={`d-flex ${styles.mainContainer}`}>
                <div className={styles.leftSide}>
                    <p>More about us</p>
                </div>
                <div className={styles.accordionContainer}>
                    <div className="accordion" id="accordionExample">
                        <div className={`accordion-item ${styles.accordionItem}`}>
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How does ZFunds work?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className={`accordion-body ${styles.accordionBody}`}>
                                    ZFunds is India's only Mutual Funds Platform where you can get advice from top experts about your investments.You can download our app or send us a message on WhatsApp and an expert will help you plan your investments.
                                    <div className="mt-3">
                                        <a href="#">Know more about us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`accordion-item ${styles.accordionItem}`}>
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Is my money safe with ZFunds?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    We have integrated with Bombay Stock Exchange to process your transactions. This means that your money never enters ZFunds bank account. It directly goes from you to BSE and then to the Mutual Fund company you invest in , ensuring 100% safety.
                                </div>
                            </div>
                        </div>
                        <div className={`accordion-item ${styles.accordionItem}`}>
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Is it free?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    With ZFunds you invest in Regular Mutual Funds, which means hat the Mutual Fund company you choose to invest with pays your ZFunds Expert a small commission. There is no other fees that we charge.
                                </div>
                            </div>
                        </div>
                        <div className={`accordion-item ${styles.accordionItem}`}>
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How can I connect with an expert?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    You can simply download our App here. Or drop us a WhatsApp here.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;