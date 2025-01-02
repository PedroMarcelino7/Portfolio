import styles from './ProjectsCard.module.scss'

import React, { useState } from 'react'

import { projects } from '../../../data'

import Lightbox from 'yet-another-react-lightbox'
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"

export default function ProjectsMap({ project, id }) {
    const [openLightboxIndex, setOpenLightboxIndex] = useState(null)
    const [showProjectVideo, setShowProjectVideo] = useState(false)

    const openLightbox = (index) => {
        setOpenLightboxIndex(index)
    }

    const closeLightbox = () => {
        setOpenLightboxIndex(null)
    }

    const setBadgeColor = (technology) => {
        switch (technology) {
            case 'React':
                return '#58C4DC'
            case 'TypeScript':
                return '#3178C6'
            case 'MySQL':
                return '#F29221'
            case 'Material UI':
                return '#3399FF'
            case 'HTML5':
                return '#F76300'
            case 'CSS3':
                return '#1F62AE'
            case 'JavaScript':
                return '#EFD81D'
            case 'React Router':
                return '#F44250'
            case 'Vue':
                return '#3FB27F'
            default:
                return 'blue'
        }
    }

    const handleShowProjectVideo = (id) => {
        setShowProjectVideo(true)
        null
    }

    return (
        <>
            <div className="col-lg-6 mb-3">
                <div className={`rounded-3 ${styles.project_card}`}>
                    <img
                        className='img-fluid rounded-top-3 w-100'
                        onClick={() => openLightbox(id)}
                        src={project.src[0]}
                        alt={project.title}
                    />

                    <div className={styles.project_description}>
                        <h1 className='fs-3'>{project.title}</h1>

                        <div className='mt-2 mb-5'>
                            {project.technologies.map((technology, key) => (
                                <span key={key}
                                    className="badge fs-6 m-1"
                                    style={{ backgroundColor: setBadgeColor(technology) }}
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        <div className="d-flex justify-content-between">
                            <a
                                href={project.page}
                                target='_blank'
                                onClick={project.page ? null : () => handleShowProjectVideo(project.id)}
                            >
                                <button
                                    className={`${styles.card_button} btn fw-bold fs-6`}
                                >
                                    View Project
                                </button>
                            </a>
                            <button className={`${styles.card_button} btn fw-bold fs-6`} onClick={() => openLightbox(id)}>View Details</button>
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
                                    <p style={{ textAlign: 'justify' }}>{slide.description}</p>
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

            {showProjectVideo &&
                <div style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: '1000',
                    position: 'fixed',
                    left: '0',
                    top: '0'
                }}>
                    <video autoPlay height='1300px' src={project.video} onClick={() => setShowProjectVideo(false)}></video>
                </div>
            }
        </>
    )
}
