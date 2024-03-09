import styles from './Projects.module.scss'
import { useState } from 'react'

import Lightbox from 'yet-another-react-lightbox'
import Captions from "yet-another-react-lightbox/plugins/captions"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/captions.css"
import "yet-another-react-lightbox/styles.css"


import { slides } from '../../data'

export default function Projects() {
    const [open, setOpen] = useState(false)
    const [renderPrev, setRenderPrev] = useState(false);
    const [renderNext, setRenderNext] = useState(false);

    return (
        <div className="container">
            <div className="row">
                {slides.map((slide, key) => (
                    <div className="col-lg-6 mb-5" key={key}>
                        <div className={`rounded-3 ${styles.project_card}`}>
                            <img className='img-fluid rounded-top-3 w-100' style={{ height: '350px' }} onClick={() => setOpen(true)} src={slide.src} alt="" />

                            <div className={styles.project_description}>
                                <h1>{slide.title}</h1>

                                <div>
                                    {slide.technologies.map((technology, key) => (
                                        <span className="badge text-bg-primary fs-6 m-1" key={key}>{technology}</span>
                                    ))}
                                </div>

                                <div className="d-flex justify-content-end">
                                    <button className='btn btn-outline-info fw-bold fs-6' onClick={() => setOpen(true)}>Description</button>
                                </div>
                            </div>

                            <Lightbox
                                plugins={[Captions, Zoom]}
                                open={open}
                                hideControls={true}
                                render={{
                                    buttonPrev: renderPrev ? undefined : () => null,
                                    buttonNext: renderNext ? undefined : () => null,
                                }}
                                slides={[
                                    {
                                        src: slide.src,
                                        title: slide.title,
                                        description: slide.description,
                                    }
                                ]}

                                close={() => setOpen(false)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}