import React, { useState } from 'react'
// import Lightbox from 'yet-another-react-lightbox'
// import Captions from "yet-another-react-lightbox/plugins/captions"
// import Zoom from "yet-another-react-lightbox/plugins/zoom"
// import "yet-another-react-lightbox/styles.css"
// import "yet-another-react-lightbox/plugins/captions.css"

import styles from './Projects.module.scss'
import ProjectsCard from './ProjectsCard/ProjectsCard'

import { projects } from '../../data'

export default function Projects() {
    // const [openLightboxIndex, setOpenLightboxIndex] = useState(null)
    // const [renderPrev, setRenderPrev] = useState(false)
    // const [renderNext, setRenderNext] = useState(false)
    const [showProjects, setShowProjects] = useState(false)

    // const openLightbox = (index) => {
    //     setOpenLightboxIndex(index)
    // }

    // const closeLightbox = () => {
    //     setOpenLightboxIndex(null)
    // }

    return (
        <section id="projects">
            <div className="container pt-5">
                <div className="row">
                    {projects.map((project) => (
                        <div key={project.id}>
                            {project.id <= 4 &&
                                <ProjectsCard project={project} id={project.id} />
                            }
                        </div>
                    ))}

                    {showProjects &&
                        (
                            <>
                                {projects.map((project) => (
                                    <div key={project.id}>
                                        {project.id > 4 &&
                                            <ProjectsCard project={project} id={project.id} />
                                        }
                                    </div>
                                ))}
                            </>
                        )
                    }


                    <div className={`${styles.btn_show} d-flex justify-content-center align-items-center`} onClick={() => setShowProjects(!showProjects)}>
                        <span><i className="bi bi-chevron-double-down"></i></span>
                        <button className='btn btn-lg border-0'>All Projects</button>
                        <span><i className="bi bi-chevron-double-down"></i></span>
                    </div>
                </div>
            </div>
        </section>
    )
}
