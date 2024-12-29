import styles from './About.module.scss'

import { useState } from 'react'

import Curriculum from './Modal/Curriculum'
import Technologies from './Technologies/Technologies'
import ReadMoreModal from './ReadMoreModal/ReadMoreModal'

const About = () => {
    const [showCurriculum, setShowCurriculum] = useState(false)
    const [showReadMore, setShowReadMore] = useState(false)

    const handleShowCurriculum = (status) => {
        setShowCurriculum(status)
    }

    const handleShowReadMore = (status) => {
        setShowReadMore(status)
    }

    return (
        <>
            <div className={styles.about} id='about'>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-7">
                            <div className="d-flex flex-column">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h1 className={`fs-1 ${styles.title}`}>
                                        About me
                                    </h1>

                                    <button className={styles.download_button} onClick={() => handleShowCurriculum(true)}>
                                        <span><i className="bi bi-download"></i></span> Download C.V.
                                    </button>
                                </div>

                                <p className={`mt-4 fs-5 ${styles.paragraph}`} style={{ textAlign: 'justify' }}>
                                    I’m Pedro Paulo Marcelino, a student of Systems Analysis and Development with a strong passion for technology and programming. I’m specializing in front-end development with experience in technologies like React, Next.js, and TypeScript, while also having knowledge in back-end tools such as Node.js, PHP, and Python.
                                </p>

                                <div className="d-flex justify-content-end fs-5">
                                    <button className={styles.read_more_button} onClick={() => handleShowReadMore(true)}>
                                        Read more...
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-5">
                            <Technologies />
                        </div>
                    </div>
                </div>
            </div>

            {showCurriculum && <Curriculum handleShowCurriculum={handleShowCurriculum} />}
            {showReadMore && <ReadMoreModal handleShowReadMore={handleShowReadMore} />}
        </>
    )
}

export default About