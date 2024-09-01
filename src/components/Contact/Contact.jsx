import styles from './Contact.module.scss'

const Contact = () => {
    const accessKey = import.meta.env.VITE_EMAIL_ACCESS_KEY;

    const onSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        formData.append("access_key", accessKey)

        const object = Object.fromEntries(formData)
        const json = JSON.stringify(object)

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json())

        if (res.success) {
            alert('E-mail sent!')
        }
    }

    return (
        <div className={styles.contact}>
            <div className={styles.contact_box}>
                <form onSubmit={(event) => onSubmit(event)}>
                    <input className={styles.input} name='name' placeholder='Name' />

                    <input className={styles.input} name='email' placeholder='E-mail' />

                    <textarea className={styles.input} name='message' placeholder='Message'></textarea>

                    <div className={styles.submit_container}>
                        <div className={styles.file_box}>
                            <i class="bi bi-paperclip"></i>
                        </div>

                        <button type='submit' className={styles.button}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact