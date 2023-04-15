import React, { useEffect, useState } from "react";
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

    /////// View more button ///////
    const [data, setData] = useState(6)

    const slice = projects.items.slice(0, data)

    const ViewMore = () => {
        setData(data + data);
    }

    return (
        <body>
            <div className={styles.intro}>
                <div className={styles.container}>
                    <div className={styles.intro__inner}>
                        <div className={styles.intro__title}>Find Your <div className={styles.titleblue}>Dream Home</div> with Crypto</div>
                    </div>
                </div>
            </div>

            <section>
                <div className={styles.container}>
                    <div className={styles.projects}>
                        <div className={styles.projects__inner} id="projects">
                            {isLoading ? [...Array(6)] : projects && slice.map((obj) => (
                                <Project
                                    _id={obj._id}
                                    poster={`http://localhost:4000${obj.poster}`} 
                                    price={obj.price} 
                                />
                            ))}
                        </div>
                        <button className={styles.button} onClick={() => ViewMore()}>
                            <img className={styles.button_img} src={load_more} alt="" />
                        </button>
                    </div>
                </div>
            </section>
            <section className={styles.container}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169324.3891045177!2d34.83555119974132!3d48.46240852872649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe303fd08468f%3A0xa1cf3d5f2c11aba!2z0JTQvdC10L_RgCwg0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1sru!2sua!4v1681571610636!5m2!1sru!2sua" width="100%" height="738px" style={{border:0, marginTop: 50}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <section className={styles.section_about}>
                <div className={styles.container}>
                    <div className={styles.about_us}>
                        <div className={styles.about_items}>
                            <div className={styles.about}>
                                <h1 className={styles.h1}>About Us</h1>
                                <p className={styles.subtitle}>Homeverse.io is a gated community with a great location. Located downtown, you’re within walking distance of Parks, and the best shopping, dining and entertainment Getting around is a breeze, with easy access to freeways, buses and trolleys. . Laundry is available on premises.</p>
                                <a className={styles.button_href} href="#">Read more</a>
                            </div>
                        </div>
                        <div className={styles.about_items}>
                            <div className={styles.about_frame}>
                                <div className={styles.h1}>500+</div>
                                <div className={styles.about_description}>Projects</div>
                                <div className={styles.textAbout}>Over 500 lexury villas for“Home Away From Home” experience</div>
                            </div>
                            <div className={styles.about_frame}>
                                <div className={styles.h1}>500+</div>
                                <div className={styles.about_description}>Projects</div>
                                <div className={styles.textAbout}>Over 500 lexury villas for“Home Away From Home” experience</div>
                            </div>
                            <div className={styles.about_frame}>
                                <div className={styles.h1}>500+</div>
                                <div className={styles.about_description}>Projects</div>
                                <div className={styles.textAbout}>Over 500 lexury villas for“Home Away From Home” experience</div>
                            </div>
                        </div>
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