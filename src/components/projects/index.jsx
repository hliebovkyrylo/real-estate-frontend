import React from "react";

import styles from "./project.module.scss";

export const Project = ({
    _id,
    price,
    poster
}) => {
    return (
        <div className={styles.project}>
                <div className={styles.project__card}>
                    <a className={styles.project__link} href={`/projects/${_id}`}>
                        <div className={styles.image__card}>
                            <img className={styles.image} src={poster} alt={price} />
                        </div>
                        <div className={styles.project__content}>
                            <div className={styles.project__inner}>
                                <div className={styles.price}>{price}$</div>
                                <a className={styles.button} href={`/projects/${_id}`}>View Details</a>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
    )
};