import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./home.module.scss";
import { Project, Contact, Footer } from "../../components";

import load_more from "../../assets/images/button/load_more.png";

import { fetchProjects } from "../../redux/slices/projects";

export const Home = () => {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects.projects)

    const isLoading = projects && projects.status === 'loading';

    useEffect(() => {
        dispatch(fetchProjects())
    }, []);

    console.log(projects.items); // log the items array to the console

    return (
        <body>
            <div className={styles.intro}>
                <div className={styles.container}>
                    <div className={styles.intro__inner}>
                        <div className={styles.intro__title}>Find Your Dream Home with Crypto</div>
                    </div>
                </div>
            </div>

            <section>
                <div className={styles.container}>
                    <div className={styles.projects}>
                        <div className={styles.projects__inner} id="projects">
                            {isLoading ? [...Array(6)] : projects && projects.items.map((obj) => (
                                <Project
                                    _id={obj._id}
                                    poster={obj.poster} 
                                    price={obj.price} 
                                />
                            ))}
                        </div>
                        <button className={styles.button}>
                            <img className={styles.button_img} src={load_more} alt="" />
                        </button>
                    </div>
                </div>
            </section>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </body>
    )
};