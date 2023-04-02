import React, { useCallback, useMemo, useState } from "react";
import SimpleMDE from "react-simplemde-editor";

import styles from "./createProject.module.scss";
import 'easymde/dist/easymde.min.css';

import upload from "../../assets/images/button/image.png";

export const CreateProject = () => {
    const imageUrl = '';
    const [value, setValue] = useState('');

    const changeFile = () => {};

    const onClickRemoveImage = () => {};

    const onChange = useCallback((value) => {
        setValue(value);
    }, []);

    const options = useMemo(() => ({
        spellChecker: false,
        maxHeight: '400px',
        autofocus: true,
        placeholder: 'Enter desription',
        status: false,
        autosave: {
            enabled: true,
            delay: 1000,
        },
    }), []);

    return (
        <>
            <div className={styles.container}>
                <h1>New Project</h1>
                <form className={styles.form}>
                    <div className={styles.items}>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <input type="input" className={styles.text} placeholder="Price" name="text" required />
                                <input type="input" className={styles.text} placeholder="Address" name="email" required />
                            </div>
                            <div className={styles.input}>
                                <input type="input" className={styles.text} placeholder="Property type" name="text" required />
                                <input type="input" className={styles.text} placeholder="Neighbourhood" name="text" required />
                            </div>
                        </div>
                        <h2>Features</h2>
                        <div className={styles.input}>
                            <input type="input" className={styles.text} placeholder="Accepted currencies" name="text" required />
                        </div>
                        <div className={styles.input}>
                            <input type="input" className={styles.text} placeholder="Size" name="text" required />
                        </div>
                        <div className={styles.input}>
                            <input type="input" className={styles.text} placeholder="Bedrooms" name="text" required />
                            <input type="input" className={styles.text} placeholder="Bathrooms" name="text" required />
                        </div>
                        <div className={styles.input}>
                            <input type="input" className={styles.text} placeholder="Year built" name="text" required />
                            <input type="input" className={styles.text} placeholder="Floors" name="text" required />
                        </div>
                        <div className={styles.upload__img}>
                            <div className={styles.upload__items}>
                                <img src={upload} alt="" />
                                <button className={styles.button}>Upload Poster</button>
                                <input type="file" onChange={changeFile} hidden/>
                                {imageUrl && (
                                    <button onClick={onClickRemoveImage}>Delete image</button>
                                )}
                                {imageUrl && (
                                    <img src={`http://localhost:4000${imageUrl}`} alt="Uploaded" />
                                )}
                            </div>
                        </div>
                        <SimpleMDE className={styles.editor} value={value} onChange={onChange} options={options}/>
                        <div className={styles.input}>
                            <input type="input" className={styles.text} placeholder="Video url" name="text" required />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.button} type="submit">Publish</button>
                            <a href="/">
                                <button className={styles.button}>Cancellation</button>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
};