import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import styles from "./userProfile.module.scss";

import { UserInfo, ProjectsInProfile } from "../../components";

import { isAuthSelector, logout } from "../../redux/slices/auth";
import { userProjects } from "../../redux/slices/projects";
import axios from "../../axios";

import add from "../../assets/images/button/add.jpg";

export const UserProfile = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(isAuthSelector);
    const [ user, setUser ] = useState();

    const projects = useSelector((state) => state.projects.projects);
    const isLoading = projects && projects.status === 'loading';

    ////// automatic addition of user-created projects //////
    useEffect(() => {
        dispatch(userProjects());
    }, []);

    ////// dynamic user data //////
    useEffect(() => {
        axios.get('/users/me')
        .then(res => setUser(res.data))
        .catch(error => console.log(error))
    }, []);

    if (!user) {
        // render loading indicator or message if user is undefined
        return <p>User not defined</p>
    }

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
        <>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <UserInfo 
                        avatarUrl={user.avatarUrl}
                        firstName={user.firstName}
                        lastName={user.lastName}
                    />
                    <div className={styles.buttons}>
                        <a className={styles.btn} href="/users/update">Edit</a>
                        <button className={styles.btn} onClick={onClickLogout}>Logout</button>
                    </div>
                    <h2>Projects</h2>
                    <div className={styles.myProjects}>
                        {isLoading ? [...Array(5)] : projects.items.map((obj) => (
                            <ProjectsInProfile
                                _id={obj._id}
                                poster={obj.poster}
                                projectsName={obj.projectsName}
                                price={obj.price}
                                size={obj.size}
                            />
                        ))}
                    </div>
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