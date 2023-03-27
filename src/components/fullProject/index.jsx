import React from "react";

import styles from "./fullProject.module.scss";

import testBg from "../../assets/images/test-images/testBg.jpg";
import noVideo from "../../assets/images/background/video.jpg";

export const FullProject = ({
    poster,
    bedrooms,
    rathrooms,
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
                    <img className={styles.img__bg} src={poster || testBg} alt="" />
                </div>
                <div className={styles.items}>
                    <div className={styles.item}>{bedrooms || 'Not indicated'}</div>
                    <div className={styles.item}>{rathrooms || 'Not indicated'}</div>
                    <div className={styles.item}>{propertyType || 'Not indicated'}</div>
                    <div className={styles.item}>{yearBuilt || 'Not indicated'}</div>
                    <div className={styles.item}>{acceptedCurrencies || 'Not indicated'}</div>
                    <div className={styles.item}>{size || 'Not indicated'}</div>
                </div>
                <h3 className={styles.title3}>Description</h3>
                <div className={styles.description}>{description || 'Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining room. Remodelled kitchen with granite  white cabinetry and stainless appliances. Lovely master bedroom has updated bath, beautiful view of the pool. Guest bedrooms have walk-in, cedar closets. Delightful backyard; majestic oaks surround the free form pool and expansive patio, wet bar and grill. Enchanting three bedroom,'}</div>
                <h3 className={styles.title3}>Property Video</h3>
                <div>
                    <iframe className={styles.video} src={videoLink || noVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}