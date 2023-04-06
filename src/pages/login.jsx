import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import styles from "./signUp/signUp.module.scss";

import logo from "../assets/images/logo/bi_house-door.png";
import { fetchUserData, isAuthSelector } from "../redux/slices/auth";

export const Login = () => {
    ////// show/hide password //////
    const [type, setType] = useState('password');

    const togglePassInput = () => {
        if (type === 'password') {
            setType('text')
        } else {
            setType('password')
        }
    };

    ////// login //////
    const isAuth = useSelector(isAuthSelector)

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange'
    });

    const onSubmit = async (val) => {
        const data = await dispatch(fetchUserData(val));

        if (!data.payload) {
            return alert('Failed to login!')
        }

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
        } 
    };

    if (isAuth) {
        return <Navigate to="/" />
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.items}>
                        <img src={logo} alt="" />
                        <h1>Sign In</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.input}>
                                <input type="email" className={styles.text} placeholder="Email" name="email" required {...register('email')}/>
                            </div>
                            <div className={styles.input}>
                                <input type={type} className={styles.text} placeholder="Password" name="password" required {...register('password')} />
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