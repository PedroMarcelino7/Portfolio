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
                <div className="col-lg-6 mb-5">
                    <div className={`rounded-3 ${styles.project_card}`}>
                        <img className='img-fluid rounded-top-3' onClick={() => setOpen(true)} src={slides[0].src} alt="" />

                        <div className={styles.project_description}>
                            <h1>{slides[0].title}</h1>

                            {/* MAP TECHNOLOGIES */}
                            <div>
                                {/* MAP */}
                                <span className="badge text-bg-primary fs-6 m-1">Primary</span>
                                <span className="badge text-bg-primary fs-6 m-1">Primary</span>
                                <span className="badge text-bg-primary fs-6 m-1">Primary</span>
                                <span className="badge text-bg-primary fs-6 m-1">Primary</span>
                                <span className="badge text-bg-primary fs-6 m-1">Primary</span>
                                <span className="badge text-bg-primary fs-6 m-1">Primary</span>
                                <span className="badge text-bg-primary fs-6 m-1">Primary</span>
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
                                    src: slides[0].src,
                                    title: slides[0].title,
                                    description: slides[0].description,
                                }
                            ]}

                            close={() => setOpen(false)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}