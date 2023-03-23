import React from "react";

import logo from "../../assets/images/logo/bi_house-door.png";

import styles from "./header.module.css";

export const Header = () => {
    const isAuth = false;

    const onClickLogout = () => {};

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>

                    <div className={styles.nav}>
                        {isAuth ? (
                            <div className={styles.nav__inner}>
                                <a className={styles.nav__link} href="/">Home</a>
                                <a className={styles.nav__link} href="/">About Us</a>
                                <a className={styles.nav__link} href="/">Other Projects</a>
                                <a className={styles.nav__link} href="/users/me">My Profile</a>
                            </div>
                        ) : (
                            <div className={styles.nav__inner}>
                                <a className={styles.nav__link} href="/">Home</a>
                                <a className={styles.nav__link} href="/">About Us</a>
                                <a className={styles.nav__link} href="/">Other Projects</a>
                                <a className={styles.nav__link} href="/users/me">Sign in</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};