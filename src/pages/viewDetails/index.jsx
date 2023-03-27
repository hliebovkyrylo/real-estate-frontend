import React from "react";

import styles from "./viewDetails.module.scss";
import { FullProject, UserInfo } from "../../components";

export const ViewDetail = () => {
    return (
        <div className={styles.main}>
            <FullProject />
        </div>
    )
};