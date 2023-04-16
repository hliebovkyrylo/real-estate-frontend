import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../axios";

import styles from "./createProject.module.scss";
import 'easymde/dist/easymde.min.css';

import upload from "../../assets/images/button/image.png";

export const CreateProject = () => {
    const [description, setDescription] = useState('');
    const inputFileRef = useRef(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditing = Boolean(id);

    ////// project elements //////
    const [projectsName, setProjectsName] = useState('');
    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [neighbourhood, setNeighbourhood] = useState('');
    const [acceptedCurrencies, setAcceptedCurrencies] = useState('');
    const [size, setSize] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [yearBuilt, setYearBuilt] = useState('');
    const [floors, setFloors] = useState('');
    const [poster, setPoster] = useState('');
    const [videoLink, setVideoLink] = useState('');

    ////// sending the created project to the backend //////
    const onSubmit = async (ev) => {
        try {
            ev.preventDefault(); // prevent default form submission behavior

            const fields = {
                projectsName,
                price,
                address,
                propertyType,
                neighbourhood,
                acceptedCurrencies,
                size,
                bedrooms,
                bathrooms,
                yearBuilt,
                floors,
                poster,
                description,
                videoLink,
            };

            const { data } = isEditing 
                ? await axios.patch(`/projects/${id}`, fields) 
                : await axios.post('/projects', fields);

            const _id = isEditing ? id : data._id;

            navigate(`/projects/${_id}`);

        } catch (error) {
            console.error(error);
            alert('Failed to create project!');
        }
    };

    ////// upload/remove image //////
    const [uploadedPoster, setUploadedPoster] = useState();

    const changeFile = async (ev) => {
        try {
            const formData = new FormData;
            const file = ev.target.files[0];
            formData.append('image', file);
            const { data } = await axios.post('/uploadImage', formData);
            setUploadedPoster(data.url);
            setPoster(data.url);
        } catch (error) {
            console.warn(error);
            alert('Failed to upload image!');
        }
    };

    const onClickRemoveImage = () => {
        setUploadedPoster('');
        setPoster('');
    };

    ////// updating project //////
    useEffect(() => {
        if (id) {
            axios.get(`/projects/${id}`)
            .then(({ data }) => {
                setProjectsName(data.projectsName);
                setPrice(data.price);
                setAddress(data.address);
                setPropertyType(data.propertyType);
                setNeighbourhood(data.neighbourhood);
                setAcceptedCurrencies(data.acceptedCurrencies);
                setSize(data.size);
                setBedrooms(data.bedrooms);
                setBathrooms(data.bathrooms);
                setYearBuilt(data.yearBuilt);
                setFloors(data.floors);
                setPoster(data.poster);
                setDescription(data.description);
                setVideoLink(data.videoLink);
            })
            .catch(error => {
                console.warn(error);
                alert('Failed to get project!');
            });
        }
    }, []);

    ////// SimpleMDE tincture //////
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

    const onChange = useCallback((value) => {
        setDescription(value);
    }, []);

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.h1}>New Project</h1>
                <form onSubmit={onSubmit} className={styles.form}>
                    <div className={styles.items}>
                        <div className={styles.inputs}>
                        <div className={styles.input}>
                                <input 
                                    value={projectsName}
                                    onChange={(e) => setProjectsName(e.target.value)} 
                                    type="input" 
                                    className={styles.text} 
                                    placeholder="Project name" 
                                    required 
                                />
                            </div>
                            <div className={styles.input}>
                                <input 
                                    value={price} 
                                    onChange={(e) => setPrice(e.target.value)}  
                                    type="input" 
                                    className={styles.text} 
                                    placeholder="Price" 
                                    required 
                                />
                                <input value={address} 
                                    onChange={(e) => setAddress(e.target.value)}  
                                    type="input" 
                                    className={styles.text} 
                                    placeholder="Address" 
                                    required 
                                />
                            </div>
                            <div className={styles.input}>
                                <input 
                                    value={propertyType} 
                                    onChange={(e) => setPropertyType(e.target.value)}  
                                    type="input" 
                                    className={styles.text} 
                                    placeholder="Property type" 
                                    required 
                                />
                                <input 
                                    value={neighbourhood} 
                                    onChange={(e) => setNeighbourhood(e.target.value)}  
                                    type="input" 
                                    className={styles.text} 
                                    placeholder="Neighbourhood" 
                                    required 
                                />
                            </div>
                        </div>
                        <h2>Features</h2>
                        <div className={styles.input}>
                            <input 
                                value={acceptedCurrencies} 
                                onChange={(e) => setAcceptedCurrencies(e.target.value)} 
                                type="input" 
                                className={styles.text} 
                                placeholder="Accepted currencies" 
                                required 
                            />
                        </div>
                        <div className={styles.input}>
                            <input 
                                value={size} 
                                onChange={(e) => setSize(e.target.value)}  
                                type="input" 
                                className={styles.text} 
                                placeholder="Size" 
                                required />
                        </div>
                        <div className={styles.input}>
                            <input 
                                value={bedrooms} 
                                onChange={(e) => setBedrooms(e.target.value)}  
                                type="input" className={styles.text} 
                                placeholder="Bedrooms" 
                                required 
                            />
                            <input 
                                value={bathrooms} 
                                onChange={(e) => setBathrooms(e.target.value)}  
                                type="input" className={styles.text} 
                                placeholder="Bathrooms" 
                                required 
                            />
                        </div>
                        <div className={styles.input}>
                            <input 
                                value={yearBuilt} 
                                onChange={(e) => setYearBuilt(e.target.value)}  
                                type="input" 
                                className={styles.text} 
                                placeholder="Year built" 
                                required 
                            />
                            <input 
                                value={floors} 
                                onChange={(e) => setFloors(e.target.value)}  
                                type="input" 
                                className={styles.text} 
                                placeholder="Floors" 
                                required 
                            />
                        </div>
                        <button onClick={() => inputFileRef.current.click()} type="button" className={styles.upload__img}>
                            <div value={poster} onChange={(e) => setPoster(e.target.value)}>
                                {poster || uploadedPoster ? (
                                    <img
                                        src={`${process.env.REACT_APP_API_URL}${poster}` || `${process.env.REACT_APP_API_URL}${uploadedPoster}`}
                                        alt="Project"
                                        className={styles.preview}
                                    />
                                ) : (
                                    <div className={styles.upload__items}>
                                        <img src={upload} alt="Upload" className={styles.upload__icon} />
                                        <p className={styles.button}>Upload image</p>
                                    </div>
                                )
                                }
                            </div>
                        </button>
                        {poster && (
                            <button className={styles.button} onClick={onClickRemoveImage}>Delete image</button>
                        )}
                        <input ref={inputFileRef} type="file" onChange={changeFile} hidden/>
                        <SimpleMDE className={styles.editor} value={description} onChange={onChange} options={options}/>
                        <div className={styles.input}>
                            <input value={videoLink} onChange={(e) => setVideoLink(e.target.value)} type="input" className={styles.text} placeholder="Video url" />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.button} type="submit">{isEditing ? 'Save' : 'Publish'}</button>
                            <a href="/">
                                <div className={styles.button}>Cancellation</div>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
};