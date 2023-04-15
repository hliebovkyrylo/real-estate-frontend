import React from "react";

import styles from "../contact/contact.module.scss";

export const Contact = () => {
    return (
        <div className={styles.contact_styles}>
            <div className={styles.container}>
                <div className={styles.contact}>
                    <div className={styles.contact_item}>
                        <div className={styles.intro__title}>Did You Find Your <div className={styles.title_blue}>Dream Home?</div></div>
                        <div className={styles.text}>Thank you for getting in touch! if you find your dream home connect with us</div>
                    </div>

                    <form className={styles.contact_item} action="/">
                        <div class={styles.form__group}>
                            <input type="input" class={styles.form__field} placeholder="Your name" name="name" required />
                            <input type="input" class={styles.form__field} placeholder="Your email" name="email" required />
                        </div>
                        <div class={styles.form__group}>
                            <input type="input" class={styles.form__field} placeholder="Phone Number" name="number" required />
                        </div>
                        <div class={styles.form__group}>
                            <button type="submit" className={[styles.button, styles.button_href].join(' ')}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};