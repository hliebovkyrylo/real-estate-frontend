import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import logo from "../../assets/images/logo/bi_house-door.png";
import { HeaderDropdown } from "../../components/headerDropdown";
import { NavToggle } from "../../components/navToggle";

import styles from "./header.module.scss";

import { useSelector } from "react-redux";
import { isAuthSelector } from "../../redux/slices/auth";

import axios from "../../axios";

export const Header = () => {
    const isAuth = useSelector(isAuthSelector);
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get('/users/me')
        .then(res => setUser(res.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    <a href="/">
                        <img src={logo} alt="" />
                    </a> 
                    <div className={styles.headerForPc}>
                        {isAuth ? (
                            <div className={styles.nav__isAuth}>
                                <div className={styles.nav__inner}>
                                    <a className={styles.nav__link} href="/">Home</a>
                                    <Link className={styles.nav__link} to="projects" smooth={true}>Other Projects</Link>
                                    <Link className={styles.nav__link} to="contact" smooth={true}>Contact</Link>
                                </div>
                                <HeaderDropdown
                                    avatarUrl={user?.avatarUrl}
                                />
                            </div>
                        ) : (
                            <div className={styles.nav__inner}>
                                <a className={styles.nav__link} href="/">Home</a>
                                <Link className={styles.nav__link} to="projects" smooth={true}>Other Projects</Link>
                                <Link className={styles.nav__link} to="contact" smooth={true}>Contact</Link>
                                <a className={[styles.nav__link, styles.lastButton].join(' ')}href="/auth/login">Sign in</a>
                            </div>
                        )}  
                    </div>
                    <NavToggle />
                </div>
            </div>
        </div>
    )
};