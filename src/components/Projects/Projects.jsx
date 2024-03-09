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

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className={`rounded-3 ${styles.project_card}`}>
                        <img className='img-fluid rounded-top-3' src={slides[0].src} alt="" />

                        <div className={styles.project_description}>
                            <h1>{slides[0].title}</h1>

                            {/* MAP TECHNOLOGIES */}
                            <div>
                                <span class="badge text-bg-primary fs-6 m-1">Primary</span> {/* MAP */}
                                <span class="badge text-bg-primary fs-6 m-1">Primary</span> 
                                <span class="badge text-bg-primary fs-6 m-1">Primary</span> 
                                <span class="badge text-bg-primary fs-6 m-1">Primary</span> 
                                <span class="badge text-bg-primary fs-6 m-1">Primary</span> 
                                <span class="badge text-bg-primary fs-6 m-1">Primary</span> 
                                <span class="badge text-bg-primary fs-6 m-1">Primary</span> 
                            </div>

                            <button onClick={() => setOpen(true)}>Description</button>
                        </div>

                        <Lightbox
                            plugins={[Captions, Zoom]}
                            open={open}
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