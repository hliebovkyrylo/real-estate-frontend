import React from "react";

import styles from "./home.module.scss";
import { Project } from "../../components/projects";

export const Home = () => {
    return (
        <body>
            <div className={styles.intro}>
                <div className={styles.container}>
                    <div className={styles.intro__inner}>
                        <div className={styles.intro__title}>Find Your Dream Home with Crypto</div>
                    </div>
                </div>
            </div>

            <div className={styles.projects}>
                <div className={styles.container}>
                    <div className={styles.projects__inner}>
                        {[...Array(6)].map(() => (
                            <Project
                                poster="https://images.pexels.com/photos/10007306/pexels-photo-10007306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                price="200.000"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </body>
    )
};