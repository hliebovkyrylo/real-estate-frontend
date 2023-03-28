import React from "react";

import styles from "./viewDetails.module.scss";
import { FullProject, UserInfo, ContactWithUser, Footer } from "../../components";

export const ViewDetail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <FullProject
                    poster="https://i.pinimg.com/originals/a7/36/ae/a736aef22f24e6cff5ba18dbc084fbd1.jpg"
                    description="Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining room. Remodelled kitchen with granite  white cabinetry and stainless appliances. Lovely master bedroom has updated bath, beautiful view of the pool. Guest bedrooms have walk-in, cedar closets. Delightful backyard; majestic oaks surround the free form pool and expansive patio, wet bar and grill. Enchanting three bedroom"
                    bedrooms={4}
                    rathrooms={2}
                    propertyType="home"
                    yearBuilt={2007}
                    acceptedCurrencies="usd"
                    size={4300}
                    videoLink=""
                />
                <div className={styles.contact}>
                    <UserInfo
                        avatarUrl="https://media.istockphoto.com/id/1252736753/photo/his-kind-of-smile-makes-anyone-want-to-smile.jpg?s=612x612&w=is&k=20&c=Q9LRCq7givu1fYvqBy8_izyYc833--bzMgdC7w2-fJs="
                        firstName="Jhon"
                        lastName="Doe"
                    />
                    <ContactWithUser />
                </div>
            </div>
            <Footer />
        </div>
    )
};