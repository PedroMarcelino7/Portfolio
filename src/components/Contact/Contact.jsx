import styles from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.contact_box}>
                <form action="">
                    <input className={styles.input} placeholder='Name' />

                    <input className={styles.input} placeholder='E-mail' />

                    <textarea className={styles.input} placeholder='Message'></textarea>

                    <button type='submit' className={styles.button}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact