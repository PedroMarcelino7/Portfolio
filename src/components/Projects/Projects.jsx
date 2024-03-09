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
        <div className='container'>
            <div className="row">
                <h1>Projects</h1>

                <div className="col-6">
                    <div className={`row ${styles.project_box}`}>
                        <h2>Project name</h2>

                        <div className="col-6">
                            <figure onClick={() => setOpen(true)}>
                                <img className='img-fluid' src={slides[0].src} alt="" />
                            </figure>
                        </div>

                        <div className="col-6">
                            <div className={styles.project_description}>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, veniam reprehenderit? Cupiditate pariatur expedita nisi odio ipsa placeat, ratione dolorum voluptate adipisci sit dolorem dolor!
                                </p>

                                <button onClick={() => setOpen(true)}>Ler mais</button>
                            </div>
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