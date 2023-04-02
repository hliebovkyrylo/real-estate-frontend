import React, { useMemo, useState } from "react";

import styles from "./editProfile.module.scss";

import { UserInfo } from "../../components/userInfo";
import { useCallback } from "react";

export const EditProfile = () => {
    //delete account
    const onClickDelete = () => {};

    //upload image
    const imageUrl = '';
    const changeFile = () => {};
    const onClickRemoveImage = () => {};

    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.items}>
                        <h1>Edit Profile</h1>
                        <form action="#">
                            <button className={styles.btn__avatar}>
                                <UserInfo />
                            </button>
                            <input type="file" onChange={changeFile} hidden></input>
                            {imageUrl && (
                                <button onClick={onClickRemoveImage}>Delete image</button>
                            )}
                            {imageUrl && (
                                <img src={`http://localhost:4000${imageUrl}`} alt="Uploaded" />
                            )}
                            <div className={styles.input}>
                                <input type="input" className={styles.text} placeholder="Firstname" name="name" required />
                            </div>
                            <div className={styles.input}>
                                <input type="input" className={styles.text} placeholder="Lastname" name="name" required />
                            </div>
                            <div className={styles.input}>
                                <input type="email" className={styles.text} placeholder="Email" name="email" required />
                            </div>
                            <div className={styles.input}>
                                <button className={styles.button} type="submit">Save</button>
                            </div>
                        </form>
                        <button onClick={onClickDelete} className={styles.delete}>Delete Account</button>
                    </div>
                </div>
            </div>
        </>
    )
};