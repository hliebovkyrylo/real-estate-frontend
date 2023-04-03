import React from "react";

import styles from "./project.module.scss";

export const Project = ({
    price,
    poster
}) => {
    return (
        <div className={styles.project}>
            <div className={styles.project__card}>
                <div className={styles.image__card}>
                    <img className={styles.image} src={poster} alt={price} />
                </div>

                <div className={styles.project__content}>
                    <div className={styles.project__inner}>
                        <div className={styles.price}>{price}$</div>
                        <a className={styles.button} href="/projects/:id">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    )
};