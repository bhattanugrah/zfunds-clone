import React from "react";
import styles from '../styles/compare.module.css';



export const Comparison = () =>{
    return(
        <div className={styles.mainContainer}>
            <div className={styles.titleSection}>
                <p className={styles.title}>
                    Dedicated to your gains, not to make you transact
                </p>
                <p className={styles.subTitle}>
                    With ZFunds, you pick the right fund each time.
                </p>
            </div>
            <div className={styles.comparisonSection}>
                <img src="./compare.png" alt="comparison"/>
            </div>
            <div className={styles.comparisonFooter}>
                <p className={styles.footerTitle}>
                    Know more about how we pick top funds and create the best possible portfolio for you
                </p>
                <div className={styles.viewBtn}>
                    <button>View our Research and Model Portfolios</button>
                </div>
            </div>
        </div>
    )
}