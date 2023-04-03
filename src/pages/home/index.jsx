import React from "react";

import styles from "./home.module.scss";
import { Project, Contact, Footer } from "../../components";

import load_more from "../../assets/images/button/load_more.png";

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
            <section>
                <div className={styles.container}>
                    <div className={styles.projects}>
                        <div className={styles.projects__inner}>
                            {[...Array(6)].map(() => (
                                <Project
                                    poster="https://images.pexels.com/photos/10007306/pexels-photo-10007306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    price="200.000"
                                />
                            ))}
                        </div>
                        <button className={styles.button}>
                            <img className={styles.button_img} src={load_more} alt="" />
                        </button>
                    </div>
                </div>
            </section>
            <Contact />
            <Footer />
        </>
    )
};