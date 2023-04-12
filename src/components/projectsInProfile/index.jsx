import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./projectsInProfile.module.scss";

import { fetchDeleteProject } from "../../redux/slices/projects";

export const ProjectsInProfile = ({
    _id,
    poster,
    projectsName,
    size,
    price,
}) => {
    const dispatch = useDispatch();

    ////// deleting projects ///////
    const onClickDeleteProject = () => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            dispatch(fetchDeleteProject(_id));
        }
    };

    ////// dropdown //////
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className={styles.container}>
                    <div className={styles.smallProject}>
                        <a className={styles.hrefToProject} href={`/projects/${_id}`}>
                            <img className={styles.projectImage} src={poster} alt="" />
                            <div className={styles.projectName}>{projectsName}</div>
                        </a>
                        <div className={styles.projectItems}>{size}m²</div>
                        <div className={[styles.projectItems, styles.price].join(' ')}>{price}$</div>
                        <div className={[styles.projectItems, styles.dots__position].join(' ')}>
                            <button onClick={handleOpen} className={styles.buttonDropdown}>
                                <div className={styles.dots}></div>
                                <div className={styles.dots}></div>
                                <div className={styles.dots}></div>
                            </button>
                            {open ? (
                                <div className={styles.buttons}>
                                    <button className={styles.href}>
                                        <a className={styles.href} href="#">Edit project</a>
                                    </button>
                                    <button onClick={onClickDeleteProject} className={styles.href}>Delete project</button>
                                </div>
                            ) : null}
                        </div>
                    </div>
            </div>
        </>
    )
}