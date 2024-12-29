import styles from './ReadMoreModal.module.scss'

const ReadMoreModal = ({ handleShowReadMore }) => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>About me</h1>

                    <i onClick={() => handleShowReadMore(false)} className="bi bi-x text-black d-flex" style={{ fontSize: '2.5rem', cursor: 'pointer' }}></i>
                </div>

                <div className={styles.content}>
                    <p>
                        I’m Pedro Paulo Marcelino, a student of Systems Analysis and Development with a strong passion for technology and programming. I’m specializing in front-end development with experience in technologies like React, Next.js, and TypeScript, while also having knowledge in back-end tools such as Node.js, PHP, and Python.
                    </p>
                    <p>
                        My academic and professional journey reflects my commitment to continuous learning and my desire to create innovative technological solutions. I have participated in scientific research projects supported by CNPq and worked as a census taker for IBGE, experiences that enhanced my skills in organization, communication, and data analysis. Additionally, I have completed several complementary courses in web development, focusing on modern frameworks and methodologies.
                    </p>
                    <p>
                        My goal is to become a development specialist, contributing to projects that combine innovation and functionality. I am looking for opportunities to apply my technical knowledge, collaborate with dynamic teams, and keep learning about new technologies.
                    </p>
                    <p>
                        Stack: React, Next, TypeScript, JavaScript, HTML5, CSS3, Bootstrap, MaterialUI, Tailwind, Sass, Node, PHP, Python, Java, Git.<br />
                        Soft Skills: Continuous learning, teamwork, attention to detail.
                    </p>
                    <p>
                        If you share my passion for technology or are looking for partners for challenging projects, I’d be delighted to connect. Let’s talk!
                    </p>
                </div>

                
            </div>
        </div >
    )
}

export default ReadMoreModal