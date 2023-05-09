import React from "react";

import styles from "./navToggle.module.scss";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../redux/slices/auth";

export const NavToggle = () => {
    const isAuth = useSelector(isAuthSelector);

    return (
        <>
            <div class={styles.menu}>
                <input type="checkbox" id={styles.check} />
                <label for={styles.check} class={styles.button}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                {isAuth ? (
                    <nav>
                        <a className={styles.a} href="/">Home</a>
                        <a className={styles.a} href="/users/me">My profile</a>
                        <a className={styles.a} href="/users/update">Edit profile</a>
                        <a className={styles.a} href="/projects/create">Create project</a>
                    </nav>
                ) : (
                    <nav>
                        <a className={styles.a} href="/auth/login">Login</a>
                        <a className={styles.a} href="/auth/register">Sign Up</a>
                    </nav>
                )}
                
            </div>	
        </>
    )
};