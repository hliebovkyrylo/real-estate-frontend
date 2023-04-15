import React from "react";

import styles from "./userInfo.module.scss";

import noavatar from "../../assets/images/avatar/no-avatar.png";

export const UserInfo = ({ avatarUrl, firstName, lastName }) => {
    return (
        <div className={styles.root}>
            <img className={styles.avatar} src={avatarUrl ? `process.env.REACT_APP_API_URL${avatarUrl}` : noavatar} alt="Upload image" />
            <div className={styles.userInfo}>
                <div className={styles.name}>{firstName}</div>
                <div className={styles.surname}>{lastName}</div>
            </div>
        </div>
    )
};