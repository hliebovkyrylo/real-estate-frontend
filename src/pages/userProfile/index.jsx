import React from "react";

import styles from "./userProfile.module.scss";

import { UserInfo } from "../../components";

import add from "../../assets/images/button/add.jpg";

export const UserProfile = () => {
    const onClickLogout = () => {};

    return (
        <>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <UserInfo 
                        avatarUrl="https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU="
                        firstName="Jhon"
                        lastName="Doe"
                    />
                    <div className={styles.buttons}>
                        <a className={styles.btn} href="/users/update">Edit</a>
                        <button className={styles.btn} onClick={onClickLogout}>Logout</button>
                    </div>
                    <h2>Projects</h2>
                    <div className={styles.createProject}>
                        <a href="/posts">
                            <img className={styles.img_link} src={add} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};