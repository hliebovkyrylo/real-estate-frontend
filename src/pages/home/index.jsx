import React from "react";

import styles from "./home.module.css";

export const Home = () => {
    return (
        <>
            <div className={styles.intro}>
                <div className={styles.container}>
                    <div className={styles.intro__inner}>
                        <div className={styles.intro__title}>Find Your Dream Home with Crypto</div>
                    </div>
                </div>
            </div>
        </>
    )
};