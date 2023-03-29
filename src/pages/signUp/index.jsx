import React from "react";

import styles from "./signUp.module.scss";

import logo from "../../assets/images/logo/bi_house-door.png";

export const SignUp = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.items}>
                        <img src={logo} alt="" />
                        <h1>Create your Account</h1>
                        <form action="#">
                            <div className={styles.input}>
                                <input type="input" className={styles.text} placeholder="Firstname" name="name" required />
                            </div>
                            <div className={styles.input}>
                                <input type="input" className={styles.text} placeholder="Lastname" name="name" required />
                            </div>
                            <div className={styles.input}>
                                <input type="input" className={styles.text} placeholder="Email" name="email" required />
                            </div>
                            <div className={styles.input}>
                                <input type="input" className={styles.text} placeholder="Phone number" name="phone" required />
                            </div>
                            <div className={styles.input}>
                                <button className={styles.button} type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};