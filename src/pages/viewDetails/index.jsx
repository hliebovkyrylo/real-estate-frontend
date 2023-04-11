import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { useParams } from "react-router-dom";

import styles from "./viewDetails.module.scss";
import { FullProject, UserInfo, ContactWithUser, Footer } from "../../components";

export const ViewDetail = ({userInf}) => {
    const { id } = useParams();
    const [project, setProject] = useState();
    const [user, setUser] = useState();

    //get project
    useEffect(() => {
        axios.get(`/projects/${id}`)
        .then(res => setProject(res.data))
        .catch(error => console.error(error));
    }, [id]);

    return (
        <div className={styles.container}>
            {project && (
                <div className={styles.main}>
                    <FullProject
                        _id={project._id}
                        poster={`http://localhost:4000${project.poster}`}
                        bedrooms={project.bedrooms}
                        bathrooms={project.bathrooms}
                        propertyType={project.propertyType}
                        yearBuilt={project.yearBuilt}
                        acceptedCurrencies={project.acceptedCurrencies}
                        size={project.size}
                        videoLink={project.videoLink}
                        user={project.user}
                        description={project.description}
                        >
                    </FullProject>
                </div>
            )}
            <Footer />
        </div>
  );
};