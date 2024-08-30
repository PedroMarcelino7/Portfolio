import React, { useState } from 'react';
import ProjectsCard from './ProjectsCard/ProjectsCard';
import { projects } from '../../data';
import styles from './Projects.module.scss';

export default function Projects() {
    const [showProjects, setShowProjects] = useState(false);

    return (
        <section id="projects" className={styles.projects}>
            <div className="container pt-5">
                <div className="row">
                    {showProjects
                        ? projects.map((project) => (
                            <ProjectsCard project={project} id={project.id} key={project.id} />
                        ))
                        : projects.map((project) => (
                            project.id <= 4 && (
                                <ProjectsCard project={project} id={project.id} key={project.id} />
                            )
                        ))
                    }
                </div>

                <div className={`${styles.btn_show} d-flex justify-content-center align-items-center`}>
                    <span className={styles.right}><i className='bi bi-chevron-double-right'></i></span>
                    <button className='btn btn-lg border-0' onClick={() => setShowProjects(!showProjects)}>All Projects</button>
                    <span className={styles.left}><i className='bi bi-chevron-double-left'></i></span>
                </div>
            </div>
        </section>
    );
}
