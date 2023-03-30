import React, { useState } from "react";

import styles from "./signUp/signUp.module.scss";

import logo from "../assets/images/logo/bi_house-door.png";

export const Login = () => {
    const [type, setType] = useState('password');

    const togglePassInput = () => {
        if (type === 'password') {
            setType('text')
        } else {
            setType('password')
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.items}>
                        <img src={logo} alt="" />
                        <h1>Sign In</h1>
                        <form action="#">
                            <div className={styles.input}>
                                <input type="email" className={styles.text} placeholder="Email" name="email" required />
                            </div>
                            <div className={styles.input}>
                                <input type={type} className={styles.text} placeholder="Password" name="password" required  />
                            </div>
                            <div className={styles.checkbox}>
                                <input onClick={togglePassInput} id="checkbox" type="checkbox" />
                                <label for="checkbox" className={styles.text_checkbox}>Show your password</label>
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