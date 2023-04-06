import React from "react";
import { Link } from "react-scroll";

import logo from "../../assets/images/logo/bi_house-door.png";

import styles from "./header.module.scss";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../redux/slices/auth";

export const Header = () => {
    const isAuth = useSelector(isAuthSelector);

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
                                <Link className={styles.nav__link} to="projects" smooth={true}>Other Projects</Link>
                                <Link className={styles.nav__link} to="contact" smooth={true}>Contact</Link>
                                <a className={styles.nav__link} href="/users/me">My Profile</a>
                            </div>
                        ) : (
                            <div className={styles.nav__inner}>
                                <a className={styles.nav__link} href="/">Home</a>
                                <Link className={styles.nav__link} to="projects" smooth={true}>Other Projects</Link>
                                <Link className={styles.nav__link} to="contact" smooth={true}>Contact</Link>
                                <a className={styles.nav__link} href="/auth/login">Sign in</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};