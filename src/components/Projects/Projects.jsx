import React, { useState } from 'react';
import ProjectsCard from './ProjectsCard/ProjectsCard';
import { projects } from '../../data';
import styles from './Projects.module.scss';

export default function Projects() {
    const [showProjects, setShowProjects] = useState(false);

    return (
        <section id="projects">
            <div className="container pt-5">
                <div className="row">
                    {projects.map((project) => (
                        <div className="col-lg-6 mb-5" key={project.id}>
                            {project.id <= 4 && <ProjectsCard project={project} id={project.id} />}
                        </div>
                    ))}
                </div>

                {showProjects && (
                    <div className="row">
                        {projects.map((project) => (
                            project.id > 4 && (
                                <div className="col-lg-6 mb-5" key={project.id}>
                                    <ProjectsCard project={project} id={project.id} />
                                </div>
                            )
                        ))}
                    </div>
                )}

                <div className={`${styles.btn_show} d-flex justify-content-center align-items-center`} onClick={() => setShowProjects(!showProjects)}>
                    <span className={styles.right}><i className='bi bi-chevron-double-right'></i></span>
                    <button className='btn btn-lg border-0'>All Projects</button>
                    <span className={styles.left}><i className='bi bi-chevron-double-left'></i></span>
                </div>
            </div>
        </section>
    );
}
