import React from "react";

import styles from "./fullProject.module.scss";

import noVideo from "../../assets/images/background/video.jpg";
import bedroomsImg from "../../assets/images/icons/4.png";
import bathroomsImg from "../../assets/images/icons/5.png";
import propertyTypeImg from "../../assets/images/icons/6.png";
import yearBuiltImg from "../../assets/images/icons/7.png";
import acceptedCurrenciesImg from "../../assets/images/icons/8.png";
import sizeImg from "../../assets/images/icons/9.png";

import { UserInfo, ContactWithUser } from "../../components";

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
    acceptedCurrencies,
    user
}) => {
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.screen}>
                    <div className={styles.project}>
                        <div className={styles.main__img}>
                            <img className={styles.img__bg} src={poster} alt="" />
                        </div>
                        <div className={styles.items}>
                            <div className={styles.item}>
                                <img className={styles.icon} src={bedroomsImg} alt="" />
                                {bedrooms || 'Not indicated'}
                            </div>
                            <div className={styles.item}>
                                <img className={styles.icon} src={bathroomsImg} alt="" />
                                {bathrooms || 'Not indicated'}
                            </div>
                            <div className={styles.item}>
                                <img className={styles.icon} src={propertyTypeImg} alt="" />
                                {propertyType || 'Not indicated'}
                            </div>
                            <div className={styles.item}>
                                <img className={styles.icon} src={yearBuiltImg} alt="" />
                                {yearBuilt || 'Not indicated'}
                            </div>
                            <div className={styles.item}>
                                <img className={styles.icon} src={acceptedCurrenciesImg} alt="" />
                                {acceptedCurrencies || 'Not indicated'}
                            </div>
                            <div className={styles.item}>
                                <img className={styles.icon} src={sizeImg} alt="" />
                                {size || 'Not indicated'}
                            </div>
                        </div>
                        <h3 className={styles.title3}>Description</h3>
                        <div className={styles.description}>{description}</div>
                        <h3 className={styles.title3}>Property Video</h3>
                        <div>
                            <iframe className={styles.video} src={videoLink || noVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className={styles.user}>
                        <UserInfo
                            {...user}
                        />
                        <ContactWithUser />
                    </div>
                </div>
            </div>
        </section>
    )
}