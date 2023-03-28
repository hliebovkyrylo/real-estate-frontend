import React from "react";

import styles from "./contactWithUser.module.scss";

export const ContactWithUser = () => {
    return (
        <div className={styles.card}>
            <div className={styles.contact}>
                <input type="input" className={styles.text} placeholder="Name" name="name" required />
            </div>
            <div className={styles.contact}>
                <input type="input" className={styles.text} placeholder="Email" name="email" required />
            </div>
            <div className={styles.contact}>
                <textarea className={styles.text} name="text" placeholder="Message" cols="30" rows="5"></textarea>
            </div>
            <div className={styles.contact}>
                <button type="submit" className={styles.button}>Send Message</button>
            </div>
        </div>
    )
}