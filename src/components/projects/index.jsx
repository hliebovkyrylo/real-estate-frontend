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
                    {poster && (
                        <img className={styles.image} src={poster} alt={price} />
                    )}
                </div>

                <div className={styles.project__content}>
                    <div className={styles.project__inner}>
                        {price && (
                            <div className={styles.price}>{price}$</div>
                        )}

                        <button className={styles.button}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
};