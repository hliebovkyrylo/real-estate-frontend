import React from "react";

import styles from "./fullProject.module.scss";

import noVideo from "../../assets/images/background/video.jpg";

export const FullProject = ({
    _id,
    poster,
    bedrooms,
    bathrooms,
    yearBuilt,
    size,
    propertyType,
    description,
    videoLink,
    acceptedCurrencies
}) => {
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.main__img}>
                    <img className={styles.img__bg} src={poster} alt="" />
                </div>
                <div className={styles.items}>
                    <div className={styles.item}>{bedrooms || 'Not indicated'}</div>
                    <div className={styles.item}>{bathrooms || 'Not indicated'}</div>
                    <div className={styles.item}>{propertyType || 'Not indicated'}</div>
                    <div className={styles.item}>{yearBuilt || 'Not indicated'}</div>
                    <div className={styles.item}>{acceptedCurrencies || 'Not indicated'}</div>
                    <div className={styles.item}>{size || 'Not indicated'}</div>
                </div>
                <h3 className={styles.title3}>Description</h3>
                <div className={styles.description}>{description}</div>
                <h3 className={styles.title3}>Property Video</h3>
                <div>
                    <iframe className={styles.video} src={videoLink || noVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}