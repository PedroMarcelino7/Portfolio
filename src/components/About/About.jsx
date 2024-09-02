import styles from './About.module.scss'

import { useState } from 'react'

import Curriculum from './Modal/Curriculum'
import Technologies from './Technologies/Technologies'

const About = () => {
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = (status) => {
        setShowModal(status)
    }

    return (
        <>
            <div className={styles.about} id='about'>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-7">
                            <div className="d-flex flex-column">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h1 className='fs-1'>
                                        About me
                                    </h1>

                                    <button className={styles.button} onClick={() => handleShowModal(true)}>
                                        <span><i class="bi bi-download"></i> </span> Download C.V.
                                    </button>
                                </div>

                                <p style={{ textAlign: 'justify' }}>
                                    Olá! Sou Pedro Paulo Marcelino de Almeida, estudante de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento web. Trabalho com linguagens como JavaScript, PHP, e Python, além de frameworks modernos como React e Next.js. Tenho experiência prática em projetos que envolvem APIs, sistemas de estoque, e mais, sempre em busca de novas oportunidades para aprimorar minhas habilidades e contribuir para soluções eficientes. Vamos trocar ideias e explorar novas colaborações!
                                </p>
                            </div>
                        </div>

                        <div className="col-5">
                            <Technologies />
                        </div>
                    </div>
                </div>
            </div>

            {showModal && <Curriculum handleShowModal={handleShowModal} />}
        </>
    )
}

export default About