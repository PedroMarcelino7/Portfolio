import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Captions from "yet-another-react-lightbox/plugins/captions"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/captions.css"

import { projects } from '../../data'
import styles from './Projects.module.scss'

export default function Projects() {
    const [openLightboxIndex, setOpenLightboxIndex] = useState(null)
    const [renderPrev, setRenderPrev] = useState(false)
    const [renderNext, setRenderNext] = useState(false)
    const [showProjects, setShowProjects] = useState(false)

    const openLightbox = (index) => {
        setOpenLightboxIndex(index)
    }

    const closeLightbox = () => {
        setOpenLightboxIndex(null)
    }

    return (
        <section id="projects">
            <div className="container pt-5">
                <div className="row">
                    {projects.map((project) => (
                        <>
                            {project.id <= 4 &&
                                <div className="col-lg-6 mb-5" key={project.id}>
                                    <div className={`rounded-3 ${styles.project_card}`}>
                                        <img
                                            className='img-fluid rounded-top-3 w-100'
                                            onClick={() => openLightbox(project.id)}
                                            src={project.src}
                                            alt=""
                                        />

                                        <div className={styles.project_description}>
                                            <h1 className='fs-3'>{project.title}</h1>

                                            <div className='mt-2 mb-5'>
                                                {project.technologies.map((technology, key) => (
                                                    <span className="badge text-bg-primary fs-6 m-1" key={key}>{technology}</span>
                                                ))}
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <a href={project.page} target='_blank'><button className='btn btn-outline-info fw-bold fs-6'>View Project</button></a>
                                                <button className='btn btn-outline-info fw-bold fs-6' onClick={() => openLightbox(project.id)}>Description</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    ))}

                    {openLightboxIndex !== null && (
                        <Lightbox
                            plugins={[Captions, Zoom]}
                            open={true}
                            hideControls={true}
                            render={{
                                buttonPrev: renderPrev ? undefined : () => null,
                                buttonNext: renderNext ? undefined : () => null,
                            }}
                            slides={[
                                {
                                    src: projects[openLightboxIndex - 1].src,
                                    title: projects[openLightboxIndex - 1].title,
                                    description: projects[openLightboxIndex - 1].description,
                                }
                            ]}
                            close={closeLightbox}
                        />
                    )}

                    {showProjects &&
                        (
                            <>
                                {projects.map((project) => (
                                    <>
                                        {project.id > 4 &&
                                            <div className="col-lg-6 mb-5" key={project.id}>
                                                <div className={`rounded-3 ${styles.project_card}`}>
                                                    <img
                                                        className='img-fluid rounded-top-3 w-100'
                                                        onClick={() => openLightbox(project.id)}
                                                        src={project.src}
                                                        alt=""
                                                    />

                                                    <div className={styles.project_description}>
                                                        <h1 className='fs-3'>{project.title}</h1>

                                                        <div className='mt-2 mb-5'>
                                                            {project.technologies.map((technology, key) => (
                                                                <span className="badge text-bg-primary fs-6 m-1" key={key}>{technology}</span>
                                                            ))}
                                                        </div>

                                                        <div className="d-flex justify-content-between">
                                                            <a href={project.page} target='_blank'><button className='btn btn-outline-info fw-bold fs-6'>View Project</button></a>
                                                            <button className='btn btn-outline-info fw-bold fs-6' onClick={() => openLightbox(project.id)}>Description</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </>
                                ))}

                            </>
                        )
                    }


                    <div className='d-flex justify-content-center align-items-center' onClick={() => setShowProjects(!showProjects)}>
                        <span><i class="bi bi-chevron-double-down"></i></span>
                        <button className='btn btn-lg border-0'>All Projects</button>
                        <span><i class="bi bi-chevron-double-down"></i></span>
                    </div>
                </div>
            </div>
        </section>
    )
}
