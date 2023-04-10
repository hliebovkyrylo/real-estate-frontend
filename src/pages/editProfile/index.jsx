import React, { useEffect, useRef, useState } from "react";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

import styles from "./editProfile.module.scss";

import { UserInfo } from "../../components/userInfo";

export const EditProfile = () => {
    const inputFileRef = useRef(null);
    const navigate = useNavigate();
    const [ user, setUser ] = useState();

    ////// updating user info //////
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [avatarUrl, setavatarUrl] = useState();

    useEffect(() => {
        axios.get('/users/me') //get user info
        .then(res => setUser(res.data))
        .catch(error => console.log(error))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch('/users/update', {
            firstName,
            lastName, 
            avatarUrl,
            email,
        }).then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error);
        }) 
        navigate('/users/me')
    }

    ////// delete account //////
    const onClickDelete = () => {};

    ////// upload image //////
    const [uploadedAvatarUrl, setUploadedAvatarUrl] = useState();

    const changeFile = async (ev) => {
        try {
            const formData = new FormData;
            const file = ev.target.files[0];
            formData.append('image', file);
            const { data } = await axios.post('/uploadImage', formData);
            setUploadedAvatarUrl(data.url); 
            setavatarUrl(data.url)// set avatarUrl state when the user selects a file

        } catch (error) {
            console.warn(error);
            alert('Failed to upload image');
        }
    };
    const onClickRemoveImage = () => {
        setUploadedAvatarUrl('');
        setavatarUrl(''); // remove the uploaded avatar when the user clicks on the "Delete image" button
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.items}>
                        <h1>Edit Profile</h1>
                        <form onSubmit={handleSubmit}>
                            <button type="button" onClick={() => inputFileRef.current.click()} className={styles.btn__avatar}>
                                <UserInfo onChange={(e) => setavatarUrl(e.target.value)} value={avatarUrl}
                                    avatarUrl={user?.avatarUrl || uploadedAvatarUrl}
                                    firstName={''}
                                    lastName={''}
                                />
                            </button>
                            <input ref={inputFileRef} type="file" onChange={changeFile} hidden></input>
                            <div>
                                {uploadedAvatarUrl || (user && user.avatarUrl) ? (
                                    <button className={styles.button__remove} onClick={onClickRemoveImage}>Delete image</button>
                                ) : null}
                            </div>
                            <div className={styles.input}>
                                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="input" className={styles.text} placeholder="Firstname" name="name" />
                            </div>
                            <div className={styles.input}>
                                <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="input" className={styles.text} placeholder="Lastname" name="name" />
                            </div>
                            <div className={styles.input}>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className={styles.text} placeholder="Email" name="email"/>
                            </div>
                            <div className={styles.input}>
                                <a href="/">
                                    <button className={styles.button} type="submit">Save</button>
                                </a>
                            </div>
                        </form>
                        <button onClick={onClickDelete} className={styles.delete}>Delete Account</button>
                    </div>
                </div>
            </div>
        </>
    )
};