import styles from './About.module.scss'

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className={`${styles.project_border} p-4 w-100 rounded-3`}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dolore, natus suscipit ea similique porro doloremque quasi unde minus officia placeat aspernatur quas sint ducimus dolorem ut aut distinctio! Ex error cupiditate eaque optio aut sapiente eligendi veniam atque, saepe nihil at repudiandae amet dolores voluptas dolore necessitatibus, maxime molestias.</p>
                </div>
            </div>
        </section>
    )
}