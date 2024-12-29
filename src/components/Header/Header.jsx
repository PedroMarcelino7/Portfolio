import styles from './Header.module.scss'

import Theme from './Theme/Theme'

export default function Header() {
    return (
        <>
            <header
                className='position-relative d-flex flex-column justify-content-center align-items-center vw-100 vh-100'
                id='header'
            >
                <div className={`${styles.title} mb-5`}>
                    <h1 className='m-0 fs-1 lh-1'>Hello<span>.</span></h1>
                    <h2 className='m-0 fs-3'>I am <span>Pedro Marcelino</span></h2>
                </div>

                <div className={styles.socials_container}>
                    <ul className='list-unstyled d-flex align-items-center justify-content-center fs-1'>
                        <li>
                            <a id={styles.instagram} href="https://instagram.com/pedro.marcelino_" target='_blank'>
                                <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a id={styles.github} href="https://github.com/PedroMarcelino7" target='_blank'>
                                <i className="bi bi-github"></i>
                            </a>
                        </li>
                        <li>
                            <a id={styles.linkedin} href="https://linkedin.com/in/pedro-paulo-marcelino" target='_blank'>
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.button_box}>
                    <a href="#about">
                        <button>
                            <svg className={styles.button_effect} width="180px" height="60px" viewBox="0 0 180 60">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" />
                            </svg>

                            <span className='fw-bold fs-5'>DETAILS</span>
                        </button>
                    </a>
                </div>

                <svg
                    version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%"
                    viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice"
                    className={styles.svg_background}
                >
                    <defs>
                        <linearGradient id="bg">
                            <stop offset="0%" className={styles.wave_bg}></stop>
                            <stop offset="50%" className={styles.wave_bg}></stop>
                            <stop offset="100%" className={styles.wave_bg}></stop>
                        </linearGradient>
                        <path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
                    </defs>
                    <g>
                        <use xlinkHref='#wave' opacity="0.15">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="5s"
                                calcMode="spline"
                                values="270 200; -340 150; 270 200"
                                keyTimes="0; .5; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                        <use xlinkHref='#wave' opacity="0.35">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="7s"
                                calcMode="spline"
                                values="-270 250; 200 175 ;-270 250"
                                keyTimes="0; .6; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                        <use xlinkHref='#wave' opacity="1">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="9s"
                                calcMode="spline"
                                values="0 300; -300 250; 0 300"
                                keyTimes="0; .4; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                    </g>
                </svg>
            </header>

            <Theme />
        </>
    )
}
