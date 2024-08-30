import styles from './ProjectsCard.module.scss'

import React, { useState } from 'react'

import { projects } from '../../../data'

import Lightbox from 'yet-another-react-lightbox'
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"

export default function ProjectsMap({ project, id }) {
    const [openLightboxIndex, setOpenLightboxIndex] = useState(null)

    const openLightbox = (index) => {
        setOpenLightboxIndex(index)
    }

    const closeLightbox = () => {
        setOpenLightboxIndex(null)
    }

    return (
        <div className="col-lg-6 mb-3">
            <div className={`rounded-3 ${styles.project_card}`}>
                <img
                    className='img-fluid rounded-top-3 w-100'
                    onClick={() => openLightbox(id)}
                    src={project.src[0]}
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
                        <a href={project.page} target='_blank'>
                            <button className='btn btn-outline-info fw-bold fs-6'>View Project</button>
                        </a>
                        <button className='btn btn-outline-info fw-bold fs-6' onClick={() => openLightbox(id)}>View Details</button>
                    </div>
                </div>
            </div>

            {openLightboxIndex !== null && (
                <Lightbox
                    plugins={[Zoom]}
                    open={true}
                    hideControls={true}
                    render={{
                        slide: ({ slide }) => (
                            <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                                <img src={slide.src} alt={slide.title} style={{ width: '100%', marginBottom: '10px' }} />
                                <p style={{textAlign: 'justify'}}>{slide.description}</p>
                            </div>
                        ),
                    }}
                    slides={projects[openLightboxIndex - 1].src.map((image) => ({
                        src: image,
                        description: projects[openLightboxIndex - 1].description,
                    }))}
                    close={closeLightbox}
                />
            )}
        </div>
    )
}
