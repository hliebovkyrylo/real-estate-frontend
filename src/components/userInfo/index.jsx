import React from "react";

import styles from "./userInfo.module.scss";

import noavatar from "../../assets/images/avatar/no-avatar.png";

export const UserInfo = ({ avatarUrl, firstName, lastName }) => {
    return (
        <div className={styles.root}>
            <img className={styles.avatar} src={`http://localhost:4000${avatarUrl}` || noavatar} alt="" />
            <div className={styles.userInfo}>
                <div className={styles.name}>{firstName}</div>
                <div className={styles.surname}>{lastName}</div>
            </div>
        </div>
    )
};