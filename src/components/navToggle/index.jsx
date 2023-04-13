import React from "react";

import styles from "./navToggle.module.scss";

export const NavToggle = () => {
    return (
        <>
            <div class={styles.menu}>
                <input type="checkbox" id={styles.check} />
                <label for={styles.check} class={styles.button}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav>
                    <a href="/">Home</a>
                    <a href="/users/me">My profile</a>
                    <a href="/users/update">Edit profile</a>
                    <a href="/projects/create">Create project</a>
                </nav>
            </div>	
        </>
    )
};