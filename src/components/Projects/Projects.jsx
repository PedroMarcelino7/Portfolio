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

                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        className={`${styles.button} d-flex justify-content-center align-items-center gap-4`}
                        onClick={() => setShowProjects(!showProjects)}
                    >
                        <span className={styles.right}><i className='bi bi-chevron-double-right'></i></span>
                        <span>{showProjects ? 'Hide Projects' : 'All Projects'}</span>
                        <span className={styles.left}><i className='bi bi-chevron-double-left'></i></span>
                    </button>
                </div>
            </div>
        </section>
    );
}
