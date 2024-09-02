import styles from './Contact.module.scss'

const Contact = () => {
    const accessKey = import.meta.env.VITE_EMAIL_ACCESS_KEY;
    const whatsapp = import.meta.env.VITE_WHATSAPP_API

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
                <h1 className={styles.title}>Send me a message!</h1>

                <form onSubmit={(event) => onSubmit(event)}>
                    <input className={styles.input} name='name' placeholder='Your NAME' />

                    <input className={styles.input} name='email' placeholder='Your E-MAIL' />

                    <textarea className={styles.input} name='message' placeholder='Leave a message'></textarea>

                    <div className={styles.submit_container}>
                        <div>
                            <label htmlFor="fileInput" className={styles.file_box}>
                                <i className="bi bi-paperclip"></i>
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                name='file'
                                className={styles.file_input}
                            />
                        </div>

                        <button type='submit' className={styles.button}>
                            Submit
                        </button>

                        <div>
                            <a href={`${whatsapp}Hello, leave me a message!`} target="_blank" className={styles.whatsapp}>
                                <i class="bi bi-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact