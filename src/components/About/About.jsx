import Technologies from '../Technologies/Technologies'
import styles from './About.module.scss'

import Curriculum from './Modal/Curriculum'
import { useState } from 'react'

const About = () => {
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = (status) => {
        setShowModal(status)
    }

    return (
        <>
            <div className={styles.about}>
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
                                    Olá! Sou Pedro Paulo Marcelino de Almeida, um apaixonado por tecnologia e estudante do 6º semestre de Análise e Desenvolvimento de Sistemas na Fatec Guaratinguetá. Com um forte interesse em desenvolvimento web, tenho me dedicado a aprender e aplicar linguagens de programação como JavaScript, PHP, e Python, além de trabalhar com frameworks modernos como React e Next.js.
                                    Ao longo da minha jornada, desenvolvi uma série de projetos práticos, desde sistemas de gerenciamento de estoque até aplicações que consomem APIs externas, sempre buscando criar soluções eficientes e funcionais. Valorizo a prática constante e o aprendizado contínuo, e estou sempre em busca de novos desafios que me permitam crescer como desenvolvedor.
                                    Meu objetivo é continuar evoluindo minhas habilidades técnicas e contribuir para projetos impactantes, seja em um estágio ou em colaborações com outros profissionais. Acredito que o trabalho em equipe e a troca de conhecimento são fundamentais para o sucesso na área de tecnologia.
                                    Fique à vontade para explorar meus projetos e entre em contato se quiser saber mais!
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