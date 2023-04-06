import React from "react";
import { useDispatch } from "react-redux";

import styles from "./userProfile.module.scss";

import { UserInfo } from "../../components";
import { logout } from "../../redux/slices/auth";

import add from "../../assets/images/button/add.jpg";


export const UserProfile = () => {
    const dispatch = useDispatch();

    const onClickLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            dispatch(logout());
            window.localStorage.removeItem('token');
        }
    };

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
                        <a href="/projects/create">
                            <img className={styles.img_link} src={add} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};