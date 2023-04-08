import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  isAuthSelector, fetchRegister } from "../../redux/slices/auth";
import { useForm } from "react-hook-form";

import styles from "./signUp.module.scss";

import logo from "../../assets/images/logo/bi_house-door.png";
import { Navigate } from "react-router-dom";

export const SignUp = () => {
    ////// show/hide password //////
    const [type, setType] = useState('password')

    const togglePassInput = () => {
        if (type === 'password') {
            setType('text')
        } else {
            setType('password')
        }
    };
    
    ////// register //////
    const isAuth = useSelector(isAuthSelector)

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
        },
        mode: 'onChange'
    });

    const onSubmit = async (val) => {
        const data = await dispatch(fetchRegister(val));

        if (!data.payload) {
            return alert('Failed to register!')
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
                        <h1>Create your Account</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.input}>
                                <input type="input" className={styles.text} placeholder="Firstname" name="name" required {...register('firstName')} />
                            </div>
                            <div className={styles.input}>
                                <input type="input" className={styles.text} placeholder="Lastname" name="name" required {...register('lastName')} />
                            </div>
                            <div className={styles.input}>
                                <input type="email" className={styles.text} placeholder="Email" name="email" required {...register('email')} />
                            </div>
                            <div className={styles.input}>
                                <input type="input" className={styles.text} placeholder="Phone number (not required)" name="phone" {...register('phoneNumber')} />
                            </div>
                            <div className={styles.input}>
                                <input type={type} className={styles.text} placeholder="Password" name="password" required  {...register('password')} />
                            </div>
                            <div className={styles.checkbox}>
                                <input onClick={togglePassInput} id="checkbox" type="checkbox" />
                                <label for="checkbox" className={styles.text_checkbox}>Show your password</label>
                            </div>
                            <div className={styles.input}>
                                <button className={styles.button} type="submit">Submit</button>
                            </div>
                            <div className={styles.input}>
                                <a className={styles.hrefTo} href="/auth/login">Already have an account? Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};