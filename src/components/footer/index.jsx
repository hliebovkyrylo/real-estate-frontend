import React from "react";

import styles from "./footer.module.scss";

import logo from "../../assets/images/logo/bi_house-door.png";
import inst from "../../assets/images/icons/1.png";
import yt from "../../assets/images/icons/3.png";
import twitter from "../../assets/images/icons/2.png";

export const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.footer}>
                    <div className={styles.footer__items}>
                        <img src={logo} alt="" />
                        <div className={styles.text}>Homeverse.io is a gated community with a great location. Located downtown, you’re within walking distance of Parks</div>
                    </div>

                    <div className={styles.footer__items}>
                        <div className={styles.footer__title}>Contact Us</div>
                        <div className={styles.text}>Deam home villas San Diego, CA, USA</div>
                        <div className={styles.text}>025-777-3067</div>
                        <div className={styles.text}>admin@thehomeverse.io</div>
                    </div>

                    <div className={styles.footer__items}>
                        <div className={styles.footer__title}>Follow Us</div>
                        <div className={styles.footer}>
                            <a href="#">
                                <img className={styles.footer__links} src={inst} alt="" />
                            </a>
                            <a href="#">
                                <img className={styles.footer__links} src={yt} alt="" />
                            </a>
                            <a href="#">
                                <img className={styles.footer__links} src={twitter} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}