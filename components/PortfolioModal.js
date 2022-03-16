import React from "react";
import styles from "../styles/modal.module.css"


export const PortfolioModal = () =>{
    return(
        <div className={`modal fade ${styles.portfolioLoginModal}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <img src="./closeIcon.svg" alt="close-icon" className={`${styles.closeIcon}`} data-bs-dismiss="modal"/>
                    <div className={`modal-body ${styles.signIn}`}>
                        <div className={`row`}>
                            <div className={`col-md-5 ${styles.padding}`}>
                                <div className={`${styles.leftSec}`}>
                                    <div className={`${styles.userLeft}`}>
                                        <h2 className={`${styles.leftTitle}`}>LOGIN</h2>
                                        <div className={`${styles.detailBox}`}>
                                            <p>Have all your questions answered by experts.</p>
                                            <p>Chat online with mutual fund Experts </p>
                                            <p>Get your portfolio reviewed for FREE.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-7`}>
                                <div className={`${styles.rightSign}`}>
                                    <form>
                                        <div className={`form-wrap ${styles.formWrap}`}>
                                            <div className={`form-group ${styles.formGroup}`}>
                                                <label>Mobile</label>
                                                <div>
                                                    <input type={"text"} placeholder="Enter 10 digit mobile Number" className={`${styles.inputControl}`}   maxLength={10}/>
                                                </div>
                                            </div>
                                        </div>
                                        <button className={`btn btn-primary form-submit ${styles.signBtn}`}>Sign In</button>
                                    </form>
                                    <div className={`${styles.newUser}`}>
                                        <div>
                                            <p className={`text-center ${styles.mt8}`}>
                                                New User 
                                                <span className={`${styles.fontW} ${styles.pointer}`}> Sign Up</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}