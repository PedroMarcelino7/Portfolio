import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { slides } from '../../data';
import styles from './Projects.module.scss';

export default function Projects() {
    const [openLightboxIndex, setOpenLightboxIndex] = useState(null);
    const [renderPrev, setRenderPrev] = useState(false);
    const [renderNext, setRenderNext] = useState(false);

    const openLightbox = (index) => {
        setOpenLightboxIndex(index);
    };

    const closeLightbox = () => {
        setOpenLightboxIndex(null);
    };

    return (
        <div className="container">
            <div className="row">
                {slides.map((slide, index) => (
                    <div className="col-lg-6 mb-5" key={index}>
                        <div className={`rounded-3 ${styles.project_card}`}>
                            <img
                                className='img-fluid rounded-top-3 w-100'
                                style={{ height: '350px' }}
                                onClick={() => openLightbox(index)}
                                src={slide.src}
                                alt=""
                            />

                            <div className={styles.project_description}>
                                <h1>{slide.title}</h1>

                                <div>
                                    {slide.technologies.map((technology, key) => (
                                        <span className="badge text-bg-primary fs-6 m-1" key={key}>{technology}</span>
                                    ))}
                                </div>

                                <div className="d-flex justify-content-end">
                                    <button className='btn btn-outline-info fw-bold fs-6' onClick={() => openLightbox(index)}>Description</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                src: slides[openLightboxIndex].src,
                                title: slides[openLightboxIndex].title,
                                description: slides[openLightboxIndex].description,
                            }
                        ]}
                        close={closeLightbox}
                    />
                )}
            </div>
        </div>
    )
}
