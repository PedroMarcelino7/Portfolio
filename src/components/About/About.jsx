import styles from './About.module.scss'

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className={`${styles.project_border} p-4 w-100 rounded-3`}>
                    <h1 className='fs-2'>ABOUT ME</h1>

                    <hr />

                    <p className='lead'>
                        I am a student of <i>Systems Analysis and Development</i> at Fatec Guaratinguetá, 19 years old.
                        I am deeply passionate about front-end development.
                        Advanced English and proficient in a diverse range of programming languages, including
                        <b> JavaScript</b>, <b>HTML5</b>, <b>CSS3</b>, <b>Java</b> and <b>Python</b>.
                        Additionally, I am well-versed in utilizing frameworks and libraries, including
                        <b> React</b>, <b>Typescript</b>, <b>Bootstrap</b>, <b>Material UI</b>, and <b>Sass</b>.
                    </p>
                </div>
            </div>
        </section>
    )
}