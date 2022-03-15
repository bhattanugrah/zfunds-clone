import React from "react";
import styles from "../styles/expert.module.css";


const Expert = () =>{
    return(
        <div className={styles.mainContainer}>
            <div className={`d-flex flex-wrap justify-content-sm-center ${styles.expertContainer}`}>
                <div className={styles.expertImg}>
                    <img src="./expert1.png" alt="expert" />
                </div>
                <div className={styles.expertText}>
                    <p>
                        Join us as an Expert
                    </p>
                    <p>
                        Change how India Invests, join us on a mission to make Investments Sahi and Asaan across India
                    </p>
                    <div className={styles.getStartedBtn}>
                        <button className="shadow">Get Started</button>
                    </div>
                </div>
            </div>
            <div className={styles.divider} />
        </div>
    )
}

export default Expert;