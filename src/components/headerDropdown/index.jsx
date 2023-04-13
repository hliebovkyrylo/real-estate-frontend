import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthSelector, logout } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

import styles from "./headerDropdown.module.scss";

import noavatar from "../../assets/images/avatar/no-avatar.png";

export const HeaderDropdown = ({ avatarUrl }) => {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();
    const isAuth = useSelector(isAuthSelector);

    const handleOpen = () => {
        setIsActive(!isActive);
    };

    ////// exit button //////
    const onClickLogout = () => { 
        if (window.confirm('Are you sure you want to logout?')) {
            dispatch(logout());
            window.localStorage.removeItem('token');
        }
    };

    if (!window.localStorage.getItem('token') && !isAuth) { // does not allow to the page if the user is not authorized
        return <Navigate to="/" />
    }

    return (
        <div className={styles.root}>
            <button className={styles.img} onClick={handleOpen} type="button">
                <img className={styles.img} src={avatarUrl ? `http://localhost:4000${avatarUrl}` : noavatar} alt="" />
            </button>
            {isActive ? (
                <>
                    <div className={styles.buttons}>
                        <button type="button" className={styles.href}>
                            <a className={styles.href} href="/users/me">My profile</a>
                        </button>
                        <button type="button" className={styles.href}>
                            <a className={styles.href} href="/users/update">Edit profile</a>
                        </button>
                        <button type="button" className={styles.href}>
                            <a className={styles.href} href="/projects/create">Create project</a>
                        </button>
                        <button onClick={onClickLogout} className={styles.href} type="button">Log out</button>
                    </div>
                </>
            ) : null}
        </div>
    )
};