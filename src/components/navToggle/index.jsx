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
                        <a href="/">Home</a>
                        <a href="/users/me">My profile</a>
                        <a href="/users/update">Edit profile</a>
                        <a href="/projects/create">Create project</a>
                    </nav>
                ) : (
                    <nav>
                        <a href="/auth/login">Login</a>
                        <a href="/auth/register">Sign Up</a>
                    </nav>
                )}
                
            </div>	
        </>
    )
};